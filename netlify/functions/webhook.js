global.self = global; // Define 'self' for Node.js compatibility

const admin = require("firebase-admin");
const axios = require("axios");

const TELEGRAM_BOT_TOKEN = "7893479762:AAEROtIQGKd1dJpk7MbO0tMWydoBCUxaL70";
const TELEGRAM_CHAT_ID = "1688623031";
const TELEGRAM_GROUP_ID = "-4712121548";

const TICKER_NAMES = {
	NQ: "Nasdaq",
	ES: "S&P 500",
	RTY: "Russell 2000",
	YM: "Dow Jones",
	ZS: "Soybeans",
	CL: "Crude Oil",
	GC: "Gold",
	ZW: "Wheat",
	BTC: "Bitcoin",
	BP: "British Pound",
	NG: "Natural Gas",
	LE: "Live Cattle",
	PL: "Platinum",
	ZC: "Corn",
	SI: "Silver",
	"6E": "Euro FX",
	HG: "Copper",
	TEST: "Test",
};

// Initialise Firebase SDK
function initializeFirebase() {
	try {
		console.log("Initializing Firebase");
		const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
			databaseURL:
				"https://omnnotifier-default-rtdb.europe-west1.firebasedatabase.app/",
		});

		console.log("Firebase initialized successfully");
		console.log(
			"FIrebase initialized with database URL:",
			admin.database().ref().toString()
		);

		return admin.database();
	} catch (error) {
		console.error("Error initializing Firebase:", error);
	}
}

const db = initializeFirebase();

// Function to send Telegram message
async function sendTelegramMessage(messageData, hasLink = false) {
	let text = "";

	if (messageData.type === "OMNI") {
		if (hasLink) text = `📷 OSKAR Video: ${messageData.content}`;
		else {
			text = `⭐ OSKAR Alert: ${messageData.content}`;
		}
	} else {
		// text = `🚨 KAPS Alert: ${messageData.content}`;
		text = `🚨 KAPS Alert: ${messageData.ticker} (${messageData.helper} - ${messageData.action} - ${messageData.price})`;
	}

	try {
		const telegramURL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

		await axios.post(telegramURL, {
			chat_id: TELEGRAM_CHAT_ID,
			text: text,
		});

		await axios.post(telegramURL, {
			chat_id: TELEGRAM_GROUP_ID,
			text: text,
		});

		console.log("Message sent to Telegram", messageData.content);
	} catch (error) {
		console.error("Error sending message to Telegram", error);
	}
}

exports.handler = async (event, context) => {
	console.log("Handler invoked with event:", event);

	// Add CORS headers
	const headers = {
		"Access-Control-Allow-Origin": "*", // Allow all origins (replace '*' with specific origin if needed)
		"Access-Control-Allow-Methods": "POST, OPTIONS", // Allowed methods
		"Access-Control-Allow-Headers": "Content-Type", // Allowed headers
	};

	if (event.httpMethod === "OPTIONS") {
		return {
			statusCode: 200,
			headers,
			body: "Preflight request handled",
		};
	}

	try {
		// Treat incoming body as raw string
		const rawBody = event.body ? event.body.trim() : "";
		console.log("Raw body received:", rawBody);

		if (!rawBody) {
			console.warn("Received empty payload");

			return {
				statusCode: 400,
				headers,
				body: "Invalid payload: body is empty",
			};
		}

		let parsedBody;
		let parsedText, parsedType, parsedHasLink;
		let parsedTicker, parsedAction, parsedPrice, parsedHelper;

		try {
			parsedBody = JSON.parse(rawBody);
			const { text, type, hasLink } = parsedBody;
			parsedText = text;
			parsedType = type;
			parsedHasLink = hasLink;
		} catch (error) {
			parsedText = rawBody;
			parsedType = "STRING";
			parsedHasLink = false;
		}

		if (!parsedText || !parsedType) {
			console.warn('Invalid payload structure. Missing "text" or "type.');
			return {
				statusCode: 400,
				headers,
				body: "Invalid payload structure: Missing required fields",
			};
		}

		console.log(
			`Parsed data: Text="${parsedText}", Type="${parsedType}", HasLink=${parsedHasLink}`
		);

		if (parsedType === "STRING") {
			const parts = parsedText.split(" - ");
			if (parts.length === 3) {
				[parsedTicker, parsedAction, parsedPrice] = parts;
				parsedHelper = TICKER_NAMES[parsedTicker] || "";
			} else {
				console.warn(
					"Invalid KAPS format, skipping processing:",
					parsedText
				);
				return {
					statusCode: 400,
					headers,
					body: "Invalid format: Expected TICKER - ACTION - PRICE",
				};
			}
		}

		// Construct message data
		const messageData = {
			content: parsedText,
			type: parsedType,
			timestamp: Date.now(),
			hasLink: parsedHasLink ? parsedHasLink : false,
			helper: parsedHelper || null,
			ticker: parsedTicker || null,
			action: parsedAction || null,
			price: parsedPrice || null,
		};

		if (messageData.type === "OMNI" && messageData.hasLink) {
			console.log(
				"OMNI message with link detected. Sending to Telegram only"
			);
			await sendTelegramMessage(messageData, true);
		} else {
			console.log(
				messageData.type === "OMNI"
					? "OMNI message without link detected. Sending to Telegram and Firebase"
					: "KAPS message detected. Sending to Telegram and Firebase"
			);
			await sendTelegramMessage(messageData, false);
			await db.ref("messages").push(messageData);
		}

		return {
			statusCode: 200,
			headers,
			body: "Message received and saved",
		};
	} catch (error) {
		console.error("Error in webhook function:", error);
		return {
			statusCode: 500,
			headers,
			body: `Internal Server Error: ${error.message}`,
		};
	}
};

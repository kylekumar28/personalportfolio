global.self = global; // Define 'self' for Node.js compatibility

const admin = require("firebase-admin");
const axios = require("axios");

const TELEGRAM_BOT_TOKEN = "7893479762:AAEROtIQGKd1dJpk7MbO0tMWydoBCUxaL70";
const TELEGRAM_CHAT_ID = "1688623031";
const TELEGRAM_GROUP_ID = "-4712121548";

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
async function sendTelegramMessage(messageData) {
	let text = "";

	if (messageData.type === "OMNI") {
		text = `🚨 KAPS Alert: ${messageData.content}`;
	} else {
		text = `🚨 KAPS Alert: ${messageData.content}`;
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

		try {
			parsedBody = JSON.parse(rawBody);
			const { text, type, hasLink } = parsedBody;
			parsedText = text;
			parsedType = type;
			parsedHasLink = hasLink;
		} catch (error) {
			parsedText = rawBody;
			parsedType = "STRING";
			hasLink = false;
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
			`Parsed data: Text="${text}", Type="${type}", HasLink=${hasLink}`
		);

		// Construct message data
		const messageData = {
			content: text,
			type: type,
			timestamp: Date.now(),
			hasLink: hasLink,
		};

		if (messageData.type === "OMNI" && messageData.hasLink) {
			console.log(
				"OMNI message with link detected. Sending to Telegram only"
			);
			await sendTelegramMessage(messageData);
		} else {
			console.log(
				messageData.type === "OMNI"
					? "OMNI message without link detected. Sending to Telegram and Firebase"
					: "KAPS message detected. Sending to Telegram and Firebase"
			);
			await sendTelegramMessage(messageData);
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

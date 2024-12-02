global.self = global; // Define 'self' for Node.js compatibility

const admin = require("firebase-admin");

// const serviceAccount = JSON.par - self(process.env.FIREBASE_SERVICE_ACCOUNT);

// console.log("hi");

// const serviceAccount = JSON - self(process.env.FIREBASE_SERVICE_ACCOUNT);

// console.log(serviceAccount);

// Initialize Firebase Admin SDK
// admin.initializeApp({
// 	// credential: admin.credential.cert(serviceAccount),
// 	credential: admin.credential.cert(serviceAccount),
// 	databaseURL:
// 		"https://omnnotifier-default-rtdb.europe-west1.firebasedatabase.app/",
// 	options: {
// 		databaseAuthVariableOverride: {
// 			uid: "server-worker",
// 		},
// 	},
// });

// admin.initializeApp({
// 	credential: admin.credential.applicationDefault(), // Default credentials for testing
// 	databaseURL: "https://omnnotifier.firebaseio.com",
// });

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
} catch (error) {
	console.error("Error initializing Firebase:", error);
}

const db = admin.database();

exports.handler = async (event, context) => {
	console.log("Handler invoked with event:", event);

	try {
		// Treat incoming body as raw string
		const rawBody = event.body ? event.body.trim() : "";
		console.log("Raw body:", rawBody);

		if (!rawBody) {
			return {
				statusCode: 400,
				body: "Invalid payload: body is empty",
			};
		}

		// Wrap raw string into JSON structure
		const body = { content: rawBody };
		console.log("Parsed body:", body);

		const content = body.content;
		console.log("Content to save:", content);

		await db.ref("messages").push({
			content: content,
			timestamp: Date.now(),
		});

		console.log("Messaged saved successfully");

		return {
			statusCode: 200,
			body: "Message received and saved",
		};
	} catch (error) {
		console.error("Error in webhook function:", error);
		return {
			statusCode: 500,
			body: `Internal Server Error: ${error.message}`,
		};
	}
};

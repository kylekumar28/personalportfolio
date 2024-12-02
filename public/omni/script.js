// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCcrUXyy0O7ElgKsVpyR9lODhqIi3c2K1k",
	authDomain: "omnnotifier.firebaseapp.com",
	databaseURL:
		"https://omnnotifier-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "omnnotifier",
	storageBucket: "omnnotifier.firebasestorage.app",
	messagingSenderId: "456373027955",
	appId: "1:456373027955:web:1d535de3a121f69f541606",
	measurementId: "G-J71GGK70NY",
};

// Initialize firebase + database
firebase.initializeApp(firebaseConfig);

console.log("Firebase initialized");

const db = firebase.database();

// DOM Elements
const messagesDiv = document.getElementById("messages");
const cardsContainer = document.getElementById("cards-container");
const notificationSound = document.getElementById("notification-sound");
const pauseButton = document.getElementById("alert-button");
const newDayButton = document.getElementById("new-day");
const connectionStatusBadge = document.getElementById("connection-status");

let soundPlaying = false;
let lastNewDayKey = null;
let tickers = {};
let isInitialLoad = true;

// Format timestamp as HH:MM DD/MM/YYYY
function formatTimestamp(timestamp) {
	const date = new Date(timestamp);
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const year = date.getFullYear();

	return `${hours}:${minutes} ${day}/${month}/${year}`;
}

// Pause sound button
pauseButton.addEventListener("click", () => {
	if (soundPlaying) {
		notificationSound.pause();
		notificationSound.currentTime = 0;
		soundPlaying = false;

		// Disable pause button
		pauseButton.textContent = "No New Alerts";
		pauseButton.classList.remove("active");
		pauseButton.disabled = true;
	}
});

// New day button
newDayButton.addEventListener("click", async () => {
	const rawTimestamp = Date.now();
	const rawFormattedTimestamp = formatTimestamp(rawTimestamp);

	await db.ref("messages").push({
		content: "NEW DAY",
		timestamp: rawTimestamp,
		formattedTimestamp: rawFormattedTimestamp,
	});

	console.log("New day added:", rawTimestamp, rawFormattedTimestamp);
});

// Monitor connection status
db.ref(".info/connected").on("value", (snapshot) => {
	const isConnected = snapshot.val();
	if (isConnected) {
		connectionStatusBadge.textContent = "Connected";
		connectionStatusBadge.classList.remove("disconnected");
		connectionStatusBadge.classList.add("connected");
	} else {
		connectionStatusBadge.textContent = "Disconnected";
		connectionStatusBadge.classList.remove("connected");
		connectionStatusBadge.classList.add("disconnected");
	}
});

// Listen for new messages
db.ref("messages")
	.once("value")
	.then((snapshot) => {
		const messages = snapshot.val();
		let processingHistory = false;

		if (messages) {
			Object.entries(messages).forEach(([key, messageData]) => {
				// Process existing messages
				displayMessage(messageData);

				// Detect the most recent "NEW DAY marker"
				if (messageData.content === "NEW DAY") {
					lastNewDayKey = key;
					tickers = {};
					cardsContainer.innerHTML = "";
					processingHistory = true;
					return;
				}

				// Add messages to cards only if they are after the last "NEW DAY"
				if (processingHistory || !lastNewDayKey) {
					handleMessageForCards(key, messageData);
				}
			});
		}

		// Mark initial load as complete
		console.log("Initial load complete. Listening for new messages...");
	})
	.then(() => {
		// Start listening for new messages after initial load
		isInitialLoad = false;

		const startListeningFrom = Date.now();

		db.ref("messages").on("child_added", (snapshot) => {
			const messageData = snapshot.val();
			const key = snapshot.key;

			if (messageData.timestamp < startListeningFrom) {
				return;
			}

			// Add to raw data view
			displayMessage(messageData);

			// Handle message for ticker cards
			handleMessageForCards(key, messageData);

			// Play notification sound for new messages only
			if (!isInitialLoad && !soundPlaying) {
				console.log("notify");
				notificationSound.play();
				soundPlaying = true;

				pauseButton.textContent = "Stop Sound";
				pauseButton.classList.add("active");
				pauseButton.disabled = false;
			}
		});
	});

// db.ref("messages").on("child_added", (snapshot) => {
// 	const messageData = snapshot.val();
// 	const key = snapshot.key;
// 	const formattedTimestamp = formatTimestamp(messageData.timestamp);

// 	// Add to raw data view
// 	displayMessage(messageData);

// 	// Handle "NEW DAY"
// 	if (messageData.content === "NEW DAY") {
// 		lastNewDayKey = key;
// 		tickers = {};
// 		cardsContainer.innerHTML = "";
// 		return;
// 	}

// 	// Ignore messages before the most recent "NEW DAY"
// 	if (lastNewDayKey && key <= lastNewDayKey) {
// 		return;
// 	}

// 	// Parse messsage
// 	const [ticker, action, price] = messageData.content.split(" - ");
// 	console.log(ticker, action, price);

// 	if (!ticker || !action || !price) {
// 		console.error("Invalid message format:", messageData.content);
// 		return;
// 	}

// 	// Create or update a card for the ticker
// 	if (!tickers[ticker]) {
// 		const card = document.createElement("div");
// 		card.className = "card";
// 		card.innerHTML = `<h2>${ticker}</h2><ul></ul>`;
// 		cardsContainer.appendChild(card);
// 		tickers[ticker] = card.querySelector("ul");
// 	}

// 	// Add the alert to the ticker's card
// 	const alertItem = document.createElement("li");
// 	alertItem.textContent = `${action} at ${price} (${formattedTimestamp})`;
// 	tickers[ticker].appendChild(alertItem);

// 	// Play notification sound
// 	if (!soundPlaying) {
// 		notificationSound.play();
// 		soundPlaying = true;

// 		// Enable pause button
// 		pauseButton.disabled = false;
// 	}
// });

// Handle messages for ticker cards
function handleMessageForCards(key, messageData) {
	if (messageData.content === "NEW DAY") {
		lastNewDayKey = key;
		tickers = {};
		cardsContainer.innerHTML = "";
		return;
	}

	// Ignore messages before the most recent "NEW DAY"
	if (lastNewDayKey && key <= lastNewDayKey) {
		return;
	}

	// Validate message format
	const parts = messageData.content.split(" - ");
	if (parts.length !== 3) {
		console.warn(
			"Invalid message format. Skipping card creation:",
			messageData.content
		);
		return;
	}

	const [ticker, action, price] = parts;

	// Create or update a card for the ticker
	if (!tickers[ticker]) {
		const card = document.createElement("div");
		card.className = "card";
		card.innerHTML = `<h2>${ticker}</h2><ul></ul>`;
		cardsContainer.appendChild(card);
		tickers[ticker] = card.querySelector("ul");
	}

	// Add the alert to the tickers card
	const alertItem = document.createElement("li");
	alertItem.textContent = `${action} at ${price} (${formatTimestamp(
		messageData.timestamp
	)})`;
	tickers[ticker].appendChild(alertItem);
}

// Display a message
function displayMessage(message) {
	const messageElement = document.createElement("p");
	const formattedTimestamp = formatTimestamp(message.timestamp);

	messageElement.textContent = `${message.content} - ${formattedTimestamp}`;
	// Set it as bold since it's the newest
	messageElement.style.fontWeight = "bold";

	// Insert at the top of the messages div
	messagesDiv.prepend(messageElement);

	// Set all other messages to normal weight
	const allMessages = messagesDiv.querySelectorAll("p");
	allMessages.forEach((msg, index) => {
		if (index > 0) {
			msg.style.fontWeight = "normal";
		}
	});
}

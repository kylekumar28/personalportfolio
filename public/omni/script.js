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
const tickersFilterDiv = document.getElementById("ticker-filter");

const notificationSound = document.getElementById("notification-sound");
const pauseButton = document.getElementById("alert-button");
const newDayButton = document.getElementById("new-day");
const connectionStatusBadge = document.getElementById("connection-status");

let selectedTickers = new Set([
	"NQ",
	"ES",
	"RTY",
	"ZS",
	"CL",
	"GC",
	"ZW",
	"BTC",
]); // Default: All selected

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

// Handle checkbox changes
tickersFilterDiv.addEventListener("change", (event) => {
	const checkbox = event.target;
	const ticker = checkbox.value;

	if (checkbox.checked) {
		selectedTickers.add(ticker);
		console.log("Ticker added to filter:", ticker);
	} else {
		selectedTickers.delete(ticker);
		console.log("Ticker removed from filter:", ticker);

		// Remove card for this ticker if it exists
		if (tickers[ticker]) {
			tickers[ticker].parentElement.remove();
			delete tickers[ticker];
		}
	}
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

			// Play notification sound for only selected tickers
			const [ticker] = messageData.content.split(" - ");
			if (selectedTickers.has(ticker)) {
				console.log(`Playing sound for ticker: ${ticker}`);

				if (!isInitialLoad && !soundPlaying) {
					console.log("notify");
					notificationSound.play();
					soundPlaying = true;

					pauseButton.textContent = "Stop Sound";
					pauseButton.classList.add("active");
					pauseButton.disabled = false;
				}
			} else {
				console.log(`Ticker ${ticker} is not selected. No sound.`);
			}
		});
	});

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

	if (!selectedTickers.has(ticker)) {
		console.log(`Ticker ${ticker} not selected. Skipping card creation`);
		return;
	}

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
	alertItem.innerHTML = `
        <span class="action-price">${action}</span> <span>${" @ "}</span> <span class="action-price">${price}</span>
        <span class="timestamp" style="margin-left: 10px">${formatTimestamp(
			messageData.timestamp
		)}</span>
    `;
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

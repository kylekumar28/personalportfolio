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
const pauseButton = document.getElementById("pause-sound");
const newDayButton = document.getElementById("new-day");
const connectionStatusBadge = document.getElementById("connection-status");

let soundPlaying = false;
let lastNewDayKey = null;
let tickers = {};

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

// Pause sound button
pauseButton.addEventListener("click", () => {
	if (soundPlaying) {
		notificationSound.pause();
		soundPlaying = false;

		// Disable pause button
		pauseButton.disabled = true;
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

// db.ref("messages").on("value", (snapshot) => {
// 	console.log("Realtime data:", snapshot.val());
// });

// Listen for new messages
db.ref("messages").on("child_added", (snapshot) => {
	const messageData = snapshot.val();
	const key = snapshot.key;
	const formattedTimestamp = formatTimestamp(messageData.timestamp);

	// Add to raw data view
	displayMessage(messageData);

	// Handle "NEW DAY"
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

	// Parse messsage
	const [ticker, action, price] = messageData.content.split(" - ");

	if (!ticker || !action || !price) {
		console.error("Invalid message format:", messageData.content);
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

	// Add the alert to the ticker's card
	const alertItem = document.createElement("li");
	alertItem.textContent = `${action} at ${price} (${formattedTimestamp})`;
	tickers[ticker].appendChild(alertItem);

	// Play notification sound
	if (!soundPlaying) {
		notificationSound.play();
		soundPlaying = true;

		// Enable pause button
		pauseButton.disabled = false;
	}
});

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

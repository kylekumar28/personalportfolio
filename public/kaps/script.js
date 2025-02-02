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
const muteSwitch = document.getElementById("mute-switch");
const testAlertButton = document.getElementById("test");
const refreshAllClients = document.getElementById("refresh-all-clients");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const messagesContainer = document.getElementById("messages");
const messagesToggle = document.getElementById("messages-toggle");

// const tickerNames = {
// 	NQ: "Nasdaq",
// 	ES: "S&P 500",
// 	RTY: "Russell 2000",
// 	YM: "Dow Jones",
// 	ZS: "Soybeans",
// 	CL: "Crude Oil",
// 	GC: "Gold",
// 	ZW: "Wheat",
// 	BTC: "Bitcoin",
// 	BP: "British Pound",
// 	NG: "Natural Gas",
// 	LE: "Live Cattle",
// 	PL: "Platinum",
// 	ZC: "Corn",
// 	SI: "Silver",
// 	"6E": "Euro FX",
// };

let selectedTickers = new Set([
	"NQ",
	"ES",
	"RTY",
	"YM",
	"ZS",
	"CL",
	"GC",
	"ZW",
	"BTC",
	"BP",
	"NG",
	"LE",
	"PL",
	"ZC",
	"SI",
	"6E",
	"HG",
	"TEST",
]); // Default: All selected
let allMessages = [];
let soundPlaying = false;
let lastNewDayKey = null;
let tickers = {};
let isInitialLoad = true;
let isMuted = false;
let lastSeenTimestamp = null;

// View message history
messagesToggle.addEventListener("change", (event) => {
	if (event.currentTarget.checked) {
		messagesContainer.style.display = "block";
	} else if (!event.currentTarget.checked) {
		messagesContainer.style.display = "none";
	}
});

document.getElementById("dismiss-banner").addEventListener("click", () => {
	document.getElementById("latest-alert-banner").classList.add("hidden");
});

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

	await db.ref("status").set({
		event: "NEW_DAY",
		timestamp: rawTimestamp,
	});

	console.log("New day added:", rawTimestamp, rawFormattedTimestamp);
});

// Test alert button
testAlertButton.addEventListener("click", () => {
	// Trigger the "new alert" sound and trigger "stop alert" button to think an alert has come through - no need to push anything to database
	soundPlaying = true;
	notificationSound.play();

	// Simulate enabling the pause button and updating its state
	pauseButton.textContent = "Stop Alert";
	pauseButton.classList.add("active");
	pauseButton.disabled = false;
});

// Function to process historical data for a specific ticker
function reloadTickerData(ticker) {
	// Clear the card for the ticker if it exists
	if (tickers[ticker]) {
		tickers[ticker].parentElement.remove();
		delete tickers[ticker];
	}

	// Process messages since the last "NEW DAY" for the rechecked ticker
	allMessages.forEach(({ key, messageData }) => {
		const [messageTicker] = messageData.content.split(" - ");

		if (messageTicker === ticker) {
			handleMessageForCards(key, messageData);
		}
	});
}

// Handle unmute/mute toggle
muteSwitch.addEventListener("change", () => {
	const muteSlider = muteSwitch.nextElementSibling;

	isMuted = muteSwitch.checked; // true for muted, false, for unmuted

	if (isMuted) {
		muteSwitch.checked = true; // Set toggle to "Muted"
		muteSlider.style.backgroundColor = "#dc3545"; // Red for muted
	} else {
		muteSwitch.checked = false; // Set toggle to "Unmuted"
		muteSlider.style.backgroundColor = "#28a745"; // Green for unmuted
	}

	// isMuted = !isMuted; // toggle mute state
	console.log(isMuted ? "Muted" : "Unmuted");
});

// Dark mode toggle
darkModeToggle.addEventListener("change", (e) => {
	if (e.target.checked === true) {
		console.log("checked");
		document.body.classList.add("dark-mode");
	} else {
		console.log("unchecked");
		document.body.classList.remove("dark-mode");
	}
});

// Initialize mute toggle UI
function initializeMuteToggle() {
	const muteSwitchInput = document.getElementById("mute-switch");
	const muteSlider = muteSwitchInput.nextElementSibling;

	// Set initial toggle position and color
	if (isMuted) {
		muteSwitchInput.checked = true; // Set toggle to "Muted"
		muteSlider.style.backgroundColor = "#dc3545"; // Red for muted
	} else {
		muteSwitchInput.checked = false; // Set toggle to "Unmuted"
		muteSlider.style.backgroundColor = "#28a745"; // Green for unmuted
	}
}

// Refresh button on click
refreshAllClients.addEventListener("click", () => {
	const timestamp = Date.now(); // Current timestamp
	db.ref("commands/refresh").set({ timestamp });
	console.log("Refresh sent to all clients");
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

// Listen for neew day by clients
db.ref("status").on("value", (snapshot) => {
	const statusData = snapshot.val();

	if (statusData && statusData.event === "NEW_DAY") {
		console.log("new day event received, clearing cards");

		tickers = {};
		cardsContainer.innerHTML = "";
		allMessages = [];
	}
});

// Listen for refresh commands
db.ref("commands/refresh").on("value", (snapshot) => {
	const refreshData = snapshot.val();
	const now = Date.now();

	if (
		refreshData &&
		refreshData.timestamp &&
		Math.abs(now - refreshData.timestamp) <= 100
	) {
		console.log("Refresh signal detected. Reloading...");
		window.location.reload();
	} else {
		console.log("Refresh signal out of time");
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
					console.log(
						"New day detected. Starting message processing."
					);
					lastNewDayKey = key;
					tickers = {};
					cardsContainer.innerHTML = "";
					allMessages = [];
					processingHistory = true;
					return;
				}

				if (!processingHistory) {
					console.log("Skipping old messages");
					return;
				}

				// Add messages to cards only if they are after the last "NEW DAY"
				handleMessageForCards(key, messageData);
				allMessages.push({ key, messageData });
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

			if (lastNewDayKey && key <= lastNewDayKey) {
				return;
			}

			if (messageData.content === "NEW DAY") {
				return;
			}

			const latestAlertText =
				messageData.type === "OMNI"
					? messageData.content.length > 50
						? `${messageData.content.substring(0, 50)}...`
						: messageData.conent
					: `Ticker: ${
							messageData.content.split(" - ")[0]
					  } - ${messageData.content
							.split(" - ")
							.slice(1)
							.join(" ")}`;

			const latestAlertBanner = document.getElementById(
				"latest-alert-banner"
			);
			const latestAlertTextElement =
				document.getElementById("latest-alert-text");

			latestAlertTextElement.textContent = `Latest Alert: ${latestAlertText}`;
			latestAlertBanner.classList.remove("hidden");

			// Add to raw data view
			displayMessage(messageData);

			allMessages.push({ key, messageData });

			// Play notification sound for only selected tickers
			if (messageData.type === "OMNI") {
				handleMessageForCards(key, messageData);
				console.log(
					`Playing sound for OMNI alert: ${messageData.content}`
				);

				if (!isInitialLoad && !isMuted && !soundPlaying) {
					console.log("notify");
					notificationSound.play();
					soundPlaying = true;

					pauseButton.textContent = "Stop Sound";
					pauseButton.classList.add("active");
					pauseButton.disabled = false;
				}
			} else {
				const [ticker] = messageData.content.split(" - ");
				if (selectedTickers.has(ticker)) {
					// Handle message for ticker cards
					handleMessageForCards(key, messageData);

					console.log(`Playing sound for ticker: ${ticker}`);

					if (!isInitialLoad && !isMuted && !soundPlaying) {
						console.log("notify");
						notificationSound.play();
						soundPlaying = true;

						pauseButton.textContent = "Stop Sound";
						pauseButton.classList.add("active");
						pauseButton.disabled = false;
					} else {
						console.log("Something went wrong");
						console.log(
							"isInitialLoad",
							isInitialLoad,
							"isMuted",
							isMuted,
							"soundPlaying",
							soundPlaying
						);
					}
				} else {
					console.log(`Ticker ${ticker} is not selected. No sound.`);
				}
			}
		});
	});

let latestAlertItem;

// Handle messages for ticker cards
function handleMessageForCards(key, messageData) {
	let {
		content,
		type = "STRING",
		timestamp,
		helper,
		ticker,
		action,
		price,
	} = messageData;

	if (content === "NEW DAY") {
		lastNewDayKey = key;
		tickers = {};
		cardsContainer.innerHTML = "";
		allMessages = [];
		return;
	}

	// Ignore messages before the most recent "NEW DAY"
	if (lastNewDayKey && key <= lastNewDayKey) {
		console.log("Skipping message before NEW DAy:", content);
		return;
	}

	console.log(`Processing message: ${messageData.content}, Key: ${key}`);

	// let ticker, action, price;
	let cardClass;

	if (type === "OMNI") {
		content = content
			.replaceAll("OMNIACS", "TRADERS")
			.replaceAll("OMNI", "KAPS")
			.replaceAll("OSCARISM", "KUMARISM");
	}

	if (type === "OMNI") {
		ticker = "KAPS";
		cardClass = "card-kaps";
		selectedTickers.add(ticker);
	} else {
		// Validate message format
		// const parts = messageData.content.split(" - ");
		// console.log("parts", parts);
		// if (parts.length === 3) {
		// 	ticker = parts[0];
		// 	cardClass = "card-default";
		// } else {
		// 	console.warn(
		// 		"Invalid message format for STRING type. Skipping:",
		// 		content
		// 	);
		// 	return;
		// }
		helper = messageData.helper;
		ticker = messageData.ticker;
		action = messageData.action;
		price = messageData.price;
	}

	if (!selectedTickers.has(ticker)) {
		console.log(`Ticker ${ticker} not selected. Skipping card creation`);
		return;
	}

	// Get ticker name
	// let displayTicker = tickerNames[ticker]
	// 	? `${ticker} (${tickerNames[ticker]})`
	// 	: ticker;

	// Create or update a card for the ticker
	if (!tickers[ticker]) {
		const card = document.createElement("div");
		card.className = `card ${cardClass}`;
		card.innerHTML = `<h2>${ticker}</h2><ul></ul>`;
		cardsContainer.appendChild(card);
		tickers[ticker] = card.querySelector("ul");
	}

	// Add the alert to the tickers card
	const alertItem = document.createElement("li");
	if (type === "OMNI") {
		alertItem.innerHTML = `
        <p style="margin: 0;">
             <span class="" style="">${formatTimestamp(timestamp)} - </span>
        <span class="action-price">${""}</span> <span>${""}</span> <span class="">${content}</span></p>`;
	} else {
		// const [_, action, price] = content.split(" - ");
		alertItem.innerHTML = `
        <span class="action-price">${action}</span> <span>${" @ "}</span> <span class="action-price">${price}</span>
        <span class="timestamp" style="margin-left: 10px">${formatTimestamp(
			timestamp
		)}</span>
    `;
	}

	// Highlight latest alert
	if (latestAlertItem) {
		latestAlertItem.classList.remove("latest-alert");
		alertItem.classList.add("latest-alert");
	} else {
		alertItem.classList.add("latest-alert");
	}

	latestAlertItem = alertItem;
	tickers[ticker].prepend(alertItem);
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

initializeMuteToggle();

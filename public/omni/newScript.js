import { firebaseConfig } from './firebaseConfig.js';
import {
  updateConnectionStatus,
  resetForNewDay,
  processMessageContent,
  stopNotificationSound,
} from './utilities.js';

// Firebase initialization
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
console.log('Firebase initialized');

// Dom references
export const DOM = {
  messagesDiv: document.getElementById('messages'),
  cardsContainer: document.getElementById('cards-container'),
  tickerFilter: document.getElementById('ticker-filter'),
  notificationSound: document.getElementById('notification-sound'),
  pauseButton: document.getElementById('alert-button'),
  newDayButton: document.getElementById('new-day'),
  connectionStatus: document.getElementById('connection-status'),
  muteSwitch: document.getElementById('mute-switch'),
  testAlertButton: document.getElementById('test'),
  latestAlertBanner: document.getElementById('latest-alert-banner'),
  latestAlertText: document.getElementById('latest-alert-text'),
};

// Constants
const TICKERS_DATA = [
  { name: 'NQ', tickValue: 5, tickSize: 0.25 },
  { name: 'ES', tickValue: 12.5, tickSize: 0.25 },
  { name: 'RTY', tickValue: 5, tickSize: 0.1 },
  { name: 'YM', tickValue: 5, tickSize: 1 },
  { name: 'ZS', tickValue: 50, tickSize: 0.25 },
  { name: 'CL', tickValue: 10, tickSize: 0.01 },
  { name: 'GC', tickValue: 10, tickSize: 0.1 },
  { name: 'ZW', tickValue: 50, tickSize: 0.25 },
  { name: 'BTC', tickValue: 25, tickSize: 5 },
  { name: 'BP', tickValue: 12.5, tickSize: 0.0001 },
];

// Application State
export let state = {
  selectedTickers: new Set([
    'NQ',
    'ES',
    'RTY',
    'YM',
    'ZS',
    'CL',
    'GC',
    'ZW',
    'BTC',
    'BP',
    'NG',
    'LE',
    'PL',
    'ZC',
  ]),
  allMessages: [],
  tickers: {},
  soundPlaying: false,
  lastNewDayTimestamp: null,
  isInitialLoad: true,
  isMuted: false,
};

// Firebase: Monitor connection status
db.ref('.info/connected').on('value', (snapshot) => {
  updateConnectionStatus(snapshot.val());
});

// Firebase: Listen for a new day event
db.ref('status').on('value', (snapshot) => {
  const statusData = snapshot.val();
  if (statusData?.event === 'NEW_DAY') {
    resetForNewDay();
  }
});

// Firebase: Load and listen to messages
function initializeMessageListeners() {
  db.ref('messages')
    .once('value')
    .then((snapshot) => {
      const messages = snapshot.val();
      if (messages) {
        Object.values(messages).forEach(processMessageContent);
      }
      state.isInitialLoad = false;
    });

  db.ref('messages').on('child_added', (snapshot) => {
    const messageData = snapshot.val();
    if (
      !state.isInitialLoad &&
      (!state.lastNewDayTimestamp ||
        messageData.timestamp > state.lastNewDayTimestamp)
    ) {
      processMessageContent(messageData);
    }
  });
}

// Button: New day
DOM.newDayButton.addEventListener('click', async () => {
  const timestamp = Date.now();
  await db.ref('messages').push({ content: 'NEW DAY', timestamp });
  await db.ref('status').set({ event: 'NEW_DAY', timestamp });
  resetForNewDay();
});

// Button: Pause notifications
DOM.pauseButton.addEventListener('click', stopNotificationSound);

// Mute toggle
DOM.muteSwitch.addEventListener('change', () => {
  state.isMuted = DOM.muteSwitch.checked;
});

document.addEventListener('DOMContentLoaded', () => {
  initializeMessageListeners();
  console.log('Application initialized.');
});

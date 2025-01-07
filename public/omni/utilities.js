import { DOM } from './newScript.js';
import { state } from './newScript.js';

// Utility: Format timestamp
export function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
}

// Utility: Update connection status
export function updateConnectionStatus(isConnected) {
  DOM.connectionStatus.textContent = isConnected ? 'Connected' : 'Disconnected';
  DOM.connectionStatus.className = isConnected ? 'connected' : 'disconnected';
}

// Utility: Play notification sound
export function playNotificationSound() {
  if (!state.isMuted && !state.soundPlaying) {
    DOM.notificationSound.play();
    state.soundPlaying = true;
    DOM.pauseButton.textContent = 'Stop Sound';
    DOM.pauseButton.classList.add('active');
    DOM.pauseButton.disabled = false;
  }
}

// Utility: Stop notification sound
export function stopNotificationSound() {
  if (state.soundPlaying) {
    DOM.notificationSound.pause();
    DOM.notificationSound.currentTime = 0;
    state.soundPlaying = false;
    DOM.pauseButton.textContent = 'No New Alerts';
    DOM.pauseButton.classList.remove('active');
    DOM.pauseButton.disabled = true;
  }
}

// Utility: Update the latest alert banner
export function updateLatestAlertBanner(messageData) {
  const content =
    messageData.content.length > 50
      ? `${messageData.content.substring(0, 50)}...`
      : messageData.content;

  DOM.latestAlertText.textContent = `Latest Alert: ${content}`;
  DOM.latestAlertBanner.classList.remove('hidden');
}

// Utility: Reset for a new day
export function resetForNewDay() {
  state.tickers = {};
  DOM.cardsContainer.innerHTML = '';
  state.allMessages = [];
}

// Utility: Create or update card for a ticker
export function createOrUpdateCard(ticker, cardClass, content) {
  if (!state.tickers[ticker]) {
    const card = document.createElement('div');
    card.className = `card ${cardClass}`;
    card.innerHTML = `<h2>${ticker}</h2><ul></ul>`;
    DOM.cardsContainer.appendChild(card);
    state.tickers[ticker] = card.querySelector('ul');
  }

  const alertItem = document.createElement('li');
  alertItem.innerHTML = content;
  state.tickers[ticker].prepend(alertItem);
}

// Utility: Process message content
export function processMessageContent(messageData) {
  const { content, type = 'STRING', timestamp } = messageData;

  if (content === 'NEW DAY') {
    resetForNewDay();
    state.lastNewDayTimestamp = timestamp;
    return;
  }

  if (type === 'OMNI') {
    createOrUpdateCard(
      'OMNI',
      'card-omni',
      `<span>${formatTimestamp(timestamp)}: ${content}</span>`
    );
    updateLatestAlertBanner(messageData);
    playNotificationSound();
    return;
  }

  const parts = content.split(' - ');
  if (parts.length === 3) {
    const [ticker, action, price] = parts;
    if (state.selectedTickers.has(ticker)) {
      createOrUpdateCard(
        ticker,
        'card-default',
        `<span>${formatTimestamp(
          timestamp
        )}:</span> <span>${action}</span> @ <span>${price}</span>`
      );
      updateLatestAlertBanner(messageData);
      playNotificationSound();
    }
  } else {
    console.warn('Invalid message format:', content);
  }
}

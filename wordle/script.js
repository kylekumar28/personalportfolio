const tileDisplay = document.querySelector('.tile-container');
const messageDisplay = document.querySelector('.message-container');
const keyboard = document.querySelector('.key-container');

const wordle =
  wordBank[Math.floor(Math.random() * wordBank.length)].toUpperCase();

const keys = [
  'Q',
  'W',
  'E',
  'R',
  'T',
  'Y',
  'U',
  'I',
  'O',
  'P',
  'A',
  'S',
  'D',
  'F',
  'G',
  'H',
  'J',
  'K',
  'L',
  'ENTER',
  'Z',
  'X',
  'C',
  'V',
  'B',
  'N',
  'M',
  '«',
];

const guessRows = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
];

let currentRow = 0;
let currentTile = 0;
let isGameOver = false;

console.log(wordle);

window.addEventListener('keydown', (event) => {
  keys.forEach((key) => {
    if (key.toLowerCase() === event.key.toLowerCase()) {
      addLetter(key);
    }
  });

  if (event.key === 'Backspace') {
    deleteLetter();
  }

  if (event.key === 'Enter') {
    checkRow();
  }
});

guessRows.forEach((guessRow, guessRowIndex) => {
  const rowElement = document.createElement('div');
  rowElement.setAttribute('id', 'guessRow-' + guessRowIndex);

  guessRow.forEach((guess, guessIndex) => {
    const tileElement = document.createElement('div');
    tileElement.setAttribute(
      'id',
      'guessRow-' + guessRowIndex + '-tile-' + guessIndex
    );
    tileElement.classList.add('tile');
    rowElement.append(tileElement);
  });

  tileDisplay.append(rowElement);
});

keys.forEach((key) => {
  const buttonElement = document.createElement('button');
  buttonElement.textContent = key;
  buttonElement.setAttribute('id', key);
  buttonElement.addEventListener('click', () => handleClick(key));
  keyboard.append(buttonElement);
});

const handleClick = (letter) => {
  if (letter == '«') {
    console.log('delete letter');
    deleteLetter();
    return;
  }

  if (letter == 'ENTER') {
    console.log('check row for matches');
    checkRow();
    return;
  }

  addLetter(letter);
};

const addLetter = (letter) => {
  if (currentTile < 5 && currentRow < 6) {
    const tile = document.getElementById(
      'guessRow-' + currentRow + '-tile-' + currentTile
    );
    tile.textContent = letter;
    tile.setAttribute('data', letter);

    guessRows[currentRow][currentTile] = letter;

    currentTile++;
  }
};

const deleteLetter = () => {
  if (currentTile > 0) {
    currentTile--;
    const tile = document.getElementById(
      'guessRow-' + currentRow + '-tile-' + currentTile
    );
    tile.textContent = '';
    tile.setAttribute('data', '');

    guessRows[currentRow][currentTile] = '';
  }
};

const checkRow = () => {
  const guess = guessRows[currentRow].join('');
  flipTile();

  console.log('checking for word: ' + wordle);

  if (currentTile == 5) {
    console.log('guess is: ' + guess);

    if (wordle == guess) {
      showMessage('Magnificant! Refresh the page for a new word');
      isGameOver = true;
      return;
    } else {
      if (currentRow >= 5) {
        showMessage('Game Over. Word was ' + wordle);
        isGameOver = true;
        return;
      }

      if (currentRow < 5) {
        currentRow++;
        currentTile = 0;
      }
    }
  }
};

const showMessage = (message) => {
  const messageElement = document.createElement('p');
  messageElement.textContent = message;
  messageDisplay.append(messageElement);

  // setTimeout(() => messageDisplay.removeChild(messageElement), 2000);
};

const addColourToKey = (keyLetter, colour) => {
  const key = document.getElementById(keyLetter);
  key.classList.add(colour);
};

const flipTile = () => {
  const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes;
  let checkWordle = wordle;
  const guess = [];

  rowTiles.forEach((tile) => {
    guess.push({ letter: tile.getAttribute('data'), colour: 'grey-overlay' });
  });

  guess.forEach((guess, index) => {
    if (guess.letter == wordle[index]) {
      guess.colour = 'green-overlay';
      checkWordle = checkWordle.replace(guess.letter, '');
    }
  });

  guess.forEach((guess) => {
    if (checkWordle.includes(guess.letter)) {
      guess.colour = 'yellow-overlay';
      checkWordle = checkWordle.replace(guess.letter, '');
    }
  });

  rowTiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add('flip');
      tile.classList.add(guess[index].colour);
      addColourToKey(guess[index].letter, guess[index].colour);
    }, 500 * index);
  });
};

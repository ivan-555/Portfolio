const lines = [
  'Ressourcen werden geladen',
  'HTML und CSS werden geparst',
  'DOM und CSSOM Tree werden aufgebaut',
  'Render-Tree wird berechnet',
  'Rasterisierung',
  'JavaScript wird geparst',
  'Hotpaths werden kompiliert',
  'Seite wird gerendert'
];

const welcomeLine = 'Willkommen auf meinem Portfolio!';

const preloader     = document.getElementById('preloader');
const consoleOutput = document.getElementById('console-output');
const cursor        = document.getElementById('console-cursor');

const typingSpeed = 30;    // ms per char
const linePause   = 350;   // ms pause per line

let currentLine  = 0;
let currentChar  = 0;

typeLine();

function typeLine() {
  const line = lines[currentLine];

  // If still chars in line -> type
  if (currentChar < line.length) {
    const char = line.charAt(currentChar);
    const textNode = document.createTextNode(char);
    consoleOutput.insertBefore(textNode, cursor);
    currentChar++;
    setTimeout(typeLine, typingSpeed);

  } else { // If line is done
    // If its the last line -> wait for page load and type welcome line
    const isLastLine = (currentLine === lines.length - 1);
    if (isLastLine) {
      waitForLoadAndTypeWelcome();

    } else {
      // If its not the last line -> delete line and type next one
      setTimeout(() => {
        clearCurrentLine();
        currentLine++;
        currentChar = 0;
        typeLine();
      }, linePause);
    }
  }
}

// Clears alls nodes before the cursor
function clearCurrentLine() {
  while (consoleOutput.firstChild && consoleOutput.firstChild !== cursor) {
    consoleOutput.removeChild(consoleOutput.firstChild);
  }
}

// If page is loaded triggers welcome type
function waitForLoadAndTypeWelcome() {
  setTimeout(() => {
    if (document.readyState === 'complete') {
      typeWelcomeLine();
    } else {
      window.addEventListener('load', () => {
        typeWelcomeLine();
      });
    }
  }, linePause);
}

// Types welcome line and hides preloader
function typeWelcomeLine() {
  clearCurrentLine();

  let welcomeCharIndex = 0;

  function typeCharOfWelcome() {
    if (welcomeCharIndex < welcomeLine.length) {
      const char = welcomeLine.charAt(welcomeCharIndex);
      const textNode = document.createTextNode(char);
      consoleOutput.insertBefore(textNode, cursor);
      welcomeCharIndex++;
      setTimeout(typeCharOfWelcome, typingSpeed);
    } else {
      setTimeout(finishPreloader, linePause);
    }
  }

  typeCharOfWelcome();
}

function finishPreloader() {
  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 500);
}

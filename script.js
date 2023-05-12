const inputText = document.getElementById("inputText");
const extractButton = document.getElementById("extractButton");
const saveButton = document.getElementById("saveButton");
const extractedWords = document.getElementById("extractedWords");
const savedWords = document.getElementById("savedWords");

const wordBank = new Set();

function extractWords(text) {
    const regex = /\b([a-zA-Z]+)\b/g;
    let words = [];
    let match;

    while ((match = regex.exec(text)) !== null) {
        if (!wordBank.has(match[0])) {
            words.push(match[0]);
        }
    }

    return words;
}

function displayWords(words, element) {
    element.innerHTML = "";
    for (let word of words) {
        const li = document.createElement("li");
        li.textContent = word;
        element.appendChild(li);
    }
}

extractButton.addEventListener("click", () => {
    const words = extractWords(inputText.value);
    displayWords(words, extractedWords);
});

saveButton.addEventListener("click", () => {
    const words = extractWords(inputText.value);
    words.forEach(word => wordBank.add(word));
    displayWords(Array.from(wordBank), savedWords);
});

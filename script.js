const codeText = document.getElementById('codeText');
const mainButton = document.getElementById('mainButton');
const toggleCheckbox = document.getElementById('toggleCheckbox');

const resetButton = document.getElementById('resetButton');

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let codeDeck = [
	"1.2.3",
	"1.2.4",
	"1.3.2",
	"1.3.4",
	"1.4.2",
	"1.4.3",
	"2.1.3",
	"2.1.4",
	"2.3.1",
	"2.3.4",
	"2.4.1",
	"2.4.3",
	"3.1.2",
	"3.1.4",
	"3.2.1",
	"3.2.4",
	"3.4.1",
	"3.4.2",
	"4.1.2",
	"4.1.3",
	"4.2.1",
	"4.2.3",
	"4.3.1",
	"4.3.2"
];
let currentCodeIndex = 0;


function showCode() {
	if (!toggleCheckbox.checked) {
		codeText.innerText = codeDeck[currentCodeIndex];
	}
}

function hideCode() {
	if (!toggleCheckbox.checked) {
		codeText.innerText = "-.-.-";
	}
}

function updateToggle() {
	if (toggleCheckbox.checked) {
		toggleMode = true;
		codeText.innerText = codeDeck[currentCodeIndex];
	}
	else {
		toggleMode = false;
		codeText.innerText = "-.-.-";
	}
}

function resetDeck() {
	// Fisher-Yates algorithm
	for (let i = codeDeck.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = codeDeck[i];
		codeDeck[i] = codeDeck[j];
		codeDeck[j] = temp;
	}
	currentCodeIndex = 0;
	codeText.innerText = "Shuffled!";
	
	console.log(codeDeck);
}

function nextCurrentCode() {
	
	if(currentCodeIndex === codeDeck.length - 1) {
		codeText.innerText = "E:Last card";
	}
	else {
		currentCodeIndex++;
		codeText.innerText = "Next card!";
	}
	
	toggleCheckbox.checked = false;
	// console.log(currentCodeIndex);
}

function prevCurrentCode() {
	
	if(currentCodeIndex === 0) {
		codeText.innerText = "E:First card";
	}
	else {
		currentCodeIndex--;
		codeText.innerText = "Prev card!";
	}
	
	toggleCheckbox.checked = false;
	// console.log(currentCodeIndex);
}

mainButton.addEventListener("touchstart", showCode);
mainButton.addEventListener("touchend", hideCode);

mainButton.addEventListener("mousedown", showCode);
mainButton.addEventListener("mouseup", hideCode);
mainButton.addEventListener("mouseleave", hideCode);

toggleCheckbox.addEventListener("change", updateToggle);

resetButton.addEventListener("click", resetDeck);

prevButton.addEventListener("click", prevCurrentCode);
nextButton.addEventListener("click", nextCurrentCode);

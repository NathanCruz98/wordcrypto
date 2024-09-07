// Variables for the Header: Code Size
const codeSize = document.getElementById('code-size');

// Variables for the Main Screen Div: Code text, New Code Button, Code History Button, Word List Button
const codeText = document.getElementById('code-text');
const newCodeButton = document.getElementById('new-code-button');
const codeHistoryButton = document.getElementById('code-history-button');
const wordListButton = document.getElementById('word-list-button');

// Variables for the Main Buttons Div: Timer Button, View Button, Toggle View Checkbox
const timerButton = document.getElementById('timer-button');
const viewButton = document.getElementById('view-button');
const toggleCheckbox = document.getElementById('toggle-checkbox');

const localCheckbox = document.getElementById('local-checkbox');

// Variables for various code screen text aspects
let codeArray = [1,2,3,4];
let hiddenCode = "-.-.-";
let currentCode = "No Code Loaded!";
let codeViewed = false;
let codeSizeChanged = false;

// Array for keeping the code history
let historyArray = [];

// Placeholder for the timer interval function
let timerInterval;

let localWordList = [
"Accent",
"Acorn",
"Africa",
"Agent",
"Air",
"Aladdin",
"Alarm",
"Alcatraz",
"Alcohol",
"Alien",
"Alliance",
"Alps",
"Amazon",
"Ambulance",
"America",
"Anchor",
"Angel",
"Anniversary",
"Antarctic",
"Antarctica",
"Apple",
"Arch",
"Aries",
"Arm",
"Armstrong",
"Asterix",
"Atlantis",
"Australia",
"Avatar",
"Aztec",
"Baby",
"Back",
"Baker",
"Ball",
"Ballet",
"Banana",
"Band",
"Bank",
"Bar",
"Barbecue",
"Barber",
"Barbie",
"Bark",
"Bat",
"Bath",
"Batman",
"Battery",
"Beach",
"Bear",
"Beat",
"Bed",
"Beer",
"Belgium",
"Bell",
"Belly",
"Belt",
"Berlin",
"Berry Study",
"Bet",
"Bill",
"Billards",
"Bird",
"Biscuit",
"Blackberry",
"Blaze",
"Block",
"Blond",
"Board",
"Bold",
"Bolt",
"Bomb",
"Bond",
"Book",
"Boot",
"Boss",
"Bottle",
"Bow",
"Bowling",
"Box",
"Boxing",
"Brain",
"Branch",
"Bread",
"Bridge",
"Brie",
"Brush",
"Bubble",
"Buck",
"Buffalo",
"Buffy",
"Bug",
"Bulb",
"Butterfly",
"Button",
"Cabin",
"Cactus",
"Caesar",
"Cake",
"Calendar",
"Calf",
"Canada",
"Canada Zoo",
"Candlemas",
"Candy",
"Cane",
"Cannon",
"Canteen",
"Canvas",
"Capital",
"Car",
"Card",
"Cardboard",
"Caries",
"Carnival",
"Carousel",
"Carpet",
"Carrot",
"Casino",
"Castle",
"Cat",
"Caterpillar",
"Cave",
"Cavern",
"Cell",
"Centaur",
"Center",
"Cereal",
"Chain",
"Chair",
"Champagne",
"Change",
"Chap",
"Charge",
"Check",
"Cheese",
"Chess",
"Chest",
"Chewbacca",
"Chick",
"Chicken",
"Chili",
"China",
"Chip",
"Chocolate",
"Christmas",
"Church",
"Churchill",
"Cigarette",
"Cinderella",
"Cinema",
"Circle",
"Circus",
"Cleopatra",
"Cliff",
"Climb",
"Cloak",
"Clover",
"Club",
"Cock",
"Cockroach",
"Cocktail",
"Cocoon",
"Code",
"Coffee",
"Coin",
"Cold",
"Colonel",
"Comedy",
"Comic",
"Compound",
"Computer",
"Concert",
"Contract",
"Cook",
"Copper",
"Core",
"Corn",
"Cotton",
"Court",
"Couscous",
"Crane",
"Crash",
"Crate",
"Crepe",
"Cricket",
"Crocodile",
"Croissant",
"Cross",
"Crown",
"Cube",
"Cupid",
"Cut",
"Cycle",
"Dance",
"Darwin",
"Date",
"Day",
"Death",
"Decathlon",
"Defense",
"Degree",
"Dentist",
"Desert",
"Diamond",
"Dinosaur",
"Disco",
"Disease",
"Diver",
"Doctor",
"Dog",
"Doll",
"Doping",
"Dracula",
"Draft",
"Drag",
"Dragon",
"Dream",
"Dress",
"Drill",
"Driver",
"Drop",
"Duck",
"Dune",
"Dwarf",
"Eagle",
"Easter",
"Egg",
"Egypt",
"Elastic",
"Election",
"Electricity",
"Elephant",
"Elf",
"Elvis",
"Embassy",
"Emergency",
"Emperor",
"End",
"Engine",
"England",
"Europe",
"Eve",
"Everest",
"Evil",
"Explosion",
"Eye",
"Face",
"Facebook",
"Fair",
"Fairy",
"Fall",
"Fan",
"Farm",
"Fence",
"Fever",
"Field",
"Fighter",
"Figure",
"File",
"Film",
"Fire",
"Firecracker",
"Firefighter",
"Fish",
"Flame",
"Flash",
"Flower",
"Flute",
"Fly",
"Foam",
"Foot",
"Force",
"Forest",
"Fork",
"Fountain",
"Fox",
"France",
"Frankenstein",
"Friday",
"Fries",
"Galaxy",
"Game",
"Gandhi",
"Garden",
"Garlic",
"Gas",
"Gel",
"Genius",
"Germany",
"Germlins",
"Ghost",
"Giant",
"Gladiator",
"Glass",
"Glasses",
"Glove",
"Go",
"Goat",
"Godfather",
"Godzilla",
"Gold",
"Golf",
"Google",
"Gothic",
"Gourd",
"Grace",
"Grass",
"Graveyard",
"Greece",
"Green",
"Grenade",
"Ground",
"Group",
"Guardian",
"Guillotine",
"Hair",
"Hair",
"Halloween",
"Ham",
"Hammer",
"Hand",
"Hat",
"Hawk",
"Hazelnut",
"Head",
"Heart",
"Heel",
"Helicopter",
"Helmet",
"History",
"Hockey",
"Hole",
"Holidays",
"Hollywood",
"Honey",
"Hood",
"Hook",
"Horn",
"Horse",
"Horseshoe",
"Hospital",
"Hostel",
"Hotel",
"House",
"Hulk",
"Humor",
"Hunter",
"Ice",
"Ice Cream",
"Ikea",
"India",
"Iron",
"Isle",
"Israel",
"Italy",
"Ivory",
"Jackson",
"Jail",
"Jam",
"Jean",
"Jedi",
"Jet",
"Jewel",
"Johnny",
"Joke",
"Joker",
"Jones",
"Jump",
"Jungle",
"Jupiter",
"Kangaroo",
"Karate",
"Ketchup",
"Key",
"Kid",
"King",
"Kiwi",
"Knife",
"Knight",
"Lab",
"Ladder",
"Ladybug",
"Lake",
"Lamp",
"Lap",
"Lava",
"Lawyer",
"Lead",
"Leaderboard",
"Leaf Cougar",
"Lego",
"Lemon",
"Leprechaun",
"Letter",
"Life",
"Light",
"Light",
"Lighthouse",
"Lightning",
"Limousine",
"Line",
"Link",
"Lion",
"Litter",
"Lock",
"Log",
"London",
"Lottery",
"Luck",
"Mad",
"Mafia",
"Magician",
"Magnet",
"Mail",
"Mammoth",
"Manga",
"Manuel",
"Manure",
"Marble",
"March",
"Mario",
"Market",
"Marriage",
"Mars",
"Mask",
"Mass",
"Match",
"Matrix",
"Melon",
"Member",
"Mercury",
"Metal",
"Mexico",
"Mickey",
"Microscope",
"Microsoft",
"Milk",
"Mill",
"Millionaire",
"Mine",
"Mint",
"Mirage",
"Mirror",
"Missile",
"Missle",
"Model",
"Monkey",
"Monopoly",
"Moon",
"Moscow",
"Mosquito",
"Mount",
"Mountain",
"Mouse",
"Mouth",
"Mower",
"Mozart",
"Mug",
"Mummy",
"Muse",
"Mushroom",
"Music",
"Musketeer",
"Mustache",
"Mustard",
"Myth",
"Nail",
"Necklace",
"Needle",
"Nespresso",
"Nest",
"New",
"New York",
"Newspaper",
"Night",
"Nil",
"Ninja",
"Nintendo",
"Noodle",
"Novel",
"Nuclear",
"Number",
"Nurse",
"Nut",
"Oasis",
"Octopus",
"Oil",
"Olive",
"Olympic",
"Olympus",
"Opera",
"Orange",
"Organ",
"Outlet",
"Oven",
"Painting",
"Pair",
"Palace",
"Palm",
"Pan",
"Panda",
"Pants",
"Paper",
"Paperclip",
"Parachute",
"Paradise",
"Parcelain",
"Parfume",
"Park",
"Parrot",
"Part",
"Party",
"Pass",
"Passion",
"Paste",
"Peace",
"Peach",
"Peanut",
"Pear",
"Pebble",
"Penguin",
"Pepper",
"Pepper",
"Phoenix",
"Piaf",
"Piano",
"Picasso",
"Pie",
"Piece",
"Pig",
"Pikachu",
"Pillow",
"Pilot",
"Pipe",
"Pipe",
"Pirate",
"Pistol",
"Pit",
"Pitch",
"Pizza",
"Plane",
"Plane",
"Plastic",
"Plastic",
"Plate",
"Platypus",
"Play",
"PlayStation",
"Plot",
"Plug",
"Point",
"Poison",
"Poker",
"Polar",
"Pole",
"Police",
"Pony",
"Pool",
"Pope",
"Port",
"Post",
"Potato",
"Potter",
"Powder",
"Pregnant",
"President",
"Press",
"Primary",
"Princess",
"Prom",
"Psycho",
"Pub",
"Pudding",
"Pump",
"Pumpkin",
"Punk",
"Pupil",
"Puppet",
"Pyramid",
"Quarter",
"Quilt",
"Rabbit",
"Racket",
"Radio",
"Radius",
"Rain",
"Rake",
"Rambo",
"Ramses",
"Rap",
"Rat",
"Ratatouille",
"Ray",
"Rayman",
"Reggae",
"Religious",
"Revenge",
"Revolution",
"Ring",
"River",
"Robot",
"Rock",
"Rocky",
"Rome",
"Root",
"Rope",
"Rose",
"Roulette",
"Round",
"Row",
"Rule",
"Ruler",
"Rum",
"Safari",
"Sahara",
"Salt",
"Sand",
"Sardine",
"Satellite",
"Saturn",
"Sausage",
"Scale",
"Scene",
"School",
"Scientist",
"Scorpion",
"Screen",
"Screw",
"Seal",
"Server",
"Sewer",
"Sewing",
"Shadow",
"Shakespeare",
"Shakespeare",
"Shark",
"Shark",
"Sheep",
"Shell",
"Sherlock",
"Ship",
"Shoe",
"Shop",
"Shot",
"Shovel",
"Show",
"Shower",
"Shrek",
"Simpson",
"Sink",
"Siren",
"Sirop",
"Ski",
"Sleeve",
"Slip",
"Slipper",
"Slug",
"Smoke",
"Smuggler",
"Snake",
"Snow",
"Snowman",
"Soap",
"Sock",
"Sofa",
"Soldier",
"Solitary",
"Sombrero",
"Song",
"Soul",
"Sound",
"Space",
"Spartacus",
"Spell",
"Spice",
"Spider",
"Spielberg",
"Spike",
"Spine",
"Spot",
"Spring",
"Spy",
"Square",
"Stadium",
"Staff",
"Stallion",
"Star",
"Stark",
"State",
"Station",
"Stick",
"Stingray",
"Stock",
"Stock",
"Stone",
"Stop",
"Straw",
"Strawberry",
"Stream",
"Strike",
"String",
"Subway",
"Sugar ",
"Suit",
"Sun",
"Superhero",
"Surgery",
"Swing",
"Swiss",
"Switch",
"Sword",
"Tabaco",
"Table",
"Tag",
"Tail",
"Tall",
"Tango",
"Tap",
"Tarantino",
"Tarzan",
"Tatto",
"Taxi",
"Teacher",
"Telescope",
"Temper",
"Temple",
"Tennis",
"Terminator",
"Theater",
"Thief",
"Thought",
"Thread",
"Throat",
"Throw",
"Thumb",
"Thunder",
"Ticket",
"Tie",
"Tiger",
"Time",
"Titanic",
"Toilet",
"Tokyo",
"Tolkien",
"Tomato",
"Tongue",
"Tool",
"Tooth",
"Torch",
"Tornado",
"Towel",
"Tower",
"Track",
"Tradition",
"Train",
"Treasure",
"Triangle",
"Trip",
"Troy",
"Truce",
"Trunk",
"Tube",
"Tulip",
"Tuna",
"Tunnel",
"Turkey",
"Twins",
"Umbrella",
"Unicorn",
"Uniform",
"Vacuum",
"Vampire",
"Vegas",
"Vegetable",
"Veil",
"Venus",
"Vet",
"Viking",
"Violin",
"Virus",
"Volcano",
"Wake",
"Wall",
"Walmalt",
"Waltz",
"War",
"Washer",
"Washington",
"Watch",
"Wave",
"Weather",
"Web",
"Weekend",
"Well",
"Were",
"Western",
"Whale",
"Whip",
"White",
"Wind",
"Window",
"Wine",
"Witch",
"Wolf",
"Worm",
"Wristband",
"Yard ",
"Yellow",
"Zeus",
"Zombie"
];
let localWordListLength = localWordList.length

/* FUNCTION: showCode()
	- Shows the digit code on the main screen and turns on the "code viewed" flag
*/
function showCode() {
	codeText.innerText = currentCode;
	codeViewed = true;
}

/* FUNCTION: hideCode()
	- Hides the digit code
*/
function hideCode() {
	codeText.innerText = hiddenCode;
}

/* FUNCTION: updateToggle()
	- Handles the Toggle View Checkbox
*/
function updateToggle() {
	// IF: the user TOGGLES the Toggle View Checkbox, show the code without having to hold the View Button
	// ELSE: hide the code
	toggleCheckbox.checked ? showCode() : hideCode();
	// If Toggle View is ON, the user can't use the View Button
	viewButton.disabled = toggleCheckbox.checked;
}

/* FUNCTION: generateCode()
	- Generates a new digit code
	
	"A digit code is generated by shuffling an array and displaying all but the last element"
	"Given a Code Size of 'x', the size of a digit code array is 'x+1' and the digits span from 1 to 'x+1'"
*/
function generateCode() {
	 
	// IF: A code HAS been loaded AND was viewed, archive the code
	if (currentCode !== "No Code Loaded!" && codeViewed) {
		archiveCode(codeArray);
	}
	
	// IF: The code size has be UPDATED, adjust the code size
	if (codeSizeChanged) {
		updateCodeSize();
		codeSizeChanged = false;
	}
	
	// IF: Toggle View was ON when a new code is generated, reset it
	if (toggleCheckbox.checked) {
		toggleCheckbox.checked = false;
		updateToggle();
	}
	
	// Fisher-Yates Algorithm - Used to shuffle an array "fairly"
	//
	// "This implementation of the Fisher-Yates Algorithm does the following steps:"
	// 	"Starting with the last element, randomly pick an index from 0 to current element index"
	// 	"Then swap the two elements and move on to the next element. Should the random index match the current index, no swap occurs"
	// 	"Repeat this until you reach the first element"
	//
	// FOR: Use the Fisher-Yates Algorithm to shuffle the digit array
	for (let i = codeArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = codeArray[i];
		codeArray[i] = codeArray[j];
		codeArray[j] = temp;
	}
	
	//Create a code string that is to be displayed
	currentCode = createCodeString(codeArray);
	
	//Prompt the user that a new code is generated and turn of the "code viewed" flag
	codeText.innerText = "New Code Generated!";
	codeViewed = false;
}

/* FUNCTION: createCodeString(targetCodeArray)
	- Creates a code string that can be displayed on the main screen
	ARGUMENTS:
		- targetCodeArray: the code array that is to be displayed
*/
function createCodeString(targetCodeArray) {
	let codeString = "";
	
	// FOR: Create a string with the following format: "#.#.#..."
	// "The code length displayed is the array length - 1 similar to how codes are generated"
	for (let i = 0; i < targetCodeArray.length - 1; i++) {
		// IF: this is first digit, ignore the leading "."
		if (i !== 0) {
			codeString += ".";
		}
		
		codeString += targetCodeArray[i];
		
		//One Line Variant
		//codeString += (i !== 0) ? "." + targetCodeArray[i] : targetCodeArray[i];
	}
	
	// RETURN: the resulting code string
	return codeString;
	
}

/* FUNCTION: showHistory()
	- Shows the last 4  codes that have been viewed
*/
function showHistory() {
	
	// IF: No codes have been archived, state so
	if (historyArray.length == 0) {
		codeText.innerText = "No Code History!";
	}
	// ELSE: Show up to the last 4 codes viewed
	else {
		let historyString = "";
		
		// FOR: Create a string with the following format: "#. 'Digit Code'"
		for (let i = 0; i < historyArray.length; i++) {
			// IF: this is first code, ignore the leading newline
			if (i !== 0) {
				historyString += "\n";
			}

			historyString += (i+1) + ": " + createCodeString(historyArray[i]);
		}
		
		codeText.innerText = historyString;
	}
}

/* FUNCTION: archiveCode(targetCode)
	- Adds a code to the history array
	ARGUMENTS:
		- targetCode: the code that is to be archived
*/
function archiveCode(targetCode) {
	// IF: There's 4 or MORE codes currently archived, clear the oldest code
	if (historyArray.length >= 4) {
		historyArray.pop();
	}
	
	// Make a copy of the current code then add it to archive
	// "A direct assignment of "codeArray" is a pointer and not its own instance!"
	const historyCode = targetCode.slice();
	historyArray.unshift(historyCode);
}

/* FUNCTION: updateCodeSize()
	- Updates the code size array to based on the user's input
*/
function updateCodeSize() {
	codeArray = Array.from(Array(parseInt(codeSize.value) + 2).keys()).slice(1);
	
	let hiddenCodeString = ""
	// FOR: Create a new "Hidden Code" string based on the code size given
	for (let i = 0; i < codeArray.length - 1; i++) {
		// IF: this is first "-", ignore the leading "."
		if (i !== 0) {
			hiddenCodeString += ".";
		}

		hiddenCodeString += "-";
	}
	
	hiddenCode = hiddenCodeString;
}

/* FUNCTION: warnCodeSize()
	- Prompts the user that the next code size will be different and turn on the corresponding flag
*/
function warnCodeSize() {
	codeText.innerText = "Next Code Size: " + codeSize.value;
	codeSizeChanged = true;
}

/* FUNCTION: getWordList()
	- Does an API call to a word database to get a random assortment of words
    "The word database and endpoint was provided by Lucas Silbernagel"
*/
async function getWordList() {
	let wordList = [];
	let wordListString = "";
	
	//IF: Use the local word list if checked
	if (localCheckbox.checked) {
		//FOR: "Code Size" + 1 times, get random words from the local word list
		for (let i = 0; i < parseInt(codeSize.value) + 1; i++) {
			wordList.push(localWordList[(Math.floor(Math.random() * localWordListLength))]);
		}
	}
	else {
		//FOR: "Code Size" + 1 times, get random words from the word database
		for (let i = 0; i < parseInt(codeSize.value) + 1; i++) {
			const response = await fetch("https://www.wordgamedb.com/api/v1/words/random");
			const randomWord = await response.json();
			wordList.push(randomWord.word);
		}
	}
	
    // FOR: Create a string with the following format: "#. 'word'"
	for (let i = 0; i < wordList.length; i++) {
        // IF: this is first code, ignore the leading newline
		if (i !== 0) {
			wordListString += "\n";
		}

		wordListString += (i+1) + ": " + wordList[i];
	}
	
	codeText.innerText = wordListString;
}


/* FUNCTION: toggleTimer()
	- Toggles the 30 second countdown timer
*/
function toggleTimer() {
    //IF: the timer IS currently active, disable it
	if (timerInterval) {
		terminateTimer();
		hideCode();
	}
    //ELSE: start the countdown timer
    //  !   "Due to how "Date.now()" works, there a chance that the timer will skip over "29"
    //      "This is caused when the user starts the timer right when the date's second gets updated"
	else {
		let timerStartPoint = Date.now();

        //The initial display time for the timer to start at is 30 seconds
		let timerDuration = 30000;
		let secondTime = 30;
		updateTimer(secondTime);
		
        //setInterval: Decrement the displayed time for every second that passes 
		timerInterval = setInterval(function() {
			let delta = timerDuration - (Date.now() - timerStartPoint); // milliseconds elapsed since start

			secondTime = Math.floor(delta / 1000);
			updateTimer(secondTime);
			
            //IF: the timer reaches 0, state so and unlocked the interactables
			if (delta < 0) {
				terminateTimer();
				codeText.innerText = "TIME UP!";
				timerLockout();
			}
		}, 1000); // update about every second
	}
    //Lockout the user from the other interactables
	timerLockout();
}

/* FUNCTION: toggleTimer()
	- Unlocks or lockout the interactables (buttons, checkboxes, etc...)
*/
function timerLockout() {
	viewButton.disabled = timerInterval;
	toggleCheckbox.disabled = timerInterval;
	
	codeSize.disabled = timerInterval;
	
	newCodeButton.disabled = timerInterval;
	codeHistoryButton.disabled = timerInterval;
	wordListButton.disabled = timerInterval;
}

/* FUNCTION: updateTimer(targetSecond)
	- Update the display timer
	ARGUMENTS:
		- targetSecond: the second value that is to be displayed
*/
function updateTimer(targetSecond) {
	let timerText = "00:" + targetSecond.toString().padStart(2, '0');
	codeText.innerText = timerText;
}

/* FUNCTION: terminateTimer()
	- Terminates the timer interval function; removes the timer
*/
function terminateTimer() {
	clearInterval(timerInterval);
	timerInterval = null;
}

//EventListeners for the various interactables
viewButton.addEventListener("touchstart", showCode);
viewButton.addEventListener("touchend", hideCode);

viewButton.addEventListener("mousedown", showCode);
viewButton.addEventListener("mouseup", hideCode);

toggleCheckbox.addEventListener("change", updateToggle);

timerButton.addEventListener("click", toggleTimer);

codeSize.addEventListener("change", warnCodeSize);

newCodeButton.addEventListener("click", generateCode);
codeHistoryButton.addEventListener("click", showHistory);
wordListButton.addEventListener("click", getWordList);

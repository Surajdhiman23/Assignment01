// Constants for main button query selectors
const noun1Button = document.getElementById('noun1');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const noun2Button = document.getElementById('noun2');
const settingButton = document.getElementById('setting');

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById('choosenNoun1');
const choosenVerb = document.getElementById('choosenVerb');
const choosenAdjective = document.getElementById('choosenAdjective');
const choosenNoun2 = document.getElementById('choosenNoun2');
const choosenSetting = document.getElementById('choosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.getElementById('playback');
const randomButton = document.getElementById('random');
const storyDisplay = document.getElementById('story');

// Variables for pre-defined arrays
const nouns1 = ['The Turkey', 'Mom', 'Dad', 'The Dog', 'My Teacher', 'The Elephant', 'The Cat'];
const verbs = ['Sat on', 'Danced with', 'saw', 'dosen,t like', 'kissed'];
const adjectives = ['a funny', 'a goofy', 'a slimy', 'a barking', 'a fat'];
const nouns2 = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
const settings = ['on the moon', 'on the chair', 'in the spahetti', 'in my soup', 'on the grass', 'in my shoes'];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */

// Function to handle when the "Noun 1" button is clicked
function noun1_on_click() {
    const randomIndex = Math.floor(Math.random() * nouns1.length);
    choosenNoun1.textContent = nouns1[randomIndex];
}

// Function to handle when the "Verb" button is clicked
function verb_on_click() {
    const randomIndex = Math.floor(Math.random() * verbs.length);
    choosenVerb.textContent = verbs[randomIndex];
}

// Function to handle when the "Adjective" button is clicked
function adjective_on_click() {
    const randomIndex = Math.floor(Math.random() * adjectives.length);
    choosenAdjective.textContent = adjectives[randomIndex];
}

// Function to handle when the "Noun 2" button is clicked
function noun2_on_click() {
    const randomIndex = Math.floor(Math.random() * nouns2.length);
    choosenNoun2.textContent = nouns2[randomIndex];
}

// Function to handle when the "Setting" button is clicked
function setting_on_click() {
    const randomIndex = Math.floor(Math.random() * settings.length);
    choosenSetting.textContent = settings[randomIndex];
}

// Function to concatenate the user story and display
function playback_on_click() {
    const story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}.`;
    storyDisplay.textContent = story;
}

// Function to grab random elements from arrays, concatenate, and display the story
function random_on_click() {
    noun1_on_click();
    verb_on_click();
    adjective_on_click();
    noun2_on_click();
    setting_on_click();
    playback_on_click();
}

/* Event Listeners
-------------------------------------------------- */

// Event listeners for button clicks
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);

// Function to add student info
function addStudentInfo() {
    const studentInfo = "Student: Suraj Kumar Dhiman / 200520350";
    document.getElementById('studentId').textContent = studentInfo;
}

// Call the function to add student info when the page loads
addStudentInfo();

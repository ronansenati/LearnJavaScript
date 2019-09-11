let currentTemp = 19.5;
const message = `The current temperature is ${currentTemp}\u00b0C`;
const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked in.';
const imperative = "Don't do that!";
const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t do that!" to Max.';
const s = "In JavaScript, use \\ as an escape character in strings.";
const small = Number.EPSILON; // the smallest value that can be
// added to 1 to get a distinct number
// larger than 1, approx. 2.2e-16
const bigInt = Number.MAX_SAFE_INTEGER; // the largest representable integer
const max = Number.MAX_VALUE; // the largest representable number
const minInt = Number.MIN_SAFE_INTEGER; // the smallest representable integer
const min = Number.MIN_VALUE; // the smallest representable number
const nInf = Number.NEGATIVE_INFINITY; // the same as -Infinity
const multiline = "line1\
line2";
const multiline2 = "line1\n\
line2";
const multiline3 = `line1
line2`;
const multiline4 = 'Current temperature:\n' +
`\t${currentTemp}\u00b0C\n` +
"Don't worry...the heat is on!";
const obj = {};
obj.color;
obj.size;
obj["not an identifier"] = 3;
obj["not an identifier"]; // 3
obj["color"]; // "yellow"
const SIZE = Symbol();
obj[SIZE] = 8;
obj[SIZE]; // 8

const sam1 = {
name: 'Sam',
age: 4,
};
const sam2 = { name: 'Sam', age: 4 }; // declaration on one line
const sam3 = {
name: 'Sam',
classification: { // property values can
kingdom: 'Anamalia', // be objects themselves
phylum: 'Chordata',
class: 'Mamalia',
order: 'Carnivoria',
family: 'Felidae',
subfaimily: 'Felinae',
genus: 'Felis',
species: 'catus',
},
};

sam3.classification.family; // "Felinae"
sam3["classification"].family; // "Felinae"
sam3.classification["family"]; // "Felinae"
sam3["classification"]["family"]; // "Felinae
sam3.speak = function() { return "Meow!"; };

const a1 = [1, 2, 3, 4]; // array containing numbers
const a2 = [1, 'two', 3, null]; // array containing mixed types
const a3 = [ // array on multiple lines
"What the hammer? What the chain?",
"In what furnace was thy brain?",
"What the anvil? What dread grasp",
"Dare its deadly terrors clasp?",
];
const a4 = [ // array containing objects
{ name: "Ruby", hardness: 9 },
{ name: "Diamond", hardness: 10 },
{ name: "Topaz", hardness: 8 },
];
const a5 = [ // array containing arrays
[1, 3, 5],
[2, 4, 6],
];
const now = new Date();
now; // example: Thu Aug 20 2015 18:31:26 GMT-0700 (Pacific Daylight Time)
const halloweenParty = new Date(2016, 9, 31, 19, 0); // 19:00 = 7:00 pm
// extremely simple email recognizer
const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;
// US phone number recognizer
const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;
const a = parseInt("16 volts", 10); // the " volts" is ignored, 16 is
// parsed in base 10
const b = parseInt("3a", 16); // parse hexadecimal 3a; result is 58
const c = parseFloat("15.5 kph"); // the " kph" is ignored; parseFloat
// always assumes base 10



console.log(email);
console.log(phone);

console.log(halloweenParty.getFullYear()); // 2016
console.log(halloweenParty.getMonth()); // 9
console.log(halloweenParty.getDate()); // 31
console.log(halloweenParty.getDay()); // 1 (Mon; 0=Sun, 1=Mon,...)
console.log(halloweenParty.getHours()); // 19
console.log(halloweenParty.getMinutes()); // 0
console.log(halloweenParty.getSeconds()); // 0
console.log(halloweenParty.getMilliseconds()); 

console.log(now);
console.log(a4.length);

console.log(sam3.speak());

console.log(sam3["classification"]["family"]);
console.log(obj[SIZE]);
console.log("Line1\nLine2\n" +
"Windows line 1\r\nWindows line 2\n"+
"Speed:\t60kph\n"+
"Don\'t\n"+
'Sam said \"hello\".\n'+
`New in ES6: \` strings.\n`+
`New in ES6: ${dialog2}\n`+
"Use \\\\ to represent \\!\n"+
"De Morgan’s law: \u2310(P \u22c0Q) \u21D4 (\u2310P) \u22c1 (\u2310Q)\n"+
"\xc9p\xe9e is fun, but foil is more fun.\n\n"
)

console.log(message);
console.log(dialog);
console.log(dialog1);
console.log(dialog2);
console.log(s);
console.log(imperative);
console.log(min);
console.log(multiline);
console.log(multiline2);
console.log(multiline3);
console.log(multiline4);

// returns a random integer in the range [m, n] (inclusive)
function rand(m, n) {
return m + Math.floor((n - m + 1)*Math.random());
}// randomly returns a string representing one of the six
// Crown and Anchor faces
function randFace() {
return ["crown", "anchor", "heart", "spade", "club", "diamond"]
[rand(0, 5)];
}
let funds = 50; // starting conditions
let round = 0;
while(funds > 1 && funds < 100) {
round++;
console.log(`round ${round}:`);
console.log(`\tstarting funds: ${funds}p`);
// place bets
let bets = { crown: 0, anchor: 0, heart: 0,
spade: 0, club: 0, diamond: 0 };
let totalBet = rand(1, funds);
if(totalBet === 7) {
totalBet = funds;
bets.heart = totalBet;
} else {
// distribute total bet
let remaining = totalBet;
do {
let bet = rand(1, remaining);
let face = randFace();
bets[face] = bets[face] + bet;
remaining = remaining - bet;
} while(remaining > 0)
}
funds = funds - totalBet;
console.log('\tbets: ' +
Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(', ') +
` (total: ${totalBet} pence)`);
// roll dice
const hand = [];
for(let roll = 0; roll < 3; roll++) {
hand.push(randFace());
}
console.log(`\thand: ${hand.join(', ')}`);
// collect winnings
let winnings = 0;
for(let die=0; die < hand.length; die++) {
let face = hand[die];
if(bets[face] > 0) winnings = winnings + bets[face];
}
funds = funds + winnings;
console.log(`\twinnings: ${winnings}`);
}
console.log(`\tending funs: ${funds}`);
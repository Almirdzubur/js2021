// booleska variabler, se även sanningstabeller https://sv.wikipedia.org/wiki/Sanningsv%C3%A4rdetabell
let m = true;
let n = false;
console.log(typeof m);
console.log(m && n);    // logiskt "och" -> false
console.log(m || n);    // logiskt "eller" -> true
console.log(!m);        // logisk "icke" -> false
let p = 2 < 1;
console.log(p);         // false

// villkorssatser
let a = 0;              // tilldelning: enkelt likhetstecken
if (a == 0) {           // jämförelse: dubbla likhetstecken
    console.log("a är lika med noll");
}
if (a == 1) {           // if-else-sats
    console.log("a är lika med ett");
}
else {                  // om if-villkoret är falskt så går programflödet in i denna sats istället
    console.log("a är inte lika med ett");
}
if (a < 1) {
    console.log("a är mindre än ett");
}
if (a != 1) {
    console.log("a är inte lika med ett");
}
if (a >= 0) {
    console.log("a är större än eller lika med noll");
}

// automatisk omtypning
if (a == "0") { // true! fastän vi jämför ett tal med en textsträng!
    console.log("I en villkorssats med == typas variabeln automatisk om");
}
// Tre likhetstecken innebär "strikt likhet", alltså även samma typ
if (a === "0") {    // false!
    console.log("Detta skrivs inte ut");
}
if (a !== "0") {
    console.log("... men inte i en villkorssats med ===");
}

// falsy - automatisk omtypning av variabler som inte är booleska men som ändå utvärderas som falska i en boolesk kontext
if (!a) {
    console.log("Talet noll är 'falsy', dvs. tolkas som falskt fastän det inte är en boolesk variabel");
}
a = "";
if (!a) {
    console.log("Även tomma strängar är 'falsy'");
}
// truthy
a = 1;  // ett tal som inte är lika med noll
let b = "en textsträng som inte är tom";
if (a && b) {
    console.log("Övriga siffror och strängar är 'truthy'");
}

// paradox: sanningsvärden är inte transitiva (cirkulära)
console.log("0" == 0);  // true
console.log(0 == "");   // true
console.log("" == "0"); // false!!
/*
WTF?! Vi har ju utvärderat logiska uttryck i en cirkel!
Borde vi inte få "0" == 0 == "" == "0"?
Förklaring:
    i första uttrycket "0" == 0 typas "0" om till en siffra och likheten stämmer eftersom 0 == 0 (jämföra med a == "0" i rad 33 ovan)
    i andra uttrycket 0 == "" utvärderas båda som falsy och likheten stämmer eftersom false == false
    i tredje uttrycket "" == "0" jämförs två textsträngar, som är olika; därför är sista uttrycket false
*/
// paradoxen förvinner ifall vi använder ===, alltså strikt likhet, istället för ==
console.log("0" === 0);  // false
console.log(0 === "");   // false
console.log("" === "0"); // false

// while-loop
let text = "";
let i = 0;
while (i < 5) {
    text += "Talet är " + i + "\n"; // \n betyder ny rad
    i++;    // öka i med ett, dvs. i = i+1
}
console.log(text);

// skillnad mellan i++ och ++i
i = 1;
console.log(i++);   // vi skriver ut innan vi ökar i med ett, så vi får utskriften 1
console.log(++i);   // vi skriver ut efter vi ökar i med ett, så vi får utskrften 3

// for-loop med samma resultat som while-loopen ovan
text = "";
for (let i = 0; i < 5; i++) {
    text += "Talet är " + i + "\n";
}
console.log(text);

// nästlad for-loop, dvs. en loop i en loop
text = "";
for (let i = 0; i < 5; i++) {
    text += "i=" + i + ": ";
    for (let j = 0; j < 5; j++) {
        text += "j=" + j + " ";
    }
    text += "\n";
}
console.log(text);

// fält (array) - en enkel datastruktur som ofta används i loopar
a = [10, 20, 30];
// vi kan ta reda på antalet element i ett fält på följande sätt:
console.log(a.length);  // 3, mer om punktnotation nästa vecka
console.log(a[0]);  // 10, obs. index börjar på noll
console.log(a[1]);  // 20
console.log(a[2]);  // 30
// fält kan bestå av olika datatyper
a = ["Hej", 0, true];
// strängar kan hanteras som fält
a = "Hej";
console.log(a[1]);  // e, dvs. tecknet på position 1
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

// Skriv ut en sträng baklänges
a = "Hej på dig!";
b = "";
for (let i = a.length-1; i >= 0; i--) {
    b += a[i];
}
console.log(b);

// Ett litet frågespel som knyter ihop det vi lärt oss hittills
let nbrQuestions = 5;
let score = 0;  // börja från noll
let question = "";  // initiera variabel
for (let i = 0; i < nbrQuestions; i++) {    // loopa en gång för varje fråga
    let nbr1 = Math.floor(Math.random() * 10) + 1;  // slumptal mellan 1 och 10
    let nbr2 = Math.floor(Math.random() * 10) + 1;  // slumptal mellan 1 och 10;
    question += "Vad är " + nbr1 + "*" + nbr2 + "?";
    let answer = prompt(question);  // ställ fråga och ta emot svar
    if (answer == nbr1*nbr2) {
        score++;
        question = "Rätt svar!\n";
    }
    else {
        question = "Fel svar!\n";
    }
}
if (score == 5) {
    alert("Du hade alla rätt!");
}
else if (score == 0) {
    alert("Du hade alla fel!");
}
else {
    alert("Du hade " + score + " rätt av 5 möjliga!");
}

// undantagshantering, hantera fel i programmet på ett kontrollerat sätt
try {
    funktionSomInteFinns(); // när något går fel så går programflödet omedelbart vidare till catch-blocket
    console.log("Detta skrivs inte ut.");
}
catch (e) {
    console.error("Något gick fel!");
    console.log(e);
}
try {
    a = "ett"*"två";
    console.log(a); // NaN, dvs. vi förväntar oss ett tal men får något annat
    if (isNaN(a)) { // returnerar true ifall a==NaN
        console.log("Aktiverar (throw) ett fel");
        throw new Error("NaN upptäcktes!");
    }
    console.log("Detta skrivs inte ut.");
}
catch (e) { // observera argumentet e
    console.error("Något gick fel!");
    console.log(e);
}
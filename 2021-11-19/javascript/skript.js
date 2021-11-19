// formaterade strängar (template string) kom i EcmaScript 6 år 2015, referens https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// kännetecknas av "backticks" (grav accent) - på Windows håller man ner skift och trycker knappen till vänster om delete
let a = 1;
let b = 2;
let minText = `I en template string kan man ha
radbyten och både 'enkla' och "dubbla" citattecken.
Variabler skrivs ut med dollartecken och måsvingar, så man slipper konkatenera kombinationer av variabler och strängar.
Så här: ${a}+${b}=${a+b}`;  // dollartecken i Windows med alt-gr + 4
console.log(minText);
// jämför med krångligare syntax utan template string
minText = "I en template string kan man ha\nradbyten och både 'enkla' och \"dubbla\" cittattecken.\nVariabler skrivs ut med dollartecken och måsvingar, så man slipper konkatenera kombinationer av variabler och strängar.\n";
minText += "Så här: " + a + "+" + b + "=" + (a+b);
console.log(minText);

// dubbla och enkla strängar är ekvivalenta i JavaScript
console.log("Hej" === 'Hej'); // true
// till stor del är det en smaksak vilket man väljer, men oftast bra att vara konsekvent och göra som alla andra i det team man jobbar i
console.log("It's \"game\" time.");
console.log('It\'s "game" time.');

// jQuery-exempel
$(document).ready(function() {
    //alert("Hej jQuery");
    $("#minParagraf").html("Skriver innehåll från JavaScript.");
    $("#minParagraf").css("color", "red");
});

// evig loop
/*
while (a == 1) {
    console.log("Evig loop!");
}
*/

// förtydligande av vad som tidigare visats med if och else
if (a == 1) console.log("Enstaka rader behöver inte måsvingar.");
if (a == 2) {}  // tomma måsvingar
else console.log("Detta gäller även else.");
if (a == 2) {}
else if (b == 2) console.log(`Detta gör att man kan ha 'else if-satser'.
Detta är dock inte något särskilt nyckelord i språket, 
utan endast en konsekvens av ovanstående faktum att enstaka rader inte behöver måsvingar.`);

// for of-block (också EcmaScript 6 sedan 2015)
let sprak = ["JavaScript", "C#", "HTML", "CSS"];
let text = "";
/*
for (let i = 0; i < sprak.length; i++) {    // traditionell syntax
    text += sprak[i] + "\n";
}*/
for (let x of sprak) {  // lite mer kompakt syntax
    text += x + "\n";
}
console.log(text);

// mer om if-satser med enstaka rader i blocket utan måsvingar
if (a == 1) if (b == 2) console.log("a==1 och b==2");   // nästlade if-satser
if (a == 1 && b == 2) console.log("a==1 och b==2"); // ekvivalent sats

// break och continue i loopar
for (let i = 0; i < 10; i++) {
    if (i == 3) {
        break;  // avbryter loopen
    }
    console.log("Talet är " + i);   // anropas inte för i>=3
}
for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;   // slutar den aktuella iterationen och går omedelbart vidare till nästa
    }
    console.log("Talet är " + i);   // anropas inte för i==3
}

// exempel på klasshierarki
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {  // klassen Student "ärver" från klassen Person
    constructor(name, betyg) {
        super(name);    // för att skapa en Student måste man först skapa en Person
        this.betyg = betyg;
    }
}
a = new Person("Angelika");
console.log(a.name);    // Angelika
h = new Student("Holger", "VG");
console.log(h.name);    // Holger
console.log(h.betyg);   // VG
console.log(a.betyg);   // undefined
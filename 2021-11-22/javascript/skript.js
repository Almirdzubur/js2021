// en funktion är ett stycke kod som exekveras vid ett visst anrop
let funk = function() {
    console.log("Kör funktionen!");
}
funk(); // anropar funktionen efter att den har deklarerats
console.log(typeof funk);   // function
console.log(funk);

// funktion med inparameter
let addition = function(a, b) {
    console.log(a+b);
}
addition(2, 3); // 5
addition("två", "tre"); // tvåtre

// varning: det finns ingen garanti för att vi stoppar in rätt typ av parameter i funktioner
const multiplicera = function(a, b) {
    console.log("Anropar funktionen multiplicera...");
    let c = a*b;
    console.log(c);
}
multiplicera(2, 3); // 6
multiplicera("en textsträng", "en textsträng till");    // NaN, dvs. vi förväntar oss en siffra men får inte detta

// säker multiplikation
const sakerMultiplikation = function(a, b) {
    if (typeof a === "number" && typeof b === "number") {   // kolla att input är av den typen vi förväntar oss
        console.log(a*b);
    } else {
        console.log("Fel input!");
    }
}
sakerMultiplikation(4, 5);  // 20
sakerMultiplikation("En sträng", true); // Fel input!

// funktion med returvärde
const halsa = function(namn) {
    return "Hej " + namn + "!";  // funktionen returnerar en sträng
}
let halsning = halsa("Holger"); // vi anropar funktionen och sparar returvärdet i variabeln halsning
console.log(halsning);  // Hej Holger

// funktion som returnerar en annan funktion
const enFunktionSomReturnerarEnAnnanFunktion = function() {
    return halsa;
}
let enFunktion = enFunktionSomReturnerarEnAnnanFunktion();
console.log(enFunktion);    // skriver ut implementationen av funktionen halsa ovan
console.log(enFunktion("Angelika"));    // Hej Angelika
console.log(enFunktionSomReturnerarEnAnnanFunktion()("Holger"));    // Hej Holger
// I raden ovan: (1) Vi skriver ut med console.log. (2) Det vi skriver ut är det som returneras av halsa("Holger"). (3) Funktionen halsa är i sin tur något som returneras av enFunktionSomReturnerarEnAnnanFunktion

// andra sätt att definiera funktion (arrow notation)
const hejsan = (namn) => {  // samma som const hejsan = function(name) {
    return "Hejsan " + namn + "!";
}
console.log(hejsan("Holger"));  // anropa, utskrift "Hejsan Holger!"

const halla = () => console.log("Hallå!");  // metod med bara en rad
halla();    // Hallå!

// det är vanligt att man låter en funktion vara inparameter till en annan funktion, s.k. callback
// t.ex. vänta med att exekvera en funktion tre sekunder (3000 millisekunder)
let fordrojdFunktion = function() {
    //console.log("Detta skrivs ut efter tre sekunder");
}
let timer = setTimeout(fordrojdFunktion, 3000);    // setTimeout är en inbyggd funktion i JavaScript

// annat exempel: upprepad exekvering varje sekund
let tidKvar = 10;
timer = function() {
    //console.log(tidKvar);
    if (tidKvar == 0) {
        clearInterval(klocka);  // clearInterval "stannar klockan", dvs. avslutar den upprepade exekveringen som klocka gör varje sekund
        //alert("Tiden är ute!");
    }
    tidKvar--;
}
let klocka = setInterval(timer, 1000);  // setInterval är en inbyggd funktion i JavaScript som upprepar exekveringen av en funktion med regelbundna tidsinterval

// objekt i JavaScript
let obj = {
    attr1 : "Detta är ett textattribut",    // ett attribut är en variabel som tillhör ett objekt
    attr2 : 3,
    funk : function() {
        console.log("Anropar objektets metod"); // en metod är en funktion som tillhör ett objekt
    }
}
console.log(obj);   // skriver ut hela objektet enligt ovanstående implementation
console.log(obj.attr1); // "Detta är ett textattribut" - använd punktnotation för åtkomst till specifika attribut
console.log(obj.attr2); // 3
obj.funk();     // anropar objektets metod

// kommentar: console som vi har använt från första lektionen är själv ett objekt
console.log(console);

// ett lite mer konkret exempel
let bil = {
    // tänk dig att attributen är objektets EGENSKAPER (beskriver vad den är) och metoderna är objektets BETEENDE (sådant som den kan göra)
    maxHastighet : 120,
    farg : "Röd",
    tuta : function() {
        console.log("TUUUT!!!");
    }
}
console.log(bil);
console.log(typeof bil);    // object
console.log(bil.maxHastighet);  // 120
console.log(bil.farg);  // Röd
bil.tuta(); // TUUUT!!!
console.log(bil.regNr); // undefined - dvs. bil har inte något attribut med detta namn
bil.regNr = "ABC12D";   // inga problem att lägga till attribut efter att objektet har skapats
console.log(bil);   // jämför med utskriften på rad 106 - nu finns även attributet regNr

// nyckelordet this hänvisar till det aktuella objektet
const skrivFarg = function() {
    console.log(this.farg);
}
skrivFarg();    // undefined - det finns ingen färg i this
bil.skrivFarg = skrivFarg;  // nu tillhör funktionen objektet bil
bil.skrivFarg();    // Röd

// nyckelordet class - syntaktiskt socker från ES6
// en klass är en "mall" för objekt
class Person {
    // en konstruktor är en speciell metod som skapar ett nytt objekt av den aktuella klassen
    constructor(namn) {
        this.namn = namn;
    }
}
// anropar konstruktorn med nyckelordet new plus namnet på klasse
h = new Person("Holger");
a = new Person("Angelika");
console.log(h); // Person {namn: "Holger"}
console.log(a); // Person {namn: "Angelika"}
console.log(typeof a);  // object
console.log(typeof Person); // function - klassen är i själva verket en funktion som returnerar ett objekt enligt en viss mall
// nyckelordet instanceof returnerar true ifall objektet är av en viss klass
console.log(a instanceof Person); // true

// ärvning med nyckelordet extends
class Student extends Person {  // "subklassen" Student ärver "superklassen" Person
    constructor(namn, betyg) {
        // när vi skapar en Student så skapar vi en Person, eftersom varje Student också är en Person
        super(namn);    // anropar superklassens konstruktor med nyckelordet super
        this.betyg = betyg;
    }
    studera = function() {
        console.log(this.namn + " sitter och pluggar.");
    }
}
h = new Student("Holger", "A");
console.log(h);
console.log(h.namn);    // Holger
console.log(h.betyg);   // A
h.studera();    // Holger sitter och pluggar.
console.log(h instanceof Person);   // true - h är en Student och följaktligen en Person
console.log(h instanceof Student);  // true - h är en Student
console.log(a instanceof Student);  // false - a är inte en Student
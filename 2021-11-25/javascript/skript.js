/* Förslag på agenda för handledning:
    (1) Repetition funktioner och objekt.
    (2) Validering av formulär.
    (3) Datumväljare.
    (4) Regex.
    (5) jQuery
    Något mer?
*/

// (1) Repetition funktioner och objekt
// definiera en funktion med två inparametrar och returvärde
let addition = function(a, b) {
    return a+b;
}
let summa = addition(1, 2); // anropa funktionen
console.log(summa); // 3
summa = addition("1", "2");
console.log(summa); // 12
// objekt med två attribut och en metod
let bil = {
    maxFart : 120,
    farg : "Röd",
    tuta : function() {
        console.log("TUUUT!!!");
    }
}
console.log(bil.maxFart);   // 120
console.log(bil.farg);      // Röd
bil.farg = "Grön";
console.log(bil.farg);      // Grön
bil.regNr = "ABC12D";       // Inga problem att lägga till ytterligare attribut i efterhand
bil.tuta();                 // TUUUT!!!
// loopa genom ett objekt
for (attribut in bil) { // for-in-loop, nyare syntax ECMAScript 6
    console.log(bil[attribut]); // variabeln attribut är "nyckeln" för att få åtkomst till alla atribut i loopen
}
// funktioner kan ha attribut
addition.attribut = "ett attribut";
console.log(addition.attribut); // obs punktnotationen, likadan som för objekt
// implementera en klass och skapa ett objekt av denna klass
class Person {
    constructor(s) { // en konstruktor är en speciell metod som skapar ett nytt objekt av klassen
        console.log("Kör konstruktorn");
        this.namn = s;   // ordet "this" refererar till det aktuella objektet
    }
    halsa = function() {
        console.log("Hej, jag heter " + this.namn + "!");
    }
}
let h = new Person("Holger");   // skapa ett objekt av klassen Person med nyckelordet new, som anropar konstruktorn
console.log(h);
h.halsa();
// en klass som ärver Person
class Larare extends Person {   // använd nyckelordet extends för ärvning; man säger att Person är "superklass" och Larare är "subklass"
    constructor(namn, kurs) {
        super(namn);            // anropa superklassens konstruktor med nyckelordet super; för att skapa en Larare måste vi skapa en Person
        this.kurs = kurs;
    }
    undervisa = function() {
        console.log(this.namn + " undervisar i kursen " + this.kurs);
    }
}
h = new Larare("Holger", "JavaScript");
console.log(h);
h.halsa();  // anropar funktion som ärvts från superklassen
h.undervisa();  // anropar funktion som är specifik för objekt av klassen Larare
// en till klass som ärver Person
class Student extends Person {
    constructor(namn, betyg) {
        super(namn);
        this.betyg = betyg;
    }
    studera = function() {
        console.log(this.namn + " sitter och pluggar för att få betyget " + this.betyg);
    }
}
h = new Student("Holgrr", "IG");
console.log(h);
h.halsa();  // Hej jag heter Holgrr
h.studera();    // Holgrr sitter och pluggar...
//h.undervisa();  // Nej - objekt av klassen Student har inte metoden undervisa
// ytterligare en nivå i arvshierarkin - en klass som ärver Larare
class SpecialPedagog extends Larare {
    constructor(namn, kurs, specialitet) {
        super(namn, kurs);  // anropar Larares konstruktor - Larare är i detta fall både subklass till Person och superklass till SpecialPedagog
        this.specialitet = specialitet;
    }
}
h = new SpecialPedagog("Holgrr", "C#", "Särskilda behov");
console.log(h);

// (2) Validering av formulär
window.onload = function() {    // funktion som anropas när HTML har laddats
    let registreringsknapp = document.getElementById("registreringsknapp");
    registreringsknapp.disabled = true; // inaktivera registreringsknappen från början
    let obligatoriskaInmatningar = document.getElementsByClassName("obligatorisk");
    console.log(obligatoriskaInmatningar);
    for (let i = 0; i < obligatoriskaInmatningar.length; i++) { // loopa igenom alla (båda) formulärfälten
        obligatoriskaInmatningar[i].addEventListener("input", function() {  // lägg till händelselyssnare till varje formulärfält; händelsen "input" triggas när användaren skriver eller raderar något i input-fältet
            //console.log("Skriver i formuläret");
            //console.log(obligatoriskaInmatningar[i].value);
            registreringsknapp.disabled = false;    // aktivera registreringsknappen
            this.style = "border : solid green;";   // ge återkoppling till användaren att formulärfältet är korrekt
            for (let j = 0; j < obligatoriskaInmatningar.length; j++) { // loopa igenom alla (båda) formulärfälten igen
                if (!obligatoriskaInmatningar[j].value) {
                    registreringsknapp.disabled = true; // avaktivera registreringsknappen
                    obligatoriskaInmatningar[j].style = "border : solid red;";  // ge återkoppling till användaren att formulärfältet är fel infyllt
                }
            }
        });
    }
}

// (4) Regex
/*
Regex är ett sätt att kontrollera att textsträngar har ett visst format
Tips på regex-testare: https://regex101.com/ (välj ECMAScript)
Mozillas egen referens: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
I praktiken är det bra att veta att tekniken finns, de vanligaste uttrycken (t.ex. mailadress, namn eller postnummer) går att googla sig till
*/
// Funktion för att testa regex
let regexTest = function(reg, str) {
    // anropa metoden "test" för att kolla att textsträngen str matchar formatet reg
    if (reg.test(str)) {
        console.log("Strängen '" + str + "' matchar mönstret " + reg);
    }
    else {
        console.log("Strängen '" + str + "' matchar inte mönstret " + reg);
    }
}
// regex-uttryck kan konstrueras antingen med ett uttryck mellan två snedsteck eller med konstruktorn RegExp
let regex = /a+/;           // format för en textsträng som innehåller minst ett "a"
regex = new RegExp("a+");   // samma format som ovan
let s = "Sträng med ett a";
regexTest(regex, s);
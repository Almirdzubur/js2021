// Länkat (externt JavaScript)
// Så här skriver man en kommentar i JavaScript
//alert("Hallå JavaScript!");

// grundläggande output: Tre sätt att skriva ut meddelanden till användaren: alert, console.log och document.write
/* multiline comment - en kommentar från rad 6 till 10
alert("Hej från alert!");
console.log("Hej från consolen!");
document.write("Hej på webbsidan!");
*/

// grundläggande input: läs in från användaren med en prompt
//namn = prompt("Vad heter du?");
//alert("Hej " + namn);   // mer om textsträngar senare

// en variabel deklareras med nyckelordet let (efter EcmaScript2015)
let enVariabel = 1;
console.log(enVariabel);
// ... eller med nyckelordet var (innan EcmaScript2015)
var enAnnanVariabel = 2;
console.log(enAnnanVariabel);
// vad är egentligen skillnaden mellan let och var?
varVariabel = 3;
var varVariabel;    // deklarera med var efter att variabeln används
//letVariabel = 4;    // Nej! Kan inte använda en let-variabel innan den deklareras!
let letVariabel;
{
    var enTillVarVariabel = 5;
    let enTillLetVariabel = 6;
}
console.log(enTillVarVariabel); // OK, en variabel som deklarerats med var har räckvidd utanför måsvingarna
//console.log(enTillLetVariabel); // Nej! En variabel som deklarerats med let har endsat räckvidd innanför måsvingarna!

// EcmaScript6 införde även nyckelordet const
const konstant = 3;
//konstant = 2;   // Fel! En konstakt får inte ändra värde!

// variabler kan vara t.ex. tal, textsträngar eller booleska
// en och samma variabel kan ändra typ under sin livstid - man säger att JavaScript är ett dynamiskt typat språk
// demonstration av typeof
let x = 1.0;
console.log(typeof x);  // number
x = "Hej";
console.log(typeof x);  // string
x = true;
console.log(typeof x);  // boolean

// finns flera olika slags tal, men alla är av typen number
let a = 1;  // heltal
let b = 3.14; // flyttal (decimaltal)
let c = 0xff;   // hexadecimalt tal
console.log(typeof a);  // number
console.log(typeof b);  // number
console.log(typeof c);  // number

// enkla matematiska operationer
let d = a+a;    // addition
console.log(d); // 2
let e = a+b;
console.log(e); // 4.14 ungefär (flyttal avrundas lite konstigt)
e = a-b;    // subtraktion
console.log(e); // -2.14
let f = b*b;    // multiplikation
console.log(f); // 3.14*3.14=9.8596
let g = b/2;    // division
console.log(g); // 3.14/2=1.57
let h = 6%2;    // restdivision, dvs. vad är resten som blir över ifall man delar 6 med 2
console.log(h); // 0
let i = 14%10;
console.log(i); // 4

i++;    // inkrementera (öka) variabelns värde med 1, dvs. i=i+1
console.log(i); // 5;
i--;    // dekrementera (minska) variabelns värde med 1, dvs. i=i-1
console.log(i); // 4
i += 3; // öka variabeln i med 3, dvs. i=i+3
console.log(i); // 7
i -= 2; // minska variabeln i med 2, dvs. i=i-2
console.log(i); // 5
++i;
console.log(i); // 6

// vanliga prioriteringsregler gäller, t.ex. mult innan addtion
let j = 1+2*3;  // samma som 1+(2*3)
console.log(j); // 7
j = (1+2)*3;
console.log(j); // 9

// textsträngar kan klistras ihop (konkateneras)
let k = "Hej";
let l = "då";
console.log(k + " " + l + "!"); // Hej då!

// typa om till tal
a = Number("1");
console.log(a);
a = Number("inte en siffra");
console.log(a); // NaN "not a number", dvs. vi förväntar oss ett tal men har något annat

k = prompt("Skriv ett tal!");
l = prompt("Skriv ett annat tal!");
let summa = Number(k)+Number(l);    // typa om till tal
alert("Summan är: " + summa);

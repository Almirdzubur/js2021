// hjälp om fråga 4
// obs - endast små bokstäver!
let konsonanter = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "z"];
let question = prompt("write a word:");  
let output = "";  
for (let i = 0; i < question.length; i++) {  
    console.log("Test");
    let bokstav = question[i];
    if (konsonanter.includes(bokstav)) {
      alert(question[i] + "o" + question[i]);
    } else {
      alert(question[i]);
    }
}

// felhantering
/* Utan felhantering kraschar programmet
nonExistentFunction();
console.log("Fortsätter programmet");
*/
try {
    nonExistentFunction();
//} catch (error, flerArgument) {   // går ej att lägga in fler argument inom parentesen
} catch (error) {
    console.error(error);   // skriver ut information om felet, i detta fall är felet av typ ReferenceError
    // expected output: ReferenceError: nonExistentFunction is not defined
    // Note - error messages will vary depending on browser
    console.log("Fortsätter programmet");   // med felhantering kan programmet fortsätta och eventuellt åtgärda problemet om möjligt eller informera användaren om hur problemet kan lösas
}

try {
    let input = prompt("Säg en siffra");
    input = Number(input);
    let product = input * 2;
    console.log(product);
    if (isNaN(product)) {
        throw new Error("Inte ett heltal!");
    }
    console.log("Hit kommer inte koden ifall vi får fel");
}
catch (error) {
    alert("Fel:" + error);
    console.error(error);
}

// gräns för hur många || man får ha i en if-sats
let tecken = "4";
let siffra = tecken == "1" || tecken == "2" || tecken == "3" || tecken == "4" || tecken == "5" || tecken == "6";
//if (tecken == "1" || tecken == "2" || tecken == "3" || tecken == "4" || tecken == "5" || tecken == "6") {
if (siffra) {   // oftast smidigare att ha en boolesk variabel istället för ett överkomplicerat logiskt uttryck direkt i if-satsen
    console.log("tecknet är en siffra under sju");
}

// om strängar
let minText = "Här är en textsträng som är hyfsat lång";
console.log(minText.indexOf("ä"));  // 1, dvs. index för den första förekomsten av tecknet "ä"
console.log(minText.indexOf("som"));    // 21, dvs. index för första förekomsten av teckenföljden "som"
minText += " ... ytterligare text som lagts till";
console.log(minText);

// fotnot till vad som sades tidigare i veckan: konstigheter med tal
let konstigtTal = Number("Inte en siffra");
console.log(konstigtTal);   // NaN, dvs. vi förväntar oss ett tal men har något annat
console.log(typeof konstigtTal);    // number, alltså NaN är av typen number
console.log("två"*"tre");   // NaN, eftersom multiplikationsoperatorn * förväntar sig tal
let x = 2;
let y = 2;
x += 1;
y =+ 1;
console.log(x); // 3
console.log(y); // 1
konstigtTal = 1/0;  // man kan dividera med noll i JavaScript!
console.log(konstigtTal);   // Infinity
console.log(typeof konstigtTal);    // number
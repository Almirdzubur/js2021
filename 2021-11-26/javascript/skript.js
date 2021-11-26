/* Förslag på agenda för handledning:
    (1) Repetition funktioner och objekt. (igår)
    (2) Validering av formulär. (igår)
    (3) Datumväljare. (idag)
    (4) Regex. (fortsättning från igår)
    (5) jQuery. (jQuery)
    Något mer?
*/

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
regexTest(regex, s);        // matchar
s = "Holger";
regexTest(regex, s);        // matchar inte
regex = /[a-ö]+@+/;         // matchar alla strängar som innehåller minste ett @ som föregås av minst en (vanlig) bokstav
regexTest(regex, "abc@");   // matchar
regexTest(regex, "123@abc");    // matchar inte
regexTest(regex, "ABC@abc");
regex = /[a-ö]+@+/;         // "i" står för "ignore case", dvs. stora och små bokstäver spelar ingen roll
regexTest(regex, "ABC@abc");    // matchar
regex = /[a-öA-ö0-9]+@+/    // samma som ovan, inkluderar stora och små bokstäver samt siffror
regexTest(regex, "abc@");   // matchar
regexTest(regex, "123@abc");    // matchar
regexTest(regex, "ABC@abc");    // matchar
regexTest(regex, "Ab3@");   // matchar
regex = /.+@.+/;            // matchar alla strängar som innehåller ett "@" som både föregås och följs av ett godtyckligt antal tecken (punkt kan betyda vilka tecken som helst)
regexTest(regex, "abc@abc");    // matchar
regexTest(regex, "@abc");       // matchar inte
regexTest(regex, "abc@");       // matchar inte
regex = /.+@.+\..+/;        // som ovan, men det ska finnas en punkt någonstans efter "@", dock inte omedelbart efter "@" och inte heller allra sist i strängen
regexTest(regex, "abc@def");    // matchar inte
regexTest(regex, "abc@def.");    // matchar inte
regexTest(regex, "abc@.def");    // matchar inte
regexTest(regex, "abc@def.g");    // matchar

window.onload = function() {
    
    // (3) datumväljare

    let avresa = null;  // globalt definierad variabel inom window.onload
    let hemresa = null; // dito
    document.getElementById("avresa").addEventListener("submit", function(evt) {
        evt.preventDefault();   // hindra att sidan laddas om
        let input = document.getElementById("avresedatum").value;
        console.log(input);
        avresa = new Date(input);   // gör om till ett Date-objekt
        if (hemresa && hemresa < avresa) {
            alert("Hemresa måste vara efter avresa!");
        }
    });
    document.getElementById("hemresa").addEventListener("submit", function(evt) {
        evt.preventDefault();   // hindra att sidan laddas om
        let input = document.getElementById("hemresedatum").value;
        console.log(input);
        hemresa = new Date(input);   // gör om till ett Date-objekt
        if (avresa && hemresa < avresa) {
            alert("Hemresa måste vara efter avresa!");
        }
    });

    // Exempel med datuminmatning (vi gjorde något liknande på något handledningstillfälle i HTML-kursen, fast då hade vi inte officiellt börjat med JavaScript ännu)
    // Läs in aktuell tid, formatera om detta till en lämplig textsträng och sätter attributvärdet "min" hos inmatningsfälten "avresa" och "hemresa"
    let nu = new Date();    // returnerar aktuell tid (år, månad, dag, timme, minut osv.)
    console.log(nu);        // t.ex. Fri Nov 26 2021 09:19:59 GMT+0100 (centraleuropeisk normaltid)
    // vi behöver formatera om till lämplig textsträng som vi kan ge till HTML-datuminmatningsfältets min-attribut
    let tidStrang = nu.toISOString();
    tidStrang = tidStrang.substring(0, 16); // ta bort sekunder och millisekunder
    console.log(tidStrang);  // t.ex. 2021-11-26T08:22:49
    let datumInmatning = document.getElementById("avresedatum");
    datumInmatning.setAttribute("min", tidStrang);

    // alternativt tillvägagångssätt, funkar lika bra men kräver lite omständigare konstruktion av textsträngen som man skickar till HTML-attributet
    let timmar = nu.getHours();
    if (timmar < 10) {
        timmar = "0" + timmar;
    }
    tidStrang = nu.getFullYear() + "-" + (nu.getMonth()+1) + "-" + nu.getDate() + "T" + timmar + ":" + nu.getMinutes() + ":" + nu.getSeconds();   // obs att getMonth returnerar noll-indexerad månad (januari=0, februari=1 osv.) så vi måste addera ett
    console.log(tidStrang);
    //datumInmatning.setAttribute("minDate", tidStrang);

    // säg att man inte ska kunna resa mer än sju dagar fram i tiden
    nu.setDate(nu.getDate() + 7);
    tidStrang = nu.toISOString();
    tidStrang = tidStrang.substring(0, 16);
    console.log(tidStrang);
    datumInmatning.setAttribute("max", tidStrang);


}

// (5) jQuery
$(document).ready(function() {  // motsvarar window.onload, finns flera alternative sätt att skriva detta, t.ex. "$(function() {", se https://api.jquery.com/ready
    $("#paragraf1").html("Hej jQuery!");    // motsvarar document.getElementById("paragraf1").inneHtml = "Hej jQuery!";, dvs. man skriver till ett specifikt element på HTML-sidan

    $("#klickrubrik").click(function() {
        $("#paragraf2").toggle();   
    });

});

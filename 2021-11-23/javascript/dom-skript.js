/*
Med JavaScript kan man bl.a.
    Skapa nya HTML-element
    Ta bort befintliga HTML-element
    Ändra egenskaper och innehåll för HTML-element
    Ändra CSS-stilsättningar

Ett HTML-dokument kan programmeras att reagera på olika händelser, t.ex.
    När användaren klickar på ett visst element
    När webbsidan har laddat klart
    När en bild har laddat klart
    När användaren drar muspekaren över ett visst element
    När användaren skriver in text i ett formulärfält
    När man skickar ett formulär
    När användaren trycker på en tangentknapp
    När användaren trycker med fingret på en touchscreen
*/

// funktion som anropas när man klickar på ett visst html-element på sidan
let minEgenFunktion = function() {
    alert("Hej från minEgenFunktion!");
}

// exempel getdocumentbyid
let enParagraf = document.getElementById("minParagraf");
console.log(enParagraf);    // null - betyder att skriptet inte kan hitta HTML-elementet
// kan åtgärdas genom att flytta script-taggarna i HTML-dokumentet nedanför body eller med ett await/defer-attribut
// men vi vill helst inte behöva anpassa HTML-dokumentet mer än nödvändigt för att JavaScriptet ska kunna fungera

// i fortsättningen kräver vi att all JavaScript ska exekveras först efter att fönstret har laddats
window.onload = function() {    // funktion som anropas först efter fönstret har laddats
        // testa att köra de två kodraderna som vi försökte med ovan
    enParagraf = document.getElementById("minParagraf");
    console.log(enParagraf);    // nu hittar vi HTML-elementet!

    // undersök specifika objekt i DOM
    console.log(document);
    console.log(document.head);
    console.log(document.body);

    // lägg till händelsehanterare med JavaScript istället för direkt i HTML
    let klickHanterare = function() {
        console.log("Klickat på paragrafen med id=minParagraf!");
    }
    //enParagraf.addEventListener("click", klickHanterare);   // observera att en funktion är inparameter till en annan funktion
    enParagraf.onclick = klickHanterare;    // alternativ sätt att lägga till händelsehanterare
    
    // lägg till händelsehanterare med en s.k. "anonym funktion"
    enParagraf.addEventListener("mouseover", function() {
        console.log("Hovrat över paragrafen med id=minParagraf!");
    });

    // lägg till händelsehanterare till dokumentkroppen för händelsen mousemove
    document.body.addEventListener("mousemove", function(evt) { // observera att funktionen har en inparameter
        let koordinater = "X=" + evt.x + " Y=" + evt.y;
        //console.log(koordinater);
    });

    // Det finns ganska många andra händelser (events), fönstret ändrar storlek, användaren scrollar ner till botten av sidan, formulär skickas osv.
    // Referens till fler händelser: http://developer.mozilla.org/en-US/docs/Web/Events

    // skriva till webbsidan - dåligt exempel
    //document.write("Skriver över allt innehåll!");  // observera att HTML-källkoden förblir densamma

    // skriva till webbsidan - bättre exempel
    enParagraf.innerHTML = "Skriver till<br>webbsidan från <code>JavaScript</code>!";

    // ändra stilsättning på element i webbsidan
    enParagraf.style = "color: red";    // vanlig CSS-kod

    // välja element utifrån klassnamn
    let lorem = document.getElementsByClassName("lorem");
    console.log(lorem);
    console.log(lorem[0]);

    // skriva till webbsidan vid användargenererad händelse
    lorem[0].addEventListener("mouseover", function() {
        this.innerHTML = "Hej!";    // ändrar HTML-elementets innehåll till "Hej!"
    });
    // samma    sak, men med en loop över samtliga element av klassen "lorem"
    for (let i = 0; i < lorem.length; i++) {
        lorem[i].addEventListener("mouseover", function() {
            this.innerHTML = "Hej!";
        });
    }

    // logga mus-koordinaterna på webbsidan istället för i konsolen 
    document.body.addEventListener("mousemove", function(evt) { // observera att funktionen har en inparameter
        let koordinater = "X=" + evt.x + " Y=" + evt.y;
        lorem[0].innerHTML = koordinater;   // istället för console.log!
    });
}
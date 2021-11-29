/*
Innan vi fortsätter, kommer du ihåg på ett ungefär vad följande är:
    - server? (ett program som svarar på förfrågningar från andra program)
    - klient? (ett program som kommunicerar med en server)
    - localhost? (en server som körs på den egna datorn)
    - port? (en adress i form av ett tal mellan noll och 65535)
    - get? (en HTTP-metod för att skicka data mellan klient och server)
    - post? (en annan HTTP-metod för att skicka data mellan klient och server)
*/

/*
// Kör en enkel webbserver på localhost:3000
const http = require("http");   // http är en inbyggd klass i Node för att köra webbservrar
const app = http.createServer(function(req, res) {  // definierar en funktion som körs när en klient ansluter till servern
    res.end("<h1>Hallå NodeJS!</h1>"); // skickar ett svar till klienten
});
app.listen(3000);   // STARTAR SERVERN
console.log("Kör servern på localhost:3000.");
// om du ersätter "localhost" med din dators lokala IP-adress (t.ex. 192.168.0.17) så kan du även se sidan från andra datorer på samma nätverk
*/

// under resten av denna vecka använder vi ett lite mer sofikerat ramverk för webbservrar: Express
// installera med "npm install express" i kommandotolken
const express = require("express"); // "require" betyder att man importerar en modul
const app = express();
app.get("/", function(req, res) {   // definiera en route som lyssnar på get-förfrågningar
    //res.end("<h1>Hallå Express!</h1>"); // kan visa html, men inte icke-engelska bokstäver som åäö
    res.send("<h1>Hallå Express!</h1>");    // med metoden "send" istället för "end" så visas svenska bokstäver korrekt
    // Express har en funktion "send" som även skickar headerinformation som t.ex. teckenkodning
});
app.listen(3000);   // STARTAR SERVERN OCH LYSSNAR PÅ PORT 3000
console.log("Kör servern på localhost:3000");

// skapar en undersida
app.get("/undersida", function(req, res) {
    res.send("Välkommen till undersidan!");
});

// filhantering
const fs = require("fs");   // eventuellt behöver ni köra "npm install fs"
app.get("/filhantering", function(req, res) {
    fs.readFile("data.txt", function(err, data) {   // första argumentet är filnamnet, andra argumentet är en funktion (callback)
        // callback-funktionen har i sin tur två argument: ett objekt err med information om eventuella fel och ett objekt med data som lästs in
        if (err) throw err; // avbryt exekveringen vid fel
        else console.log(err);  // null om inget fel inträffat
        res.send(data);
    });
});
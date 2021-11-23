// vi ser till att fönstret laddas innan vi kör något skript
window.onload = function() {
    let input = document.getElementById("input");   // formuläret
    input.addEventListener("submit", function(evt) {
        evt.preventDefault();   // förhindra att sidan laddas om
        //alert("Skickat!");
        let nr1 = document.getElementById("nr1");   // observera att nr1 är själva HTML-formuläret, inte innehållet som användaren har skrivit in
        console.log(nr1.value); // vi kommer åt användarinput med attributet value
        // gör likadant med nr2 och beräkna summan
        let nr2 = document.getElementById("nr2");
        let summa = Number(nr1.value)+Number(nr2.value);    // glöm inte att typa om till tal!
        console.log(summa);
        // skriv output till webbsidan
        let output = document.getElementById("output");
        output.innerHTML = nr1.value + "+" + nr2.value + "=" + summa;
        document.getElementById("summa").value = summa;
    });

    // gör formuläret intelligent genom att hantera felaktig input
    let kollaInput = function() {
        let input = this.value;
        if (isNaN(Number(input))) {
            alert("Du måste ange ett tal!");
        }
    }
    document.getElementById("nr1").addEventListener("blur", kollaInput);    // blur är en händelse som innebär att man flyttar markören utanför inmatningsfältet
    document.getElementById("nr2").addEventListener("blur", kollaInput);

}
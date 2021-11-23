/*
jQuery är ett av de äldsta och mest använda JavaScript-biblioteken
jQuery är kanske inte lika viktigt längre, men finns fortfarande på MÅNGA webbplatser.
Låg inlärningströskel = relativt lätt att lära sig.
Se övrigt referensmaterialet i Teams-meddelandet 2021-11-11 för ytterligare exempel
Vi kan även ta upp mer jQuery under handledningstid
Motto: "Write less - do more", alltså få mer gjort med mindre kod
*/
$(document).ready(function() {  // motsvarar window.onload
    $("#paragraf1").html("Hej jQuery");
    // motsvarar document.getEelmentById("paragraf1").innerHtml = "Hej jQuery!";

    $("#klickrubrik").click(function() {
        alert("Hejsan!");
    });
});
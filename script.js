let startZeit = 0;

function wartePhase() {
    document.getElementById("feld").style.background = "red";
    document.getElementById("feld").textContent = "Warten...";
    let zeit = 2000 + Math.random() * 3000;
    setTimeout(gruenPhase, zeit);
}

function gruenPhase() {
    document.getElementById("feld").style.background = "green";
    document.getElementById("feld").textContent = "KLICK JETZT!";
    startZeit = Date.now();
}

function klickReaktion(params) {
    let farbe = document.getElementById("feld").style.background;
    if (farbe === "green") {
        let ende = Date.now();
        let reaktionsZeit = ende - startZeit;
        document.getElementById("anzeige").textContent = "Deine Reaktionszeit:"+ reaktionsZeit + "ms";
    } else{
        document.getElementById("anzeige").textContent = "Zu früh geklickt! Versuch's nochmal.";
    }
    wartePhase();
}
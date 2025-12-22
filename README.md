# Reaktionsspiel -- Teste deine Geschwindigkeit ⚡

Dieses Projekt ist ein kleines JavaScript-Spiel, bei dem du deine
Reaktionszeit messen kannst.\
Das Spielfeld wechselt nach einem zufälligen Intervall von Rot auf Grün
sobald es grün wird, musst du so schnell wie möglich klicken. Danach
wird deine Reaktionszeit in Millisekunden angezeigt.

Das Spiel enthält außerdem ein Cyberpunk-Neon-Design mit Glow-Effekten
für ein futuristisches Look & Feel.

##  Vorschau

Das Reaktionsspiel zeigt ein farbiges Feld (Rot → Grün), einen
Anzeigetext sowie eine Rückmeldung über deine Geschwindigkeit. Das
Cyberpunk-Design sorgt für leuchtende Neon-Elemente und
Scanline-Effekte.

##  Features

-   Zufällige Wartezeit (2--5 Sekunden)
-   Reaktionszeit-Messung in Millisekunden
-   Erkennung von Frühstarts
-   Automatischer Neustart jeder Runde
-   Cyberpunk-Neon-UI mit Scanline-Animation
-   Einfacher und übersichtlicher JavaScript-Code

##  Funktionsweise

1.  Beim Start wechselt das Spielfeld auf Rot („Warten...").
2.  Nach einer zufälligen Zeit wird das Feld Grün („KLICK JETZT!").
3.  Du klickst so schnell wie möglich auf das Spielfeld.
4.  Das Spiel misst die Zeit zwischen Grün-Signal und deinem Klick.
5.  Die gemessene Zeit wird angezeigt.
6.  Eine neue Runde beginnt automatisch.

##  Projektstruktur

-   index.html -- Grundstruktur des Spiels\
-   style.css -- Cyberpunk-Neon-Design\
-   script.js -- Spielmechanik und Reaktionslogik

##  Verwendete Technologien

-   HTML5
-   CSS3 (Glow-Effekte, Animationen, Cyberpunk-Look)
-   JavaScript (DOM-Manipulation, Timeout, Zeitmessung)

##  Installation & Start

1.  Repository klonen oder ZIP herunterladen\
2.  Projektordner öffnen\
3.  index.html im Browser öffnen\
4.  Spielen!

##  Kernfunktionen

-   wartePhase()
-   gruenPhase()
-   klickReaktion()

##  Anpassungen

Das Cyberpunk-Design kann über die Variablen in der CSS-Datei einfach
geändert werden.

##  Motivation

Dieses Projekt wurde entwickelt, um die Grundlagen von
JavaScript-Funktionen, DOM-Zugriff und Event Handling zu üben.

##  Lizenz

Dieses Projekt kann frei genutzt, verändert und erweitert werden.

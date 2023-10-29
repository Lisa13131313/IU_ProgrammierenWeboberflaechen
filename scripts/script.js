//Elemente müssen erst vollständig geladen werden
document.addEventListener("DOMContentLoaded", function () {

// Gewähltes Listenitem in Feld schreiben
// Einen Event-Listener hinzufügen, um auf Klicks zu reagieren
    document.addEventListener("click", klickVerwalten);

    function klickVerwalten(event) {
        // Das geklickte Element erhalten
        const clickedElement = event.target;

        //Das innerHTML des geklickten Elements auslesen
        const wahl = clickedElement.innerHTML;

        //Die ID der Liste auslesen
        const liste_id = clickedElement.parentNode;

        //Entscheidung, in welches Formularfeld geschrieben werden muss
        if (liste_id.id === "wahl_gebiet") {
            // Das Formularfeld für die Informationen auswählen
            const elementInfoFeld_1 = document.getElementById("out_gebiet");
            // Die Informationen in das Formularfeld schreiben
            elementInfoFeld_1.value = `${wahl}`;
        }
        if (liste_id.id === "wahl_kleidung") {
            // Das Formularfeld für die Informationen auswählen
            const elementInfoFeld_2 = document.getElementById("out_kleidung");
            // Die Informationen in das Formularfeld schreiben
            elementInfoFeld_2.value = `${wahl}`;
        }
    }

//Überprüfen, auf welcher Seite der Benutzer gerade ist
    const marker = document.getElementById("marker_fahrzeug");
    if (marker) {
        entfernung();
    }


//Fehlermeldung bei zu großer Entfernung zur Geschäftsstelle
    function entfernung() {
// Das Input-Feld abrufen
        const inputFeld = document.getElementById('plz');

// Das Input-Feld überwachen und die Funktion pruefeWert aufrufen
        inputFeld.oninput = (_) => {
            //Bei jedem Input wird geprüft, ob bereits zwei Zeichen eingegeben wurden
            if (inputFeld.value.length >= 2) {
                pruefeWert(inputFeld.value);
            }
        };
    }

// Den eingegebenen Wert überprüfen
    function pruefeWert(inputFeld) {

        // Die ersten beiden Zeichen extrahieren
        const ersteZwei = inputFeld.substring(0, 2);

        // Gewünschter Wert
        const gewuenschterWert = "92"; //
        //Abgleich mit der PLZ der Geschäftsstelle
        if (ersteZwei.toString() === gewuenschterWert) {
            hideError();
        } else {
            //Fehlermeldung
            showError();
        }
    }

// Fehlermeldung einblenden
    function showError() {
        document.getElementById("warnung").style.display = "block";
    }

// Fehlermeldung ausblenden
    function hideError() {
        document.getElementById("warnung").style.display = "none";
    }
});







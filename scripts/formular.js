// Elemente müssen erst vollständig geladen werden
document.addEventListener("DOMContentLoaded", function () {

// Dokument erst dann absenden, wenn alle Felder ausgefüllt sind
// Liste aller Input-Felder holen
    function inputsHolen() {
        return document.querySelectorAll("input");
    }

// Jedes Feld auf Inhalt überprüfen
    function inhaltVorhanden(input) {
        return input.value.trim().length > 0;
    }

// Felder durchlaufen und auf Inhalt prüfen und Warnung ausgeben
    function habenAlleInputsInhalt() {
        const inputs = inputsHolen();
        for (const input of inputs) {
            if (!inhaltVorhanden(input)) {
                alert("Bitte geben Sie einen Wert für das Feld " + input.name + " ein.");
                return false;
            }
        }
        return true;
    }

// Abschicken regeln
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!habenAlleInputsInhalt()) {
            return;
        } else {
            form.submit();
        }

    });
});
//Elemente müssen erst vollständig geladen werden
document.addEventListener("DOMContentLoaded", function () {

//Daten in Zusammenfassung übertragen
    const currentUrl = window.location.href;

//URL in ein Objekt umwandeln
    const url = new URL(currentUrl);

// Die Werte der Parameter auslesen
    const vorname = url.searchParams.get("Vorname");
    const nachname = url.searchParams.get("Nachname");
    const strasse = url.searchParams.get("Straße");
    const hausnummer = url.searchParams.get("Hausnummer");
    const postleitzahl = url.searchParams.get("Postleitzahl");
    const ort = url.searchParams.get("Ort");
    const kleidung = url.searchParams.get("Kleidungsart");
    const gebiet = url.searchParams.get("Krisengebiet");
    const marker = url.searchParams.get("Marker");

// Ein neues Date-Objekt erstellen, das die aktuelle Uhrzeit und das Datum enthält
    const aktuellesDatumUndUhrzeit = new Date();

//Datum ausgeben
    const aktuellesDatum = aktuellesDatumUndUhrzeit.toLocaleDateString();

//Uhrzeit ausgeben
    const aktuelleUhrzeit = aktuellesDatumUndUhrzeit.toLocaleTimeString();

//Die Felder für die Eingabe der Daten auswählen
    const name = document.getElementById("name");
    const spendenart = document.getElementById("spendenart");
    const krisengebiet = document.getElementById("krisengebiet");
    const datum = document.getElementById("datum");
    const uhrzeit = document.getElementById("uhrzeit");
    const adresse = document.getElementById("adresse");
    const abgabe = document.getElementById("abgabe");

//Die Informationen an die richtige Stelle schreiben
    name.innerHTML = vorname + " " + nachname;
    spendenart.innerHTML = kleidung;
    krisengebiet.innerHTML = gebiet;
    datum.innerHTML = aktuellesDatum;
    uhrzeit.innerHTML = aktuelleUhrzeit;

//Überprüfen, ob in der Geschäftsstelle oder über Sammelbestellung abgesendet wurde
    if (marker === "Geschäftsstelle") {
        adresse.innerHTML = "Abgabe in der Geschäftsstelle";
        abgabe.innerHTML = "Geschäftsstelle";
    } else {
        adresse.innerHTML = strasse + " " + hausnummer + ", " + postleitzahl + " " + ort;
        abgabe.innerHTML = "Sammelfahrzeug";
    }
});

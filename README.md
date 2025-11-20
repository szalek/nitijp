# Zadanie domowe

Krótki opis repozytorium przygotowanego na zadanie domowe.

---

## Zawartość repozytorium

| Plik            | Opis                                                                 |
|-----------------|----------------------------------------------------------------------|
| `index.html`    | Mój starszy projekt – prosty formularz rezerwacji pobytu z wyborem dat i liczby gości, korzystający z jQuery i wtyczki `daterangepicker`. |
| `ksiazki.csv`   | Dane o książkach w formacie CSV (m.in. ISBN, tytuł, autor, rok wydania, gatunek, cena, dostępność). |
| `library.json`  | Dane o książkach zapisane jako struktura JSON (`library` → `books`). |
| `library.xml`   | Te same dane w formacie XML, powiązane ze schematem `library.xsd`.   |
| `library.xsd`   | Schemat XML opisujący strukturę pliku `library.xml`.                 |
| `composer.json` | Konfiguracja przykładowego projektu PHP/Laravel z listą zależności.  |
| `README.md`     | Ten plik – opis repozytorium i zadania.                              |
| `markdown.md`   | Przykładowy plik markdown.                                           |

---

## Krótki przykład z `index.html`

Fragment formularza wyboru dat:

```html
<input type="date" id="datePicker1" name="data-przyjadu">
<input type="date" id="datePicker2" name="data-wyjazdu">

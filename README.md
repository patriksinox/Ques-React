
# React task pre pohovor do firmy Ques

# zadanie:
Zadanie pre vývojára: Vytvorenie jednoduchej ReactJS aplikácie s využitím Hacker News API

Cieľ projektu:

Cieľom tohto projektu je vytvoriť jednoduchú webovú aplikáciu pomocou ReactJS, ktorá bude interagovať s Hacker News API a zobrazovať vybrané dáta v prehľadnom užívateľskom rozhraní.

## Požiadavky na projekt:

    		Základné funkcie:
        Zobrazenie aktuálnych top príspevkov z Hacker News.
        Možnosť vyhľadať príspevky podľa kľúčových slov.
        Zobrazenie detailov vybraného príspevku, vrátane názvu, autora, bodov, času pridania, a počtu komentárov.
        Možnosť prechádzať komentáre k príspevkom.
        Implementovat cas pridania (idealne relativny - teda “pred 4 hodinami”,  a pod)
    		Technologický stack:
        ReactJS: Aplikácia by mala byť postavená s využitím najnovšej verzie ReactJS.
        Axios/Fetch API: Na komunikáciu s Hacker News API použite Axios alebo Fetch API.
        CSS Framework: Použite Bootstrap alebo Material-UI pre štylizáciu aplikácie, aby bola responzívna a esteticky príjemná.
    		Stránkovanie:
        Implementujte jednoduché stránkovanie pre zobrazenie príspevkov a komentárov, aby užívateľ mohol ľahko navigovať v dátach.
    		Vyhľadávanie:
        Umožnite užívateľom vyhľadať príspevky na základe kľúčových slov. Výsledky vyhľadávania by mali byť prezentované na samostatnej stránke.
    		Detail príspevku:
        Po kliknutí na príspevok v zozname by užívateľ mal byť presmerovaný na stránku s detailom príspevku. Detail zahŕňa všetky relevantné informácie dostupné cez API.
    		Responsívny dizajn:
        Aplikácia by mala byť plne responzívna a prispôsobivá pre rôzne typy zariadení (desktop, tablet, mobil).
    		Dokumentácia:
        Vytvorte podrobnú dokumentáciu k vášmu kódu, vrátane inštrukcií pre inštaláciu a spustenie aplikácie, ako aj prehľad použitých komponentov a metód.

Odovzdávanie:

    Kód aplikácie by mal byť odovzdaný na GitHub s README súborom, ktorý obsahuje všetky vyššie uvedené detaily pre inštaláciu a používanie aplikácie.

# Zmeny:
### * zmeny: Mohol som použiť CSS ako som chcel.
### *2 Miesto čistého Reactu bol použitý Next, samotný React v dokumentacií odporúča rovno pracovať s frameworkom.

Live verzia:
https://ques-react-task.netlify.app/

# Postup inštalácie:
1. Otvoriť si terminál a napísať "npm run install"
2. Následne npm run dev

# Fungovanie aplikácie:
Zobrazenie 500 top stories z Hacker News Api, filtrovanie podľa autora alebo stringu v Title. Možnosť zobrazenie detailov článku, prechádzanie komentárov. 

# Záver: 
Táto Api je celkom divná, po prezretí ich dokumentácie som zistil že už nie je moc využívaná, miesto nej sa používa Algolia Hacker news ktorá poskytuje jednoduchšie filtrovanie/pagináciu a podobne bez toho aby som zliepal polia na seba. Algolia by poskytovala teda lepší výkon aplikácie. 
Snažil som sa vytvoriť esteticky príjemmnú neviem či sa mi to však podarilo, vyzerá to dosť fádne.
Aplikáciu je možné ešte optimalizovať. 
# JS-Ereignisse (Events) / Dienstag 26.11.24

## Lernziele :

1. `User Events` vs `Browser Events` ?

- Benutz Events

  - Etwas passiert, nachdem du einen Button gedrückt hast
  - Etwas passiert, nachdem du ein Formular abgeschickt hast
  - Etwas passiert, wenn du deine Maus bewegst
  - Etwas passiert, wenn du dein Browserfenster veränderst

- Browser Events
  - Etwas passiert, wenn der Seiteninhalt fertig geladen ist
  - Etwas passiert, wenn ein JavaScript-Fehler auftritt

2. Zuhören und Reagieren **Eventlistener**.

- Wir fügen Event-Listener zu Event-Zielen hinzu

  - Das `document` selbst kann ein Event-Ziel sein
  - Jedes Element kann ein Event-Ziel sein

- Ein `<button>` kann das Ziel eines `click`-Event sein

  ```js
  function myButtonWasClicked() {
    alert("Klik!");
  }

  const myButton = document.querySelector("button");
  myButton.addEventListener("click", myButtonWasClicked);
  ```

  - Du kannst Listener auch entfernen
  - `EventTarget.removeEventListener(<type>, <function reference>)`

3. **Event Objekt**

- Mauser event könnten die genauen Koordinaten haben, wo die Maus auf dem Bildschirm war
  - Tastatur event könnten die Taste haben, die gedrückt wurde

4. Was ist `preventDefault()` ?

### Resources :

- [MDN Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

- [Click Event](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event)

- [PreventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

### Tasks :

- [spa-dom-events-basic](https://classroom.github.com/a/wYdrni0Q)

- [spa-dom-walking-mario](https://classroom.github.com/a/-mtQPj4V)

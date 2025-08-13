# Wetter-API – Frontend

Dies ist das Next.js-Frontend für die Wetter-Widget-App.
Nutzer können damit Wetter-Widgets für verschiedene Standorte hinzufügen, anzeigen und entfernen.

## Funktionen

– Standort hinzufügen und aktuelle Wetterbedingungen anzeigen.
– Wettersymbole basierend auf der Beschreibung anzeigen.
– Widgets einfach löschen.
– Responsives Design.

## Tech Stack

- **Next JS** - React-Framework für serverseitiges Rendering & statische Site-Generierung
- **React** - UI-Bibliothek
- **Typescript** - Stark typisiertes JavaScript für sicheren & wartbaren Code
- **Axios** - API-Anfragen
- **TailwindCSS** - Styling
- **Font Awesome Icons** - Icons
- **Jest** - Unit-Tests

## 📂 Projektstruktur

```
frontend/
├── components/
│ ├── Header.tsx
│ └── Footer.tsx
│ ├── Loader.tsx
│ └── RemoveWidget.tsx
│ ├── ParentWidget.tsx
│ └── DisplayWidget.tsx
│ └── Location.tsx
├── pages/
│ ├── index.js
│ └── _app.js
├── styles/
├── public/
├── package.json
```

## Installation & Einrichtung

1. **Repository klonen**

```bash
git clone https://github.com/venkatesh-r/Tecomon.git
cd tecomon/frontend
```

2. **Abhängigkeiten installieren**

```bash
npm install
```

3. **Entwicklungsserver starten**

```bash
npm run dev
```

4. **Im Browser öffnen**

- Besuchen `http://localhost:3000/`

## 🔗 API-Integration

- Dieses Frontend interagiert mit einem **Node.js + Express + MongoDB** Backend.

# Wetter-API - Backend

Dies ist das Node.js + Express Backend für die Wetter-Widget-App.
Es speichert Widgets im Arbeitsspeicher (oder in der Datenbank) und ruft Wetterdaten von der OpenWeatherMap-API ab.

## Funktionen

- REST-API für Wetter-Widgets.
- Aktuelles Wetter von OpenWeatherMap abrufen.
- Caching zur Reduzierung von API-Aufrufen.
- Fehlerbehandlung für ungültige Standorte.

## Technologie-Stack

- **Node JS** - JavaScript-Laufzeitumgebung
- **Express** - Minimalistisches Webframework
- **Typescript** - Stark typisiertes JavaScript
- **Axios** - API-Anfragen
- **dotenv** - Lädt Umgebungsvariablen aus .env-Dateien.
- **CORS** – Middleware für Cross-Origin-Anfragen

## 📂 Projektstruktur

```
frontend/
├── src/
│ ├── config
| └── database.ts
│ ├── controllers
│ └── widgetControllers.ts
│ ├── modules
│ └── widget.ts
│ ├── routes
│ └── widgetRouters.ts
├── services/
│ ├── getWeather.ts
├── app.ts
├── package.json
├── tsconfig.json
```

## Installation & Einrichtung

1. **Repository klonen**

```bash
git clone https://github.com/venkatesh-r/Tecomon.git
cd tecomon/backend
```

2. **Abhängigkeiten installieren**

```bash
npm install
```

3. **Entwicklungsserver starten**

```bash
npm run dev
```

4. **Im Browser öffnen**

- Besuchen Sie `http://localhost:5000/`

## API-Endpunkte

1. Widget abrufen

- Endpunkt: GET /widgets
- Beschreibung: Alle gespeicherten Widgets abrufen

2. Widget hinzufügen

- Endpunkt: POST /Widgets
- Beschreibung: Neuen Standort hinzufügen.
- Anfragetext: {
  "location": "Berlin"
  }

3. Widget löschen

- Endpunkt: /widgets/:id
- Beschreibung: Widget nach ID entfernen.

### Verbindungen

7. Verbindungsanfrage senden

- Endpunkt: POST sendRequest/interested/:id
- Beschreibung: Verbindungsanfrage an einen anderen Nutzer senden.

## Datenbankschema

1. Widget:

- location (String)
- \_id (Nummer)

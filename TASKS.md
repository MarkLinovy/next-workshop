# Workshop Aufgaben & Agenda

**Aufgabe 1: Profil-Seite erstellen**
1. Erstelle eine neue Route `/profile`.
2. Erstelle eine Unter-Route `/profile/settings` und `/profile/[userId]`.
3. Verlinke diese Seiten in der Sidebar (`src/app/layout.js`).

**Aufgabe 2: Layouts**
1. Erstelle ein spezielles Layout für den `/exercises` Bereich (`src/app/exercises/layout.js`), das eine andere Hintergrundfarbe oder einen zusätzlichen Header hat.

**Aufgabe 2b: Middleware Protection**
1. Erstelle eine `src/middleware.js` Datei.
2. Implementiere eine Logik, die den Zugriff auf `/profile/settings` verbietet, wenn kein Auth-Cookie gesetzt ist.
3. Leite den Nutzer stattdessen auf `/login` um.

**Aufgabe 3: Feature Flag**
1. Füge eine neue Variable `NEXT_PUBLIC_ENABLE_BETA` zu `.env` und `src/env.js` hinzu (Typ: Boolean oder String 'true'/'false').
2. Nutze diese Variable auf der Startseite (`src/app/page.js`), um einen "Beta Feature"-Button anzuzeigen oder zu verstecken.

**Aufgabe 4: Fix the Bug**
*   Navigiere zu `/exercises/debug`.
*   Die Seite stürzt ab oder lädt unendlich.
*   **Ziel**: Analysiere den Code in `src/app/exercises/debug/page.js` und repariere ihn.
    *   Hinweis: Achte auf die API-Antwort von `jsonplaceholder` und wie sie im State gespeichert wird.
    *   Implementiere korrektes Error-Handling.

**Aufgabe 4b: Custom Not Found**
*   Klicke in der Sidebar auf "Not Found Demo" (führt zu `/exercises/errorroute`).
*   Erstelle eine globale `not-found.js` Datei in `src/app/` (oder spezifisch für einen Bereich), um die Standard 404-Seite zu stylen.
*   Optional: Nutze die `notFound()` Funktion in einer Komponente, um diese Seite manuell auszulösen.

---

**Aufgabe 5: Server Components Fetching**
*   Öffne `src/app/exercises/fetching/page.js`.
*   Implementiere das Data Fetching für Posts von `https://jsonplaceholder.typicode.com/posts`.
*   Nutze `async/await` direkt in der Komponente (Server Component).
*   Stelle die ersten 10 Posts dar.

**Aufgabe 6: Suspense & Streaming**
*   Füge eine künstliche Verzögerung (Delay) in den Fetch-Prozess ein.
*   Erstelle eine `loading.js` im selben Ordner, um einen Lade-Indikator anzuzeigen.

**Aufgabe 7: Static Site Generation (SSG)**
*   Gehe zu `src/app/chats/[chatid]/page.js`.
*   Implementiere die Funktion `generateStaticParams`, um die Chat-Seiten für die IDs `1`, `2` und `3` statisch zu generieren.
*   Baue die App mit `npm run build` und prüfe den Output, um zu sehen, ob die Seiten als statisch markiert sind (⚫).

**Aufgabe 8: API Route & POST Requests**
*   Erstelle in `src/app/api/chats/route.js` eine `POST` Funktion.
*   Sie soll JSON-Daten (z.B. `{ message: "..." }`) empfangen und zurückgeben.
*   Optional: Baue ein einfaches Formular in einer Client Component, das diese API aufruft.

**Aufgabe 9: Unit Tests**
1. Schaue dir den existierenden Test `src/app/page.test.js` an.
2. Erstelle eine neue Test-Datei `src/app/login.test.js` für die Login-Seite.
3. Teste, ob das Email- und Passwort-Eingabefeld gerendert wird.
    *   Führe die Tests mit `npm test` aus.

**Aufgabe 10: E2E Test**
1. Öffne Cypress mit `npx cypress open` (oder erstelle eine Spec-Datei manuell in `cypress/e2e`).
2. Schreibe einen Test `cypress/e2e/navigation.cy.js`:
    *   Besuche die Startseite `/`.
    *   Klicke auf den Link zu "Chats".
    *   Prüfe, ob die URL `/chats` enthält.
    *   Prüfe, ob die Überschrift "Chats" sichtbar ist.

---

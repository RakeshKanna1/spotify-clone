# Spotify - Premium Music Streaming Web Client Clone

This project is a high-fidelity Single Page Application (SPA) web player inspired by the official Spotify desktop client. It features a dark card-in-card interface, custom vector controls, animated soundwave active states, and side drawers for lyrics and play queue.

---

## Key Features

1. **Seamless Navigation & Persistent Player**: The fixed bottom player uses `localStorage` to synchronize and persist the current song index, playlist queue, seek progress percentage, shuffle state, and repeat state across all routes.
2. **Interactive Library Sidebar Filter Pills**: Playlists, Artists, and Albums filter pills instantly sort your library list inside the sidebar in real time.
3. **Pulsing 3-Bar Sound Wave Indicator**: When a song is playing, the track number row index transitions into a live pulsing green wave animation.
4. **Sticky Scroll-Fading Navigation Header**: Features interactive history navigators, contextual search inputs, and opacity scroll fades with glassmorphism.
5. **Slide-Out Utility Drawers**:
   - **Lyrics Panel**: Custom lyrics scroll and highlight the active line dynamically synced to the playback progress bar.
   - **Play Queue**: Interactive upcoming songs list supporting "Play Next", "Play Now", and "Remove" queue reordering simulations.
6. **Toast Notifications**: Floating feedback toast items alert user interactions (Saved to Liked Songs, Added to queue, Muted).
7. **Robust Search & Browsing**: Support for search keyword querying, category chips, and browse categories.

---

## File Structure

```text
spotify/
├── index.html        # Unified SPA dashboard housing Home, Search, Library, Playlist, Artist views
├── style.css         # Dark theme layout system, visualizer animations & media queries
├── script.js         # State persistence manager, seek seekers & drawer widgets
└── README.md         # Project documentation
```

---

## Accessibility (a11y)

- **Semantic Layouts**: Built entirely using HTML5 semantic containers (`<aside>`, `<main>`, `<article>`, `<header>`, `<footer>`).
- **Focus States**: High-contrast, clean focus indicators (`outline: 2px solid var(--accent);`) are mapped onto all clickable anchors, buttons, and slider elements.
- **ARIA Markers**: Appropriate role definitions and label indicators help screen reader accessibility.

---

## Technologies Used

- **Layout Structure**: HTML5 semantic markup
- **Styling Rules**: CSS3 custom variables, CSS visualizer transitions, and flexbox grids
- **State Handling**: Vanilla ES6 Javascript and `localStorage` persistence API

---

## AI Usage Disclosure

This project was built pair-programming with Antigravity, an advanced AI coding assistant by Google DeepMind.

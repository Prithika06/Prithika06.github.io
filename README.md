# 🎵 Tunes - Premium Music Streaming Web Platform

A high-performance, modern music streaming web application built with **Vanilla JavaScript**, **HTML5 Audio API**, and a custom **Glassmorphism CSS Design System**.

![Tunes Web App](favicon.svg)

---

## ✨ Features & Highlights

### 🎨 Design & UX System
- **Soft Dark Glassmorphism Theme**: Obsidian dark background palette (`#07090e`, `#0f1420`), backdrop blur filters, and glowing electric cyan (`#00f2fe`) gradient accents.
- **8px Grid Layout System**: Strict visual hierarchy, modern typography scale (**Plus Jakarta Sans**), and smooth CSS transitions.
- **Fully Responsive**: Adapts across Desktop, Laptop, Tablet, and Mobile screens.

### 🎧 Audio & Playback Controls
- **Full Player Dock**: Play/pause, track seeking with custom range progress slider, volume controls, mute/unmute, and previous/next track navigation.
- **Shuffle & Repeat Modes**: Random track shuffling and single-track repeat loop modes.
- **Dynamic Hero Showcase**: The featured banner updates its title, lyrics quote, and blurred artwork background to match whichever track is selected or playing.
- **Equalizer Wave Visualizer**: Live animated wave bars indicating active playback.

### 📱 Pages & Navigation
1. **Discover**: Hero banner showcase, **Bliss** hits carousel, and **Blues** track carousel.
2. **My Library**: Interactive track table with filter pills (*All Tracks*, *Favorites*) and `localStorage` persistence for liked songs.
3. **Radio Stations**: Curated 24/7 radio channels (*A.R. Rahman Hits*, *Anirudh Beats*, *Romantic Bliss*, *Midnight Blues*, *Acoustic Unplugged*, *Folk & Ethnic*).
4. **Live Search**: Instant real-time song filtering as you type.

### ⌨️ Global Keyboard Shortcuts
- <kbd>Space</kbd> : Play / Pause Toggle
- <kbd>&larr;</kbd> / <kbd>&rarr;</kbd> : Seek backward / forward 5 seconds
- <kbd>&uarr;</kbd> / <kbd>&darr;</kbd> : Volume up / down 5%
- <kbd>M</kbd> : Mute / Unmute
- <kbd>L</kbd> : Favorite / Like current track

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla CSS3 (CSS Variables, Flexbox, CSS Grid, Glassmorphism), JavaScript (ES6+).
- **Icons & Fonts**: Bootstrap Icons (`bi-icon`), Google Fonts (*Plus Jakarta Sans*).
- **Deployment**: 100% Client-Side Static Architecture — fully compatible with **GitHub Pages**.

---

## 🚀 Local Setup & Running

Simply serve the repository using any static web server:

```bash
# Python 3 http.server
python3 -m http.server 8080
```

Open `http://localhost:8080` in your web browser.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

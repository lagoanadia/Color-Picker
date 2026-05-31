# 🎨 Background Color Picker

A simple interactive web page that lets users change the background color by clicking colored buttons.

## 📁 Project Structure

```
├── index.html   → Page structure and layout
├── style.css    → Styles, colors and animations
└── script.js    → Button logic and color switching
```

## 🚀 How It Works

Three circular buttons are displayed on screen, each filled with a different purple-toned color. When a button is clicked, the page background changes to match that button's color.

The colors used are:

| Button | Color     | Hex       |
|--------|-----------|-----------|
| 1      | Violet    | `#574ae2` |
| 2      | Dark Blue | `#222A68` |
| 3      | Purple    | `#654597` |

## 🧠 Key Concepts

- **DOM manipulation** — selecting and modifying HTML elements with JavaScript
- **Event listeners** — detecting button clicks with `addEventListener`
- **CSS variables** — defining colors once in `:root` and reusing them
- **Flexbox** — centering content both vertically and horizontally
- **CSS transitions** — smooth `transform` animation on button press

## 🛠️ How To Run

No build tools or dependencies needed. Just open `index.html` in any browser.

```bash
# Option 1 — open directly
open index.html

# Option 2 — serve locally (e.g. with VS Code Live Server extension)
```

## 🌐 Browser Compatibility

Works in all modern browsers (Chrome, Firefox, Edge, Safari). No external libraries used.

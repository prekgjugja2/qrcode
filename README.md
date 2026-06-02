<div align="center">

# 🔳 QR Code Studio

### Beautiful, branded QR codes — right in your browser.

A free, **build-free, 100% static** QR code generator by [Musaj GmbH](https://musaj.com).
No Node.js, no backend, no sign-up. Just open it (or drop it on any web host) and go.

**Deutsch (Standard) · English**

</div>

---

## ✨ Features

- **9 content types** — Link, Text, E‑Mail, Phone, SMS, WhatsApp, WiFi, Contact (vCard) & Location.
- **📦 Batch generator** — paste a list (one entry per line) and generate up to 60 codes at once, then download them all.
- **🎨 Style presets** — one‑click looks (Classic, Rounded, Dots, Ocean, Sunset, Forest, Mono).
- **Full customization** — dot & corner styles, colors, **linear gradients**, transparent background, error‑correction level and size.
- **🖼️ Logo embedding** — drop your logo in the center, adjust its size, hide the dots behind it (auto‑bumps error correction to *High*).
- **🏷️ Call‑to‑action frame** — a colored frame with a caption (e.g. *“Jetzt scannen” / “Scan me”*), **baked into every export** (PNG, JPEG **and** vector SVG).
- **💾 Save & reuse** — auto‑restores your last design and lets you save named style slots.
- **Export anywhere** — download **PNG / JPEG / SVG** or **copy to clipboard**.
- **🇩🇪 / 🇬🇧 Bilingual** — German by default with a one‑click English toggle (remembers your choice).
- **🔒 Private by design** — everything runs locally in the browser. Nothing you type is ever uploaded.

---

## 🚀 Getting started

This is a static site — there is **nothing to build**.

### Option 1 — Just open it
Double‑click `index.html`, or serve the folder with any static web server.

### Option 2 — Local preview
Any static server works. A few examples:

```bash
# PHP (e.g. XAMPP)
php -S 127.0.0.1:8745

# Python 3
python -m http.server 8745

# Node (optional, only if you happen to have it)
npx serve
```

Then visit **http://127.0.0.1:8745**.

### Option 3 — Deploy
Upload the folder to any web host (Apache, Nginx, GitHub Pages, Netlify, …).
Because all asset paths are **relative**, it works from a subfolder too — e.g. `https://musaj.com/qrcodemusaj/`.

---

## 📁 Project structure

```
qrcodemusaj/
├── index.html                  # The whole app (markup + content)
├── assets/
│   ├── app.css                 # Design system & layout
│   ├── app.js                  # All logic, i18n dictionary, QR options
│   └── vendor/
│       └── qr-code-styling.js  # QR engine (vendored — no CDN needed)
├── .claude/
│   └── launch.json             # Local preview config (optional)
└── README.md
```

---

## 🛠️ How it works

The QR rendering is powered by [**qr-code-styling**](https://github.com/kozakdenys/qr-code-styling),
which is **vendored locally** in `assets/vendor/` so the app runs even with no internet connection.

Everything else is hand‑written **vanilla JavaScript** — no framework, no bundler, no dependencies to install.

| Concern | Where |
|---|---|
| QR options (dots, corners, gradient, logo) | `currentOptions()` in `assets/app.js` |
| Payload builders (mailto:, WIFI:, vCard, …) | `buildPayload()` |
| Translations (DE/EN) | the `I18N` object |
| Call‑to‑action frame compositing | `framedCanvas()` / `framedSVG()` |
| Save / reuse (localStorage) | `getStyle()` / `applyStyle()` / slots |

---

## 🌍 Adding a language

1. Add a third key (e.g. `fr`) to each entry in the `I18N` object in `assets/app.js`.
2. Add the language to the bilingual field labels in `FIELD_DEFS`.
3. Add a `<button class="lang-btn" data-lang="fr">FR</button>` to the language switch in `index.html`.

> ⚠️ **Note:** never put a `data-i18n` attribute on an element that has child
> elements you need (e.g. an `<input>`). Translation replaces the element's text
> content, which would remove those children. Wrap the translated text in a
> child `<span data-i18n="…">` instead.

---

## ➕ Adding a content type

1. Add a tab button in `index.html` (`<button class="tab" data-type="yourtype">…</button>`).
2. Add its fields to `FIELD_DEFS` in `assets/app.js`.
3. Add a `case "yourtype":` to `buildPayload()` that returns the encoded string.
4. Add a `tab.yourtype` translation to `I18N`.

---

## 📝 License

The application code is © Musaj GmbH.
The bundled QR engine, [qr-code-styling](https://github.com/kozakdenys/qr-code-styling), is MIT‑licensed.

---

<div align="center">

Made with 💜 by **[Musaj GmbH](https://musaj.com)** · QR Code Studio

</div>

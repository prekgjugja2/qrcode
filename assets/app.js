/* ===== QR Code Studio — Musaj GmbH =====
   Static, build-free. Powered by qr-code-styling (vendored locally).
   Bilingual (DE default / EN) · batch mode · call-to-action frame · save & reuse. */
(function () {
  "use strict";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- Translations ---------- */
  var I18N = {
    "nav.how": { de: "Anleitung", en: "How it works" },
    "nav.faq": { de: "FAQ", en: "FAQ" },

    "hero.eyebrow": { de: "✨ Kostenlos · Ohne Anmeldung · Offline nutzbar", en: "✨ Free · No sign-up · Works offline" },
    "hero.h1": {
      de: 'Erstelle QR-Codes, die man <span class="grad-text">wirklich scannen</span> will',
      en: 'Make QR codes people <span class="grad-text">actually want to scan</span>'
    },
    "hero.sub": {
      de: "Gestalte gebrandete, farbige QR-Codes in Sekunden — für Links, WLAN, Kontakte und mehr. Füge dein Logo hinzu, wähle deinen Stil, lade in HD herunter. Alles in deinem Browser.",
      en: "Design branded, colorful QR codes in seconds — for links, WiFi, contacts and more. Add your logo, pick your style, download in HD. All in your browser."
    },

    "tab.url": { de: "🔗 Link", en: "🔗 Link" },
    "tab.text": { de: "📝 Text", en: "📝 Text" },
    "tab.email": { de: "✉️ E-Mail", en: "✉️ Email" },
    "tab.phone": { de: "📞 Telefon", en: "📞 Phone" },
    "tab.sms": { de: "💬 SMS", en: "💬 SMS" },
    "tab.whatsapp": { de: "🟢 WhatsApp", en: "🟢 WhatsApp" },
    "tab.wifi": { de: "📶 WLAN", en: "📶 WiFi" },
    "tab.vcard": { de: "👤 Kontakt", en: "👤 Contact" },
    "tab.geo": { de: "📍 Standort", en: "📍 Location" },
    "tab.batch": { de: "📦 Stapel", en: "📦 Batch" },

    "grp.presets": { de: "🎨 Stil-Vorlagen", en: "🎨 Style presets" },
    "grp.presetsHint": { de: "Looks mit einem Klick", en: "one-click looks" },
    "grp.customize": { de: "⚙️ Anpassen", en: "⚙️ Customize" },
    "grp.frame": { de: "🏷️ Rahmen & Call-to-Action", en: "🏷️ Frame & call-to-action" },
    "grp.logo": { de: "🖼️ Logo", en: "🖼️ Logo" },
    "grp.save": { de: "💾 Speichern & wiederverwenden", en: "💾 Save & reuse" },

    "cz.dotStyle": { de: "Punkt-Stil", en: "Dot style" },
    "cz.cornerStyle": { de: "Ecken-Stil", en: "Corner style" },
    "cz.dotsColor": { de: "Punkt-Farbe", en: "Dots color" },
    "cz.cornerColor": { de: "Ecken-Farbe", en: "Corner color" },
    "cz.gradient": { de: "Farbverlauf", en: "Gradient dots" },
    "cz.gradient2": { de: "2. Verlaufsfarbe", en: "Gradient 2nd color" },
    "cz.background": { de: "Hintergrund", en: "Background" },
    "cz.transparent": { de: "Transparent", en: "Transparent bg" },
    "cz.ec": { de: "Fehlerkorrektur", en: "Error correction" },
    "cz.size": { de: "Größe", en: "Size" },

    "opt.rounded": { de: "Abgerundet", en: "Rounded" },
    "opt.dots": { de: "Punkte", en: "Dots" },
    "opt.classy": { de: "Edel", en: "Classy" },
    "opt.classyRounded": { de: "Edel abgerundet", en: "Classy rounded" },
    "opt.square": { de: "Quadrat", en: "Square" },
    "opt.extraRounded": { de: "Extra rund", en: "Extra rounded" },
    "opt.dot": { de: "Punkt", en: "Dot" },
    "opt.ecL": { de: "Niedrig (L)", en: "Low (L)" },
    "opt.ecM": { de: "Mittel (M)", en: "Medium (M)" },
    "opt.ecQ": { de: "Quartil (Q)", en: "Quartile (Q)" },
    "opt.ecH": { de: "Hoch (H) · ideal für Logos", en: "High (H) · best for logos" },

    "fr.enable": { de: "Rahmen anzeigen", en: "Show frame" },
    "fr.text": { de: "Aufruf-Text", en: "Call-to-action text" },
    "fr.color": { de: "Rahmenfarbe", en: "Frame color" },
    "fr.defaultText": { de: "Jetzt scannen", en: "Scan me" },

    "logo.upload": { de: "Logo hochladen", en: "Upload logo" },
    "logo.remove": { de: "Entfernen", en: "Remove" },
    "logo.size": { de: "Logo-Größe", en: "Logo size" },
    "logo.hideDots": { de: "Punkte hinter Logo ausblenden", en: "Hide dots behind logo" },

    "save.name": { de: "Name dieses Designs", en: "Name this design" },
    "save.btn": { de: "Design speichern", en: "Save design" },
    "save.empty": { de: "Noch keine gespeicherten Designs.", en: "No saved designs yet." },
    "save.saved": { de: "Design gespeichert ✓", en: "Design saved ✓" },
    "save.applied": { de: "Design geladen ✓", en: "Design loaded ✓" },
    "save.deleted": { de: "Gelöscht", en: "Deleted" },
    "save.delete": { de: "Löschen", en: "Delete" },

    "prev.note": { de: "Vor dem Download zum Testen scannen 👇", en: "Scan to test before you download 👇" },
    "prev.copy": { de: "📋 Kopieren", en: "📋 Copy" },
    "prev.exportNote": {
      de: "PNG & JPEG werden in der gewählten Größe exportiert. SVG ist beliebig skalierbar — perfekt für den Druck.",
      en: "PNG & JPEG export at your chosen size. SVG is infinitely scalable — perfect for print."
    },

    "batch.title": { de: "Stapelverarbeitung", en: "Batch generator" },
    "batch.inputLabel": { de: "Einträge (eine Zeile = ein Code)", en: "Entries (one per line)" },
    "batch.placeholder": { de: "Eine URL oder ein Text pro Zeile…", en: "One URL or text per line…" },
    "batch.build": { de: "Vorschau aktualisieren", en: "Refresh preview" },
    "batch.downloadAll": { de: "Alle als PNG herunterladen", en: "Download all as PNG" },
    "batch.count": { de: "{n} Codes bereit", en: "{n} codes ready" },
    "batch.capped": { de: "Es werden die ersten {n} von {total} angezeigt.", en: "Showing first {n} of {total}." },
    "batch.empty": { de: "Füge oben Zeilen hinzu, um Codes zu erzeugen.", en: "Add lines above to generate codes." },
    "batch.note": { de: "Tipp: Beim Herunterladen mehrerer Dateien fragt der Browser einmal nach Erlaubnis.", en: "Tip: your browser will ask once to allow multiple downloads." },
    "batch.done": { de: "{n} Codes heruntergeladen ✨", en: "{n} codes downloaded ✨" },

    "how.title": { de: "So funktioniert's", en: "How it works" },
    "how.s1t": { de: "Typ wählen", en: "Pick a type" },
    "how.s1p": { de: "Wähle, was der Code tun soll: Link, WLAN, Kontaktkarte oder E-Mail.", en: "Link, WiFi, a contact card, an email — choose what the code should do." },
    "how.s2t": { de: "Mach ihn zu deinem", en: "Make it yours" },
    "how.s2p": { de: "Farben, Verläufe, runde Punkte und dein Logo in der Mitte.", en: "Colors, gradients, rounded dots, and your logo in the center." },
    "how.s3t": { de: "Herunterladen & teilen", en: "Download & share" },
    "how.s3p": { de: "Exportiere scharfes PNG/JPEG oder Vektor-SVG. Für Druck oder Bildschirm.", en: "Export crisp PNG/JPEG or vector SVG. Put it anywhere — print or screen." },

    "tips.title": { de: "Tipps für scanbare Codes", en: "Tips for scannable codes" },
    "tips.t1": { de: "✅ Starker Kontrast zwischen Punkten und Hintergrund.", en: "✅ Keep strong contrast between dots and background." },
    "tips.t2": { de: "✅ Mit Logo? Stelle die Fehlerkorrektur auf <b>Hoch (H)</b>.", en: "✅ Using a logo? Set error correction to <b>High (H)</b>." },
    "tips.t3": { de: "✅ Für Druck <b>SVG</b> oder großes PNG (800px+) exportieren.", en: "✅ For print, export <b>SVG</b> or a large PNG (800px+)." },
    "tips.t4": { de: "✅ Teste immer mit der Handykamera vor der Veröffentlichung.", en: "✅ Always test with your phone camera before publishing." },

    "faq.title": { de: "Häufige Fragen", en: "Frequently asked" },
    "faq.q1": { de: "Ist es wirklich kostenlos?", en: "Is it really free?" },
    "faq.a1": { de: "Ja. Kein Konto, kein Wasserzeichen, keine Limits. Erstellt von der Musaj GmbH.", en: "Yes. No account, no watermark, no limits. Built by Musaj GmbH." },
    "faq.q2": { de: "Laufen meine Codes ab?", en: "Do my codes expire?" },
    "faq.a2": { de: "Niemals. Das sind statische QR-Codes — die Daten stecken im Code selbst und funktionieren für immer.", en: "Never. These are static QR codes — the data lives inside the code itself, so they work forever." },
    "faq.q3": { de: "Sind meine Daten privat?", en: "Is my data private?" },
    "faq.a3": { de: "Absolut. Alles läuft in deinem Browser. Nichts, was du eingibst, wird auf einen Server geladen.", en: "Completely. Everything runs in your browser. Nothing you type is ever uploaded to a server." },
    "faq.q4": { de: "Darf ich sie kommerziell nutzen?", en: "Can I use them commercially?" },
    "faq.a4": { de: "Auf jeden Fall — auf Verpackungen, Flyern, Menüs, Visitenkarten, überall.", en: "Absolutely — on packaging, flyers, menus, business cards, anywhere." },

    "foot.made": { de: "Mit 💜 erstellt von", en: "Made with 💜 by" },
    "foot.privacy": { de: "Läuft zu 100% in deinem Browser — deine Daten bleiben bei dir.", en: "Runs 100% in your browser — your data stays with you." },

    "toast.downloaded": { de: "{x} heruntergeladen ✨", en: "Downloaded {x} ✨" },
    "toast.copied": { de: "In Zwischenablage kopiert 📋", en: "Copied to clipboard 📋" },
    "toast.copyUnsupported": { de: "Kopieren nicht unterstützt — bitte Download nutzen", en: "Copy not supported — use Download instead" },
    "toast.copyBlocked": { de: "Kopieren blockiert — bitte Download nutzen", en: "Copy blocked — try Download" },

    "preset.Classic": { de: "Klassisch", en: "Classic" },
    "preset.Rounded": { de: "Rund", en: "Rounded" },
    "preset.Dots": { de: "Punkte", en: "Dots" },
    "preset.Ocean": { de: "Ozean", en: "Ocean" },
    "preset.Sunset": { de: "Sonnenuntergang", en: "Sunset" },
    "preset.Forest": { de: "Wald", en: "Forest" },
    "preset.Mono": { de: "Mono", en: "Mono" }
  };

  /* ---------- Tiny localStorage helpers ---------- */
  function lsGet(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  /* ---------- State ---------- */
  var savedLang = (function () { try { return localStorage.getItem("qrLang"); } catch (e) { return null; } })();
  var state = {
    lang: savedLang === "en" || savedLang === "de" ? savedLang : "de",
    type: "url",
    data: {},
    logo: null,
    batchLines: []
  };

  function t(key, vars) {
    var entry = I18N[key];
    var s = entry ? (entry[state.lang] || entry.de) : key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace("{" + k + "}", vars[k]); });
    return s;
  }
  function L(v) { return v && typeof v === "object" && ("de" in v || "en" in v) ? (v[state.lang] || v.de) : v; }

  /* ---------- Field definitions (bilingual) ---------- */
  var FIELD_DEFS = {
    url: [{ k: "url", label: { de: "Website-URL", en: "Website URL" }, type: "url", ph: "https://musaj.com", val: "https://musaj.com" }],
    text: [{ k: "text", label: { de: "Dein Text", en: "Your text" }, type: "textarea", ph: { de: "Alles, was du möchtest…", en: "Anything you like…" }, val: { de: "Hallo von Musaj 👋", en: "Hello from Musaj 👋" } }],
    email: [
      { k: "to", label: { de: "E-Mail-Adresse", en: "Email address" }, type: "email", ph: "hello@musaj.com" },
      { k: "subject", label: { de: "Betreff (optional)", en: "Subject (optional)" }, type: "text", ph: { de: "Hallo", en: "Hi there" } },
      { k: "body", label: { de: "Nachricht (optional)", en: "Message (optional)" }, type: "textarea", ph: { de: "Deine Nachricht…", en: "Your message…" } }
    ],
    phone: [{ k: "phone", label: { de: "Telefonnummer", en: "Phone number" }, type: "tel", ph: "+41 79 123 45 67" }],
    sms: [
      { k: "phone", label: { de: "Telefonnummer", en: "Phone number" }, type: "tel", ph: "+41 79 123 45 67" },
      { k: "msg", label: { de: "Nachricht (optional)", en: "Message (optional)" }, type: "textarea", ph: { de: "Deine Nachricht…", en: "Your message…" } }
    ],
    whatsapp: [
      { k: "phone", label: { de: "WhatsApp-Nummer (mit Ländercode)", en: "WhatsApp number (with country code)" }, type: "tel", ph: "41791234567" },
      { k: "msg", label: { de: "Vorausgefüllte Nachricht (optional)", en: "Pre-filled message (optional)" }, type: "textarea", ph: { de: "Hallo!", en: "Hi!" } }
    ],
    wifi: [
      { k: "ssid", label: { de: "Netzwerkname (SSID)", en: "Network name (SSID)" }, type: "text", ph: "Musaj-Guest" },
      { k: "pass", label: { de: "Passwort", en: "Password" }, type: "text", ph: "••••••••" },
      { k: "enc", label: { de: "Sicherheit", en: "Security" }, type: "select", options: [["WPA", "WPA/WPA2"], ["WEP", "WEP"], ["nopass", { de: "Keine", en: "None" }]] }
    ],
    vcard: [
      { k: "name", label: { de: "Vollständiger Name", en: "Full name" }, type: "text", ph: "Jane Doe" },
      { k: "org", label: { de: "Firma", en: "Company" }, type: "text", ph: "Musaj GmbH" },
      { k: "title", label: { de: "Position", en: "Job title" }, type: "text", ph: { de: "Designerin", en: "Designer" } },
      { k: "phone", label: { de: "Telefon", en: "Phone" }, type: "tel", ph: "+41 79 123 45 67" },
      { k: "email", label: { de: "E-Mail", en: "Email" }, type: "email", ph: "jane@musaj.com" },
      { k: "url", label: { de: "Website", en: "Website" }, type: "url", ph: "https://musaj.com" }
    ],
    geo: [
      { k: "lat", label: { de: "Breitengrad", en: "Latitude" }, type: "text", ph: "47.3769" },
      { k: "lng", label: { de: "Längengrad", en: "Longitude" }, type: "text", ph: "8.5417" }
    ]
  };

  /* ---------- Payload builders ---------- */
  function esc(v) { return String(v || "").replace(/([\\;,:])/g, "\\$1"); }
  function firstLine(text) {
    var ls = String(text || "").split("\n").map(function (s) { return s.trim(); }).filter(Boolean);
    return ls[0] || "";
  }

  function buildPayload() {
    var d = state.data;
    switch (state.type) {
      case "url": return d.url || "";
      case "text": return d.text || "";
      case "batch": return d.first || "";
      case "email":
        var q = [];
        if (d.subject) q.push("subject=" + encodeURIComponent(d.subject));
        if (d.body) q.push("body=" + encodeURIComponent(d.body));
        return "mailto:" + (d.to || "") + (q.length ? "?" + q.join("&") : "");
      case "phone": return "tel:" + (d.phone || "");
      case "sms": return "SMSTO:" + (d.phone || "") + ":" + (d.msg || "");
      case "whatsapp":
        var num = String(d.phone || "").replace(/[^\d]/g, "");
        return "https://wa.me/" + num + (d.msg ? "?text=" + encodeURIComponent(d.msg) : "");
      case "wifi":
        var enc = d.enc || "WPA";
        if (enc === "nopass") return "WIFI:T:nopass;S:" + esc(d.ssid) + ";;";
        return "WIFI:T:" + enc + ";S:" + esc(d.ssid) + ";P:" + esc(d.pass) + ";;";
      case "vcard":
        return [
          "BEGIN:VCARD", "VERSION:3.0",
          "N:" + (d.name || ""),
          "FN:" + (d.name || ""),
          d.org ? "ORG:" + d.org : "",
          d.title ? "TITLE:" + d.title : "",
          d.phone ? "TEL;TYPE=CELL:" + d.phone : "",
          d.email ? "EMAIL:" + d.email : "",
          d.url ? "URL:" + d.url : "",
          "END:VCARD"
        ].filter(Boolean).join("\n");
      case "geo": return "geo:" + (d.lat || "0") + "," + (d.lng || "0");
      default: return "";
    }
  }

  /* ---------- Render fields for current type ---------- */
  function renderFields() {
    var wrap = $("#fields");
    wrap.innerHTML = "";
    state.data = {};

    if (state.type === "batch") {
      var lab = document.createElement("label");
      lab.className = "field";
      var span = document.createElement("span");
      span.textContent = t("batch.inputLabel");
      var ta = document.createElement("textarea");
      ta.id = "batchInput";
      ta.rows = 6;
      ta.placeholder = t("batch.placeholder");
      ta.value = "https://musaj.com\nhttps://musaj.com/kontakt\nhello@musaj.com";
      ta.addEventListener("input", function () {
        state.data = { first: firstLine(ta.value) };
        update();
      });
      lab.appendChild(span); lab.appendChild(ta); wrap.appendChild(lab);
      state.data = { first: firstLine(ta.value) };
      updateBatchVisibility();
      buildBatch();
      return;
    }

    updateBatchVisibility();
    FIELD_DEFS[state.type].forEach(function (f) {
      var lab = document.createElement("label");
      lab.className = "field";
      var span = document.createElement("span");
      span.textContent = L(f.label);
      lab.appendChild(span);

      var input;
      if (f.type === "textarea") {
        input = document.createElement("textarea");
      } else if (f.type === "select") {
        input = document.createElement("select");
        f.options.forEach(function (o) {
          var op = document.createElement("option");
          op.value = o[0]; op.textContent = L(o[1]);
          input.appendChild(op);
        });
      } else {
        input = document.createElement("input");
        input.type = f.type;
      }
      if (f.ph) input.placeholder = L(f.ph);
      if (f.val) { input.value = L(f.val); state.data[f.k] = L(f.val); }
      if (f.type === "select") state.data[f.k] = f.options[0][0];

      input.addEventListener("input", function () {
        state.data[f.k] = input.value;
        update();
      });
      lab.appendChild(input);
      wrap.appendChild(lab);
    });
  }

  /* ---------- QR options ---------- */
  function dotsColorOption() {
    if ($("#useGradient").checked) {
      return {
        gradient: {
          type: "linear", rotation: 0.78,
          colorStops: [
            { offset: 0, color: $("#dotsColor").value },
            { offset: 1, color: $("#dotsColor2").value }
          ]
        }
      };
    }
    return { color: $("#dotsColor").value };
  }

  function currentOptions() {
    var size = parseInt($("#size").value, 10);
    var transparent = $("#transparent").checked;
    var opts = {
      width: size, height: size,
      type: "canvas",
      data: buildPayload() || " ",
      margin: 12,
      qrOptions: { errorCorrectionLevel: $("#ecLevel").value },
      dotsOptions: Object.assign({ type: $("#dotsType").value }, dotsColorOption()),
      cornersSquareOptions: { type: $("#cornerType").value, color: $("#cornersColor").value },
      cornersDotOptions: { color: $("#cornersColor").value },
      backgroundOptions: { color: transparent ? "rgba(0,0,0,0)" : $("#bgColor").value },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 6,
        imageSize: parseFloat($("#logoSize").value),
        hideBackgroundDots: $("#hideBgDots").checked
      }
    };
    if (state.logo) opts.image = state.logo;
    return opts;
  }

  /* ---------- QR instance ---------- */
  var qr = new QRCodeStyling(currentOptions());
  qr.append($("#qr"));

  var updTimer;
  function update() {
    clearTimeout(updTimer);
    updTimer = setTimeout(function () {
      qr.update(currentOptions());
      updateFrameUI();
      saveLast();
      if (state.type === "batch") scheduleBatch();
    }, 60);
  }

  /* ---------- Frame (call-to-action) ---------- */
  function readableText(hex) {
    var c = String(hex || "#000").replace("#", "");
    if (c.length === 3) c = c.split("").map(function (x) { return x + x; }).join("");
    var r = parseInt(c.substr(0, 2), 16), g = parseInt(c.substr(2, 2), 16), b = parseInt(c.substr(4, 2), 16);
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.62 ? "#111111" : "#ffffff";
  }

  function updateFrameUI() {
    var on = $("#useFrame").checked;
    var frame = $("#qrFrame");
    frame.classList.toggle("on", on);
    var fc = $("#frameColor").value;
    frame.style.background = on ? fc : "transparent";
    var cta = $("#qrCta");
    cta.textContent = $("#frameText").value;
    cta.style.color = readableText(fc);
    layoutFrame();
    setTimeout(layoutFrame, 150);
  }

  function layoutFrame() {
    var node = $("#qr").firstChild;
    if (!node) return;
    var w = node.getBoundingClientRect ? node.getBoundingClientRect().width : 0;
    if (!w) return;
    $("#qrCta").style.fontSize = Math.max(11, Math.round(w * 0.085)) + "px";
  }

  /* ---------- Export helpers ---------- */
  function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
  function escapeXml(s) {
    return String(s || "").replace(/[<>&'"]/g, function (c) {
      return ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c];
    });
  }
  function saveBlob(blob, name) {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 150);
  }
  function frameMetrics(size) {
    return { B: Math.round(size * 0.06), H: Math.round(size * 0.17), R: Math.round(size * 0.08) };
  }
  function framedCanvas(inst, cb) {
    inst.getRawData("png").then(function (blob) {
      var url = URL.createObjectURL(blob);
      var img = new Image();
      img.onload = function () {
        var size = img.width;
        var m = frameMetrics(size);
        var W = size + 2 * m.B, Ht = size + 2 * m.B + m.H;
        var cv = document.createElement("canvas");
        cv.width = W; cv.height = Ht;
        var ctx = cv.getContext("2d");
        var fc = $("#frameColor").value;
        roundRect(ctx, 0, 0, W, Ht, m.R); ctx.fillStyle = fc; ctx.fill();
        ctx.drawImage(img, m.B, m.B, size, size);
        ctx.fillStyle = readableText(fc);
        ctx.font = "bold " + Math.round(m.H * 0.42) + "px 'Segoe UI', Arial, sans-serif";
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.fillText($("#frameText").value, W / 2, size + 2 * m.B + m.H / 2);
        URL.revokeObjectURL(url);
        cb(cv);
      };
      img.src = url;
    });
  }
  function framedSVG(inst, cb) {
    inst.getRawData("svg").then(function (blob) {
      blob.text().then(function (svg) {
        var size = parseInt($("#size").value, 10);
        var m = frameMetrics(size);
        var W = size + 2 * m.B, Ht = size + 2 * m.B + m.H;
        var fc = $("#frameColor").value, tc = readableText(fc);
        var inner;
        try {
          var doc = new DOMParser().parseFromString(svg, "image/svg+xml");
          var el = doc.documentElement;
          el.setAttribute("x", m.B); el.setAttribute("y", m.B);
          el.setAttribute("width", size); el.setAttribute("height", size);
          inner = new XMLSerializer().serializeToString(el);
        } catch (e) { inner = svg; }
        var out = '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + Ht + '" viewBox="0 0 ' + W + ' ' + Ht + '">' +
          '<rect width="' + W + '" height="' + Ht + '" rx="' + m.R + '" fill="' + fc + '"/>' +
          inner +
          '<text x="' + (W / 2) + '" y="' + (size + 2 * m.B + m.H / 2) + '" text-anchor="middle" dominant-baseline="central" font-family="Segoe UI, Arial, sans-serif" font-weight="700" font-size="' + Math.round(m.H * 0.42) + '" fill="' + tc + '">' + escapeXml($("#frameText").value) + "</text></svg>";
        cb(out);
      });
    });
  }

  function downloadCurrent(ext) {
    if (!$("#useFrame").checked) {
      qr.download({ name: "musaj-qr-code", extension: ext });
    } else if (ext === "svg") {
      framedSVG(qr, function (svg) { saveBlob(new Blob([svg], { type: "image/svg+xml" }), "musaj-qr-code.svg"); });
    } else {
      framedCanvas(qr, function (cv) {
        cv.toBlob(function (b) { saveBlob(b, "musaj-qr-code." + ext); }, ext === "jpeg" ? "image/jpeg" : "image/png", 0.92);
      });
    }
    toast(t("toast.downloaded", { x: ext.toUpperCase() }));
  }

  /* ---------- Batch ---------- */
  var BATCH_MAX = 60;
  function fileName(line) {
    var n = String(line).replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").slice(0, 40);
    return "qr-" + (n || "code");
  }
  function updateBatchVisibility() {
    $("#batchPanel").hidden = state.type !== "batch";
  }
  var batchTimer;
  function scheduleBatch() {
    clearTimeout(batchTimer);
    batchTimer = setTimeout(buildBatch, 450);
  }
  function getBatchLines() {
    var ta = $("#batchInput");
    if (!ta) return [];
    return ta.value.split("\n").map(function (s) { return s.trim(); }).filter(Boolean);
  }
  function buildBatch() {
    var grid = $("#batchGrid");
    if (!grid) return;
    var lines = getBatchLines();
    var note = $("#batchNote");
    var total = lines.length;
    if (total > BATCH_MAX) { lines = lines.slice(0, BATCH_MAX); note.textContent = t("batch.capped", { n: BATCH_MAX, total: total }); }
    else if (total === 0) { note.textContent = t("batch.empty"); }
    else { note.textContent = t("batch.count", { n: total }); }
    state.batchLines = lines;
    grid.innerHTML = "";
    lines.forEach(function (line) {
      var cell = document.createElement("div");
      cell.className = "batch-cell";
      var holder = document.createElement("div");
      holder.className = "batch-qr";
      var inst = new QRCodeStyling(Object.assign(currentOptions(), { data: line, width: 220, height: 220 }));
      inst.append(holder);
      var lab = document.createElement("div");
      lab.className = "batch-label";
      lab.textContent = line;
      var dl = document.createElement("button");
      dl.className = "btn ghost tiny-btn";
      dl.textContent = "⬇ PNG";
      dl.addEventListener("click", function () { downloadOne(line, "png"); });
      cell.appendChild(holder); cell.appendChild(lab); cell.appendChild(dl);
      grid.appendChild(cell);
    });
  }
  function downloadOne(line, ext, done) {
    var inst = new QRCodeStyling(Object.assign(currentOptions(), { data: line }));
    if ($("#useFrame").checked) {
      framedCanvas(inst, function (cv) {
        cv.toBlob(function (b) { saveBlob(b, fileName(line) + "." + ext); if (done) done(); }, ext === "jpeg" ? "image/jpeg" : "image/png", 0.92);
      });
    } else {
      inst.download({ name: fileName(line), extension: ext });
      if (done) setTimeout(done, 50);
    }
  }
  function downloadAllBatch() {
    var lines = state.batchLines || [];
    if (!lines.length) return;
    var i = 0;
    (function next() {
      if (i >= lines.length) { toast(t("batch.done", { n: lines.length })); return; }
      downloadOne(lines[i], "png");
      i++;
      setTimeout(next, 450);
    })();
  }

  /* ---------- Presets ---------- */
  var PRESETS = [
    { name: "Classic", dots: "square", corner: "square", c: "#1a1a1a", cc: "#1a1a1a", grad: false, bg: "#ffffff" },
    { name: "Rounded", dots: "rounded", corner: "extra-rounded", c: "#2b2540", cc: "#6d5efc", grad: false, bg: "#ffffff" },
    { name: "Dots", dots: "dots", corner: "dot", c: "#0f766e", cc: "#0f766e", grad: false, bg: "#ffffff" },
    { name: "Ocean", dots: "rounded", corner: "extra-rounded", c: "#7b6cff", c2: "#41c6ff", cc: "#41c6ff", grad: true, bg: "#ffffff" },
    { name: "Sunset", dots: "classy-rounded", corner: "extra-rounded", c: "#ff6a3d", c2: "#ff2e93", cc: "#ff2e93", grad: true, bg: "#fff7f2" },
    { name: "Forest", dots: "classy", corner: "extra-rounded", c: "#16a34a", c2: "#065f46", cc: "#065f46", grad: true, bg: "#ffffff" },
    { name: "Mono", dots: "extra-rounded", corner: "extra-rounded", c: "#111111", cc: "#111111", grad: false, bg: "#ffffff" }
  ];

  function presetSwatch(p) {
    var col = p.grad ? "url(#g" + p.name + ")" : p.c;
    return '<svg viewBox="0 0 40 40">' +
      (p.grad ? '<defs><linearGradient id="g' + p.name + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + p.c + '"/><stop offset="1" stop-color="' + p.c2 + '"/></linearGradient></defs>' : "") +
      '<rect width="40" height="40" fill="' + p.bg + '"/>' +
      '<g fill="' + col + '">' +
      '<rect x="6" y="6" width="8" height="8" rx="2"/>' +
      '<rect x="26" y="6" width="8" height="8" rx="2"/>' +
      '<rect x="6" y="26" width="8" height="8" rx="2"/>' +
      '<rect x="18" y="18" width="4" height="4" rx="1"/>' +
      '<rect x="26" y="22" width="4" height="4" rx="1"/>' +
      '<rect x="22" y="28" width="4" height="4" rx="1"/>' +
      '<rect x="28" y="28" width="6" height="6" rx="1.5"/>' +
      "</g></svg>";
  }

  function buildPresets() {
    var box = $("#presets");
    box.innerHTML = "";
    PRESETS.forEach(function (p, i) {
      var b = document.createElement("button");
      b.className = "preset" + (i === 1 ? " is-active" : "");
      b.title = t("preset." + p.name);
      b.setAttribute("aria-label", t("preset." + p.name));
      b.innerHTML = presetSwatch(p);
      b.addEventListener("click", function () {
        $$(".preset").forEach(function (x) { x.classList.remove("is-active"); });
        b.classList.add("is-active");
        applyPreset(p);
      });
      box.appendChild(b);
    });
  }

  function applyPreset(p) {
    $("#dotsType").value = p.dots;
    $("#cornerType").value = p.corner;
    $("#dotsColor").value = p.c;
    $("#cornersColor").value = p.cc;
    $("#useGradient").checked = !!p.grad;
    if (p.c2) $("#dotsColor2").value = p.c2;
    $("#bgColor").value = p.bg;
    $("#transparent").checked = false;
    toggleGradient();
    update();
  }

  /* ---------- Save & reuse ---------- */
  var STYLE_VALS = ["dotsType", "cornerType", "dotsColor", "dotsColor2", "cornersColor", "bgColor", "ecLevel", "size", "logoSize", "frameText", "frameColor"];
  var STYLE_CHECKS = ["useGradient", "transparent", "hideBgDots", "useFrame"];

  function getStyle() {
    var s = {};
    STYLE_VALS.forEach(function (id) { s[id] = $("#" + id).value; });
    STYLE_CHECKS.forEach(function (id) { s[id] = $("#" + id).checked; });
    s.logo = state.logo || null;
    return s;
  }
  function applyStyle(s) {
    if (!s) return;
    STYLE_VALS.forEach(function (id) { if (id in s) $("#" + id).value = s[id]; });
    STYLE_CHECKS.forEach(function (id) { if (id in s) $("#" + id).checked = !!s[id]; });
    state.logo = s.logo || null;
    $("#removeLogo").hidden = !state.logo;
    $("#sizeVal").textContent = $("#size").value;
    $("#logoSizeVal").textContent = parseFloat($("#logoSize").value).toFixed(2);
    toggleGradient();
    update();
  }

  var lastTimer;
  function saveLast() {
    clearTimeout(lastTimer);
    lastTimer = setTimeout(function () { lsSet("qrLastStyle", getStyle()); }, 500);
  }

  function getSlots() { return lsGet("qrSlots") || []; }
  function renderSlots() {
    var box = $("#slots");
    box.innerHTML = "";
    var slots = getSlots();
    if (!slots.length) {
      var e = document.createElement("p");
      e.className = "tiny muted"; e.textContent = t("save.empty");
      box.appendChild(e); return;
    }
    slots.forEach(function (sl, idx) {
      var chip = document.createElement("div");
      chip.className = "slot-chip";
      var name = document.createElement("button");
      name.className = "slot-name"; name.textContent = sl.name;
      name.addEventListener("click", function () { applyStyle(sl.style); toast(t("save.applied")); });
      var del = document.createElement("button");
      del.className = "slot-del"; del.textContent = "×"; del.title = t("save.delete");
      del.addEventListener("click", function () {
        var s = getSlots(); s.splice(idx, 1); lsSet("qrSlots", s); renderSlots(); toast(t("save.deleted"));
      });
      chip.appendChild(name); chip.appendChild(del); box.appendChild(chip);
    });
  }
  function saveSlot() {
    var name = ($("#slotName").value || "").trim() || ("Design " + (getSlots().length + 1));
    var s = getSlots(); s.push({ name: name, style: getStyle() }); lsSet("qrSlots", s);
    $("#slotName").value = ""; renderSlots(); toast(t("save.saved"));
  }

  /* ---------- i18n application ---------- */
  function applyI18n() {
    document.documentElement.lang = state.lang;
    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
    $$("[data-i18n-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-i18n-ph")); });
    $$(".lang-btn").forEach(function (b) { b.classList.toggle("is-active", b.dataset.lang === state.lang); });
  }

  function setLang(lang) {
    state.lang = lang;
    try { localStorage.setItem("qrLang", lang); } catch (e) {}
    // swap the CTA default text if the user hasn't customised it
    var defaults = [I18N["fr.defaultText"].de, I18N["fr.defaultText"].en];
    if (defaults.indexOf($("#frameText").value) >= 0) $("#frameText").value = t("fr.defaultText");
    applyI18n();
    buildPresets();
    renderFields();
    renderSlots();
    update();
  }

  /* ---------- UI wiring ---------- */
  function toggleGradient() {
    $("#gradient2Wrap").hidden = !$("#useGradient").checked;
  }

  function wire() {
    $$(".lang-btn").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.dataset.lang); });
    });

    $$(".tab").forEach(function (tb) {
      tb.addEventListener("click", function () {
        $$(".tab").forEach(function (x) { x.classList.remove("is-active"); });
        tb.classList.add("is-active");
        state.type = tb.dataset.type;
        renderFields();
        update();
      });
    });

    ["dotsType", "cornerType", "dotsColor", "dotsColor2", "cornersColor",
      "bgColor", "transparent", "ecLevel", "useGradient", "logoSize", "hideBgDots"]
      .forEach(function (id) { $("#" + id).addEventListener("input", update); });

    $("#useGradient").addEventListener("change", function () { toggleGradient(); update(); });

    // frame controls (no QR re-render needed, just overlay + persist)
    $("#useFrame").addEventListener("change", function () { updateFrameUI(); saveLast(); });
    $("#frameText").addEventListener("input", function () { updateFrameUI(); saveLast(); });
    $("#frameColor").addEventListener("input", function () { updateFrameUI(); saveLast(); });

    $("#size").addEventListener("input", function () {
      $("#sizeVal").textContent = $("#size").value;
      update();
    });
    $("#logoSize").addEventListener("input", function () {
      $("#logoSizeVal").textContent = parseFloat($("#logoSize").value).toFixed(2);
    });

    $("#logoInput").addEventListener("change", function (e) {
      var file = e.target.files[0];
      if (!file) return;
      var reader = new FileReader();
      reader.onload = function (ev) {
        state.logo = ev.target.result;
        $("#removeLogo").hidden = false;
        if ($("#ecLevel").value === "L" || $("#ecLevel").value === "M") $("#ecLevel").value = "H";
        update();
      };
      reader.readAsDataURL(file);
    });
    $("#removeLogo").addEventListener("click", function () {
      state.logo = null;
      $("#logoInput").value = "";
      $("#removeLogo").hidden = true;
      update();
    });

    $$("[data-dl]").forEach(function (b) {
      b.addEventListener("click", function () { downloadCurrent(b.dataset.dl); });
    });
    $("#copyBtn").addEventListener("click", copyImage);

    // batch
    $("#batchBuild").addEventListener("click", buildBatch);
    $("#batchDownload").addEventListener("click", downloadAllBatch);

    // save & reuse
    $("#saveSlot").addEventListener("click", saveSlot);
    $("#slotName").addEventListener("keydown", function (e) { if (e.key === "Enter") saveSlot(); });

    window.addEventListener("resize", layoutFrame);
  }

  function copyImage() {
    if (!navigator.clipboard || !window.ClipboardItem) { toast(t("toast.copyUnsupported")); return; }
    var put = function (blob) {
      var item = new window.ClipboardItem({ "image/png": blob });
      navigator.clipboard.write([item]).then(
        function () { toast(t("toast.copied")); },
        function () { toast(t("toast.copyBlocked")); }
      );
    };
    if ($("#useFrame").checked) {
      framedCanvas(qr, function (cv) { cv.toBlob(put, "image/png"); });
    } else {
      qr.getRawData("png").then(put);
    }
  }

  /* ---------- Toast ---------- */
  var toastTimer;
  function toast(msg) {
    var el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2200);
  }

  /* ---------- Init ---------- */
  applyI18n();
  buildPresets();
  renderFields();
  renderSlots();
  wire();

  // restore last-used design (if any), else set CTA default + first render
  var last = lsGet("qrLastStyle");
  if (last) {
    applyStyle(last);
  } else {
    $("#frameText").value = t("fr.defaultText");
    update();
  }
})();

# 💡 Light-On Játék

Ez a projekt egy egyszerű **"Light-On" logikai játék**, amely JavaScript nyelven készült. A játék célja, hogy az összes lámpa világítson a játékmezőn. A felhasználó minden kattintásával nemcsak a kiválasztott lámpa állapota változik meg, hanem a vele szomszédosaké is. A játék MVC (Model-View-Controller) és OOP (Objektumorientált programozás) elvei szerint lett felépítve.

## 📁 Mappastruktúra és MVC Felosztás

| Mappa Név | Modell Fájlok         | View Fájlok           | Controller Fájlok       |
|-----------|------------------------|------------------------|--------------------------|
| `models/` | `LampaModell.js`       |                        |                          |
| `models/` | `LampakModell.js`      |                        |                          |
| `views/`  |                        | `LampaView.js`         |                          |
| `views/`  |                        | `LampakView.js`        |                          |
| `views/`  |                        | `JatekterView.js`      |                          |
| `controllers/` |                |                        | `JatekterController.js`  |

---

## 🧠 Modell (Model)

### `LampaModell.js`

**Adattagok:**
- `lampaSzine`
- `lampaAllapota`
- `szuloElem`

**Tagfüggvények:**
- `constructor()`
- `getSzin()`
- `getAllapot()`

---

### `LampakModell.js`

**Adattagok:**
- `lampakLista[]`
- `nyeroKombinaciok[]`

**Tagfüggvények:**
- `constructor()`
- `lampakListaFeltolt()`

---

## 👁️ Nézet (View)

### `LampaView.js`

**Adattagok:**
- `szuloElem`

**Tagfüggvények:**
- `constructor()`
- `esemenyKezelo()`

---

### `LampakView.js`

**Adattagok:**
- `szuloElem`

**Tagfüggvények:**
- `lampakMegjelenit()`

---

### `JatekterView.js`

**Tagfüggvények:**
- `jatekterMegjelenit()`

---

## 🕹️ Vezérlő (Controller)

### `JatekterController.js`

**Tagfüggvények:**
- `lampakKapcsolas()`
- `nyertE()`

---
## 📁 Projekt Struktúra

```plaintext
📁 project-root/
│
├── index.html              # Az alkalmazás belépési pontja
├── main.js                 # Az alkalmazás inicializálása innen indul
├── stilus.css              # Alkalmazás stíluslapja (CSS)
│
├── models/                 # Az adatmodell réteg (Model - M az MVC-ből)
│   ├── LampaModell.js      # Egyetlen lámpa modellje
│   └── LampakModell.js     # A lámpák listájának modellje
│
├── views/                  # A felhasználói felület (View - V az MVC-ből)
│   ├── LampaView.js        # Egy lámpa megjelenítése
│   ├── LampakView.js       # Lámpák megjelenítése
│   └── JatekterView.js     # Teljes játéktér megjelenítése
│
└── controllers/            # Az irányító réteg (Controller - C az MVC-ből)
    └── JatekterController.js  # A játék logikáját kezelő vezérlő


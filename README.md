# 💡 Light-On Játék

Ez a projekt egy egyszerű **"Light-On" logikai játék**, amely JavaScript nyelven készült. A játék célja, hogy az összes lámpa világítson a játékmezőn. A felhasználó minden kattintásával nemcsak a kiválasztott lámpa állapota változik meg, hanem a vele szomszédosaké is. A játék MVC (Model-View-Controller) és OOP (Objektumorientált programozás) elvei szerint lett felépítve.

---

## 📁 Mappastruktúra és MVC Felosztás

| Mappa Név      | Modell Fájlok      | View Fájlok       | Controller Fájlok       |
|----------------|------------------|-----------------|------------------------|
| `models/`      | `LampaModell.js` |                 |                        |
| `models/`      | `LampakModell.js`|                 |                        |
| `views/`       |                  | `LampaView.js`  |                        |
| `views/`       |                  | `LampakView.js` |                        |
| `views/`       |                  | `JatekterView.js` |                      |
| `controllers/` |                  |                 | `JatekterController.js` |

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
project-root/
├── main.js                  # Az alkalmazás belépési pontja, inicializálja a játékot
├── index.html               # HTML struktúra
├── controller/              # Kontroller réteg (C az MVC-ből)
│   └── JatekterController.js
├── modell/                  # Modell réteg (M az MVC-ből)
│   └── LampakModell.js
├── view/                    # Nézet réteg (V az MVC-ből)
│   ├── LampakView.js
│   └── JatekterView.js
└── stilus.css               # Letisztult, reszponzív stílus
# Változtatások

Ez a dokumentáció tartalmazza a **Light-On játék** legújabb változtatásait, a fájlstruktúrát és a frissített játékmenetet.

---

## 🆕 Új változtatások

### Háttér
- Árnyalatos barna-narancs árnyalatok (`linear-gradient`)
- Nem ismétlődő (`background-repeat: no-repeat`)
- Fix pozíció görgetéskor (`background-attachment: fixed`)

### Játéktér
- Teljesen középre rendezve
- Fehér rész csak 2 cm körülveszi a lámpákat
- Reszponzív, mobilbarát kialakítás

### Lámpák
- Kör alakúak (`border-radius: 50%`)
- Szép hover és glow effekt, világítás ki/bekapcsolás
- Reszponzív méretezés kisebb képernyőre

### Fejléc és feladat
- Cím nagyobb (`font-size: 3em`)
- Feladat a fejlécben: *Kattints a lámpákra! A kiválasztott és a szomszédos lámpák átváltanak.*

### Újraindítás gomb
- „♻️ Új játék” gomb a 9 lámpa alatt
- Véletlenszerű új állapotot ad minden lámpának

### Footer
- A footer tartalmazza a nevet: **I. Bori**

---

## 📁 Projekt Fájl- és Mappastruktúra

```plaintext
project-root/
├── main.js                  # Az alkalmazás belépési pontja, inicializálja a játékot
├── index.html               # HTML struktúra
├── controller/              # Kontroller réteg (C az MVC-ből)
│   └── JatekterController.js
├── modell/                  # Modell réteg (M az MVC-ből)
│   └── LampakModell.js
├── view/                    # Nézet réteg (V az MVC-ből)
│   ├── LampakView.js
│   └── JatekterView.js
└── stilus.css               # Letisztult, reszponzív stílus

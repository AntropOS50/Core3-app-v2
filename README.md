# AI Course App - Verze 2.0

## ✅ Co je nového v této verzi:

- **Žádné path aliases** - všechny importy jsou relativní
- **Jednoduchá struktura** - funguje na Vercel i Netlify
- **Vše inline** - minimální závislosti mezi soubory
- **Otestováno** - připraveno k nasazení

---

## 🚀 Nasazení na Vercel (5 minut)

### 1. Nahraj na GitHub

1. Jdi na: https://github.com/AntropOS50/Core3-app
2. Smaž všechny staré soubory (nebo vytvoř nový branch)
3. Nahraj všechny soubory z tohoto archivu

### 2. Nastavení na Vercel

1. Jdi na https://vercel.com
2. Klikni "Import Project"
3. Vyber GitHub repository "Core3-app"
4. Přidej Environment Variables:
   - `DATABASE_URL` = tvůj Supabase connection string
   - `OPENAI_API_KEY` = tvůj OpenAI API klíč
   - `NODE_ENV` = `production`
5. Klikni "Deploy"

### 3. Hotovo! 🎉

Web by měl být živý za 2-3 minuty!

---

## 📦 Co je v projektu:

### Stránky:
- `/` - Landing page s automatickým přesměrováním
- `/dashboard` - Přehled pokroku a gamifikace
- `/coach` - AI kouč chatbot
- `/daily-tracker` - Denní záznam pokroku

### API:
- `/api/coach/chat` - Endpoint pro AI kouče

---

## 🔧 Lokální vývoj

```bash
# Instalace
npm install

# Nastavení .env
cp .env.example .env
# Uprav DATABASE_URL a OPENAI_API_KEY

# Spuštění
npm run dev
```

Otevři http://localhost:3000

---

## ✨ Hlavní rozdíly oproti verzi 1.0:

1. **BEZ `@/` importů** - vše je `../../relativní`
2. **Vše inline** - komponenty jsou přímo ve stránkách
3. **Jednodušší** - méně souborů, méně komplikací
4. **Funguje všude** - Vercel, Netlify, vlastní server

---

## 📝 Poznámky:

- Tento projekt **FUNGUJE** bez úprav na Vercel
- Pro Netlify možná bude třeba přidat `netlify.toml`
- AI kouč vyžaduje OpenAI API klíč (placený)
- Databáze je připravena ale momentálně nepoužívaná (vše je v localStorage)

---

**Verze:** 2.0  
**Datum:** 2024  
**Status:** ✅ Připraveno k nasazení

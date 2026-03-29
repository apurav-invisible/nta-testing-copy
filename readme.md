# NTA Testing Platform 🎯

A browser-based JEE Main mock test platform built with plain HTML, CSS, and JavaScript — with Supabase as backend for question management and admin panel.

## Features
- ⏱️ Countdown timer (3 hours)
- 📚 Subject-wise sections — Physics, Chemistry, Maths
- 🗂️ Question palette with color-coded status
- 🔖 Mark for Review functionality
- 📊 Result page with score & section-wise analysis
- ➕4 / ➖1 JEE marking scheme
- 🔐 Admin panel — add/delete questions, view logins
- ☁️ Supabase backend — real database, no server setup

## Project Structure
```
NTA TESTING/
├── index.html        # Main test interface
├── result.html       # Result & analysis page
├── admin.html        # Admin dashboard
├── login.html        # Admin login page
├── css/
│   └── style.css     # All styles
├── js/
│   ├── questions.js  # Local question bank (fallback)
│   ├── test.js       # Core test logic
│   ├── result.js     # Result calculation & rendering
│   ├── admin.js      # Admin panel logic
│   ├── login.js      # Auth logic
│   └── supa.js       # Supabase client & DB calls
├── .env              # Supabase keys (never commit this)
├── .gitignore        # Ignores .env
└── README.md
```

## How to Run
Just open `index.html` in any browser. No server needed for the test interface.

For admin panel, Supabase setup required (see below).

## Supabase Setup
1. Go to [supabase.com](https://supabase.com) and create a free project
2. Create a `questions` table with columns:
   - `id` (int, primary key)
   - `subject` (text)
   - `question` (text)
   - `options` (json)
   - `correct` (int)
3. Copy your project URL and anon key into `.env`

## Marking Scheme
| Status | Marks |
|---|---|
| Correct | +4 |
| Wrong | -1 |
| Unattempted | 0 |

## Build Roadmap
- [x] Project structure setup
- [x] Git & GitHub setup
- [ ] HTML layout (index.html)
- [ ] Question data structure (questions.js)
- [ ] Render questions dynamically (test.js)
- [ ] Timer, answer selection, palette logic
- [ ] Mark for Review
- [ ] Submit & result page
- [ ] Supabase connection (supa.js)
- [ ] Admin panel (admin.html + admin.js)
- [ ] Admin login (login.html + login.js)

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- [Supabase](https://supabase.com) (Backend & Auth)

---
Built as a learning project by [@apurav-invisible](https://github.com/apurav-invisible)

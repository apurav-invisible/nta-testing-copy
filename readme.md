# JEE Main Mock Test Platform 🎯

A browser-based JEE Main mock test platform built with plain HTML, CSS, and JavaScript — no frameworks, no dependencies.

## Features
- ⏱️ Countdown timer (3 hours)
- 📚 Subject-wise sections — Physics, Chemistry, Maths
- 🗂️ Question palette with color-coded status
- 🔖 Mark for Review functionality
- 📊 Result page with score & section-wise analysis
- ➕4 / ➖1 JEE marking scheme

## Project Structure
```
jee-mock-test/
├── index.html        # Main test interface
├── result.html       # Result & analysis page
├── css/
│   └── style.css     # All styles
├── js/
│   ├── questions.js  # Question bank data
│   ├── test.js       # Core test logic
│   └── result.js     # Result calculation & rendering
└── README.md
```

## How to Run
Just open `index.html` in any browser. No server needed.

## Marking Scheme
| Status | Marks |
|---|---|
| Correct | +4 |
| Wrong | -1 |
| Unattempted | 0 |

## Build Roadmap
- [x] Project setup
- [ ] HTML layout (header, question area, palette)
- [ ] Question data structure
- [ ] Render questions dynamically
- [ ] Answer selection & palette logic
- [ ] Timer
- [ ] Mark for Review
- [ ] Submit & result page

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

---
Built as a learning project.
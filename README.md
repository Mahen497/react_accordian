# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# React FAQ Accordion Component

This project is a simple **FAQ Accordion** built using **React**. It dynamically displays FAQ items, allowing users to expand and collapse sections. When one FAQ is opened, any previously opened FAQ automatically closes.

## 🛠️ Features

- Expand/Collapse functionality for FAQ items.
- Only **one** FAQ item stays open at a time.
- Dynamic FAQ list rendered from a JSON file.
- Styled with **CSS** for smooth transitions and a clean UI.

## 📂 Project Structure
```
root/
├── public/
├── src/
│   ├── API/
│   │    └── faq.json
│   ├── components/
│   │    ├── Accordian.jsx
│   │    └── FaqLi.jsx
│   ├── App.css
│   └── App.jsx
├── .gitignore
└── README.md
```

## 🚀 Installation & Setup

1. **Clone the repository:**
```bash
   git clone https://github.com/yourusername/react-faq-accordion.git
```

2. **Navigate to the project folder:**
```bash
   cd react-faq-accordion
```

3. **Install dependencies:**
```bash
   npm install
```

4. **Start the development server:**
```bash
   npm run dev
```

5. Open your browser and go to:
```
http://localhost:5173
```

## 📊 FAQ Data Structure (faq.json)

Ensure that your `faq.json` file inside the `/API` folder follows this format:
```json
[
  {
    "id": 1,
    "question": "What is React?",
    "answer": "React is a JavaScript library for building user interfaces."
  },
  {
    "id": 2,
    "question": "What is a component?",
    "answer": "Components let you split the UI into independent, reusable pieces."
  }
]
```

## 📘 How the Code Works

1. **State Management:**
   - `activeId`: Stores the id of the currently open FAQ.
2. **Accordion Behavior:**
   - When a user clicks an FAQ item, it opens, and the others close.
3. **Dynamic FAQ Rendering:**
   - Data is fetched from `faq.json` and displayed using `map()`.

## 📄 Usage

1. Add more FAQs by updating the `faq.json` file.
2. Customize styles in the `App.css` file.

## 🧑‍💻 Contributing

Feel free to contribute by forking the repository and submitting a pull request.

## 📜 License

This project is licensed under the **MIT License**.

---

**Made with ❤️ using React.**


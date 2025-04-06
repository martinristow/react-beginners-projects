# React Accordion Component

A simple and reusable Accordion component built with React. This project dynamically renders accordion items using mapped data and provides smooth toggle functionality with minimal styling.

## 📸 Preview

Each accordion item displays a title, and clicking on it toggles the visibility of its content. A `+` or `-` icon is displayed based on its open or closed state.

## 🚀 Features

- Fully reusable Accordion component
- Toggle functionality using React's `useState`
- Dynamic rendering from an external data file
- Clean and minimal styling with external CSS
- Icons for expand/collapse states

## 🧩 Components

### `Accordion.jsx`

- Accepts `title`, `content`, and `index` as props
- Toggles content visibility on click
- Displays `+` when collapsed and `-` when expanded

### `App.jsx`

- Imports accordion data from `content.js`
- Maps over the data to render multiple accordion items

### `content.js`

- Contains an array of objects with `title` and `content` properties
- Used to populate the accordion dynamically

## 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/martinristow/react-beginners-projects/tree/main/Accordions

2. Install dependencies:
    ```bash
   npm install

3. Start the development server:
    ```bash
   npm run dev

## 📁 Project Structure
    src
    ├── Components
    │   └── Accordion.jsx
    ├── Utils
    │   └── content.js
    ├── style.css
    ├── App.jsx
    ├── main.jsx

## 💡 Future Improvements
- Add animation to the accordion transitions
- Make it accessible with keyboard support
- Add unit tests for component behavior
# 🍽️ Meals API App

A simple React project that fetches and displays seafood meals from [TheMealDB API](https://www.themealdb.com/). This
app demonstrates how to work with external APIs, use React hooks like `useState` and `useEffect`, and build a visually
clean card layout using CSS.

---

## 🚀 Features

- ✅ Fetch meals from TheMealDB API (Seafood category)
- 🖼️ Display meal name, image, and ID
- 💅 Clean and responsive card-based UI
- ⚡ Uses Axios for API calls

---

## 🛠️ Tech Stack

- **React**
- **Axios**
- **JavaScript (ES6+)**
- **CSS**

---

## 📦 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/martinristow/react-beginners-projects/tree/main/Meals-API

2. **Install dependencies**
    ```bash
   npm install

3. **Start the development server**
    ```bash
   http://localhost:5173/

## 📃 API Reference

1. **Endpoint Used:**

   ```bash
   https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

- **Returns: A list of meals in the Seafood category with:**
- *idMeal*
- *strMeal (meal name)*
- *strMealThumb (thumbnail image URL)*
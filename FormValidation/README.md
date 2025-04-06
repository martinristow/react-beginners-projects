# 🧾 React Form Validation

A simple and responsive form built with React that includes dynamic validation for username, email, password, and password confirmation. This project demonstrates the use of controlled components, form validation, and real-time user feedback with colored borders and error messages.

## 🚀 Features

- Real-time form validation on submit
- Input feedback using border colors (green/red)
- Displays specific error messages for each field
- Validates:
    - Username (minimum 8 characters)
    - Email (`@gmail.com` or `@yahoo.com`)
    - Password (minimum 8 characters)
    - Confirm password (must match password)
- Clean, mobile-friendly UI using CSS

## 📸 Preview

> Example:
> - ✅ Valid input: green border
> - ❌ Invalid input: red border + error message

## 🧩 Components

### `Form.jsx`

- Uses React hooks (`useState`) to manage form data and error states
- Handles validation logic in the `validate` function
- Applies conditional styling based on input validity

## 📁 Project Structure
    src 
    ├── Components 
    │ └── Form.jsx 
    ├── style.css 
    ├── App.jsx 
    ├── main.jsx


## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/martinristow/react-beginners-projects/tree/main/FormValidation
    
2. Install dependencies:
    ```bash
   npm install

3. Run the development server:
    ```bash
   npm run dev
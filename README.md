# 🍽 Recipe Book App (React + Vite)

A simple Recipe Book application built using **React (Vite)**, **Redux**, **React Router**, **Bootstrap**, and **JSON Server**.
This project demonstrates CRUD operations, authentication, sorting, and filtering.

---

## 🚀 Features

* 🔐 User Authentication (Login / Logout)
* 📋 View all recipes
* ➕ Add new recipe
* ✏️ Update existing recipe
* ❌ Delete recipe
* 🔍 Search recipes
* 🎯 Filter by category
* 📊 Sort by name/date
* 🔒 Protected routes using PrivateRoute
* 🎨 Responsive UI using Bootstrap

---

## 🛠 Tech Stack

* React (Vite)
* Redux + Redux Thunk
* React Router DOM
* Bootstrap
* JSON Server (Mock Backend)

---

## 📁 Folder Structure

```
src/
 ┣ components/
 ┃ ┣ Navbar.jsx
 ┃ ┣ RecipeList.jsx
 ┃ ┣ RecipeForm.jsx
 ┃ ┣ RecipeDetails.jsx
 ┃ ┣ PrivateRoute.jsx
 ┣ redux/
 ┃ ┣ actions.js
 ┃ ┣ reducers.js
 ┃ ┣ store.js
 ┣ pages/
 ┃ ┣ Login.jsx
 ┣ App.jsx
 ┣ main.jsx
db.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Project

```
git clone <your-repo-link>
cd recipe-app
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Install JSON Server

```
npm install -g json-server
```

---

## 🗄️ Run Backend (JSON Server)

Create a `db.json` file:

```json
{
  "recipes": []
}
```

Run server:

```
json-server --watch db.json --port 5000
```

---

## ▶️ Run Frontend

```
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

## 🔑 Authentication

* Simple login system using Redux state
* Protected routes using `PrivateRoute`
* Only logged-in users can add/edit recipes

---

## 📡 API Endpoints

| Method | Endpoint     |
| ------ | ------------ |
| GET    | /recipes     |
| POST   | /recipes     |
| PUT    | /recipes/:id |
| DELETE | /recipes/:id |

---

## ⚠️ Common Issues & Fixes

### 1. Redux Thunk Error

```
does not provide an export named 'default'
```

✔ Fix:

```js
import { thunk } from "redux-thunk";
```

---

### 2. White Screen Error

* Check console (F12)
* Ensure correct imports (.jsx)
* Ensure JSON server is running

---

### 3. Recipe Not Adding

* Check API URL
* Check Network tab
* Ensure server is running

---

## 🎯 Project Objective

This project fulfills the requirements of:

* React Practical Exam (Web)
* CRUD operations with Redux
* Routing and Authentication
* UI using Bootstrap

---

<img width="1831" height="330" alt="Screenshot 2026-04-23 160638" src="https://github.com/user-attachments/assets/37c43d14-0893-45b4-9908-d765c67a56fc" />

<img width="1817" height="475" alt="Screenshot 2026-04-23 160608" src="https://github.com/user-attachments/assets/92a0e861-7a42-4d33-9a67-a309dab9daa9" />

<img width="1884" height="457" alt="Screenshot 2026-04-23 160618" src="https://github.com/user-attachments/assets/859ce59d-aa80-4c5d-9fb4-dfe47fd9ac46" />







---

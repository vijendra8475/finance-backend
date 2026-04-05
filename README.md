# Finance Data Processing Backend API

## 📌 Overview

This project is a backend system for managing financial records with role-based access control. It allows users to create, view, and manage financial transactions while enforcing permissions based on user roles.

---

## 🚀 Features

* User management with roles (Admin, Analyst, Viewer)
* Role-based access control (RBAC)
* Financial records CRUD operations
* Filtering of records (type, category)
* Dashboard summary APIs (income, expense, balance)
* Input validation and error handling

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* Joi (Validation)

---

## ⚙️ Setup Instructions

1. Clone the repository:

```bash
git clone <your-repo-link>
cd finance-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

4. Run the server:

```bash
npm run dev
```

---

## 📡 API Endpoints

### 👤 Users

* POST `/api/users` → Create user
* GET `/api/users` → Get all users
* PATCH `/api/users/:id` → Update user

---

### 💰 Records

* POST `/api/records` → Create record
* GET `/api/records` → Get records (with filters)
* PATCH `/api/records/:id` → Update record
* DELETE `/api/records/:id` → Delete record

---

### 📊 Summary

* GET `/api/summary` → Dashboard analytics

---

## 🔐 Role-Based Access

| Role    | Permissions      |
| ------- | ---------------- |
| Viewer  | Read only        |
| Analyst | Read + analytics |
| Admin   | Full access      |

---

## ⚠️ Assumptions

* Authentication is simulated using headers (`userid`)
* No full authentication system implemented for simplicity

---

## 🚀 Future Improvements

* JWT-based authentication
* Pagination and search
* Unit and integration testing
* Deployment (Render / AWS)

---

## 📌 Author
Bijendra
github : vijendra8475

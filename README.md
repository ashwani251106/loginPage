# 🔐 JWT Authentication System (MVC Architecture)

A robust, secure, and production-ready Node.js authentication system. This project implements JSON Web Tokens (JWT) for session management and follows the Model-View-Controller (MVC) design pattern for clean, scalable code.

## 🚀 Features

* **MVC Architecture**: Separated concerns with dedicated folders for Routes, Controllers, and Models.
* **JWT Authentication**: Secure stateless authentication using JSON Web Tokens stored in HTTP-only cookies.
* **Flash Messages**: Real-time user feedback (e.g., "Invalid Password") using `connect-flash`.
* **Security**: Password hashing with `bcrypt` and environment variable protection with `dotenv`.
* **ES Modules**: Modern JavaScript syntax (`import/export`) throughout the backend.

## 🛠️ Tech Stack

* **Backend**: Node.js, Express.js
* **Database**: MongoDB (via Mongoose)
* **Authentication**: JWT, bcrypt, cookie-parser
* **Frontend**: EJS (Embedded JavaScript Templates)
* **Styling**: Custom CSS / (Add your framework here, e.g., Bootstrap)

## 📁 Project Structure

```text
├── controllers/      # Logic for login, signup, and logout
├── models/           # Mongoose schemas (User)
├── routes/           # URL routing definitions
├── middlewares/      # Auth guards and protected route logic
├── views/            # EJS templates for the UI
├── .env              # Private environment variables (ignored by Git)
├── server.js         # Entry point and middleware configuration
└── package.json      # Dependencies and scripts

# MERN Stack Task Distribution System

## 📌 Project Overview

This is a full-stack MERN application that allows:

- Admin login using JWT authentication
- Agent creation & management
- Uploading CSV/XLS/XLSX files
- Automatic task distribution among available agents
- Viewing distributed tasks with pagination

---

# 🚀 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Zod Validation
- Multer (File Upload)
- XLSX Parser

### Frontend
- React.js
- Axios
- React Router

---

# 📂 Project Structure

```
project-root/
│
├── backend/
│
└── frontend/
```

---

# ⚙️ BACKEND SETUP

## 1️⃣ Navigate to backend folder

```bash
cd backend
```

## 2️⃣ Install Dependencies

```bash
npm install
```

If creating fresh project, install manually:

```bash
npm install express mongoose dotenv cors bcryptjs jsonwebtoken multer xlsx zod morgan winston
npm install nodemon --save-dev
```

---

## 3️⃣ Add package.json config

Make sure package.json contains:

```json
{
  "type": "module",
  "scripts": {
    "dev": "nodemon server.js"
  }
}
```

---

## 4️⃣ Create .env File in backend root

```
MONGO_URL=mongodb+srv://dasdipal8888_db_user:6UZZVKUz9u1VYZou@cluster0.01obvkg.mongodb.net/?appName=Cluster0
PORT=5000
JWT_SECRET=taskpilot_super_secret_key_123

---

## 5️⃣ Start Backend Server

```bash
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

# 💻 FRONTEND SETUP

## 1️⃣ Navigate to frontend folder

```bash
cd frontend
```

## 2️⃣ Create React App (If not created)

Using Vite (Recommended):

```bash
npm create vite@latest
```

Or using CRA:

```bash
npx create-react-app .
```

---

## 3️⃣ Install Dependencies

```bash
npm install axios react-router-dom
```

---

## 4️⃣ Create Axios Instance

Create file:

```
src/api/axios.js
```

```javascript
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
```

---

## 5️⃣ Start Frontend

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 🔐 API ENDPOINTS

## 🔹 Admin Login

```
POST /api/auth/login
```

Body:
```json
{
  "email": "admin@gmail.com",
  "password": "123456"
}
```

---

## 🔹 Create Agent

```
POST /api/agents
```

Body:
```json
{
  "name": "Agent One",
  "email": "agent1@gmail.com",
  "mobile": "+919876543210",
  "password": "123456"
}
```

---

## 🔹 Get Agents (Pagination)

```
GET /api/agents?page=1&limit=5
```

---

## 🔹 Upload CSV

```
POST /api/tasks/upload
```

Use `form-data`

Key:
```
file
```

Type:
```
File
```

---

## 🔹 Get Tasks (Pagination)

```
GET /api/tasks?page=1&limit=10
```

---

# 📄 CSV FORMAT

CSV must contain:

```
FirstName,Phone,Notes
Rahul,9876543210,Interested
Amit,9123456789,Call later
Priya,9988776655,Hot lead
```

Required headers:
- FirstName
- Phone
- Notes

---

# 🔁 Task Distribution Logic

Tasks are distributed using round-robin algorithm:

```
agentIndex = index % totalAgents
```

This ensures:
- Equal distribution
- Works for any number of agents
- Extra tasks assigned sequentially

Example:
- 10 tasks, 3 agents
- Distribution: 4, 3, 3

---

# 🧪 Testing Flow

1. Start backend
2. Start frontend
3. Login as admin
4. Create agents
5. Upload CSV
6. View distributed tasks

---

# 🔒 Authentication Flow

- Admin logs in
- JWT token generated
- Token stored in localStorage
- Axios attaches token automatically via interceptor
- Protected routes verified by backend middleware

---

# ⚠️ Common Errors

| Error | Solution |
|--------|----------|
| 401 Unauthorized | Add Authorization header |
| No agents available | Create agents first |
| Invalid CSV format | Check header names |
| File missing | Ensure form-data key is `file` |

---

# 📌 Features

- JWT authentication
- Secure password hashing
- File validation
- Header validation
- Pagination
- Error handling middleware
- Dynamic agent distribution

---

# 🚀 Future Improvements

- Role-based authentication
- Agent workload tracking
- Dashboard analytics
- Deployment using Docker
- Cloud file storage (AWS S3)

---

# 👨‍💻 Author

Dipal Das  
Full Stack Developer  
MERN Stack

---

# 📝 Task Manager Backend (Node.js + TypeScript + MongoDB)

This is the backend API for the Task Manager web app. It provides RESTful API endpoints for managing tasks (create, read, update, delete) and uses MongoDB Atlas for data storage.

---

## 🚀 Tech Stack

- **Node.js**
- **TypeScript**
- **Express.js**
- **MongoDB (via Mongoose)**
- **Clean Architecture (Controller → Service → Repository → Model)**

---

## 📦 Features

✅ RESTful API  
✅ CRUD Operations on Tasks  
✅ MongoDB Atlas Integration  
✅ Clean Code Structure

---

## Install Dependencies

npm install

## Development

npm run dev

## Test (jest)

npm run test

## Build & Run (production)

npm run build
npm start

---

## 📂 Project Structure

# Get all tasks

curl http://localhost:3006/tasks

# Create a task

curl -X POST http://localhost:3006/tasks \
 -H "Content-Type: application/json" \
 -d '{"title": "Learn TypeScript"}'

# Update a task

curl -X PUT http://localhost:3006/tasks/<id> \
 -H "Content-Type: application/json" \
 -d '{"completed": true}'

# Delete a task

curl -X DELETE http://localhost:3006/tasks/<id>

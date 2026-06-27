# 🚀 SB Works - Freelancer MERN Platform

SB Works is a full-stack freelancing platform built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. It connects clients with skilled freelancers, allowing clients to post projects, freelancers to submit proposals, and both parties to collaborate securely through an intuitive web interface.

---

## 📌 Features

### 👨‍💼 Client
- Register and Login
- Create and manage projects
- Browse freelancer profiles
- View project applications
- Hire freelancers
- Chat with freelancers
- Review submitted work
- Provide feedback

### 👨‍💻 Freelancer
- Register and Login
- Create and update profile
- Browse available projects
- Apply for projects
- Submit completed work
- Communicate with clients
- Track project status

### 👨‍💼 Admin
- Manage users
- Monitor projects
- Handle disputes
- Ensure platform security
- Maintain system integrity

---

# 🛠 Tech Stack

### Frontend
- React.js
- Bootstrap
- Material UI
- Axios
- React Bootstrap

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- CORS

---

# 📂 Project Structure

```
SB-Works/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/Coder-0120/FreeLancing_Application-.git
```

```bash
cd sb-works
```

---

## 2. Install Client Dependencies

```bash
cd client
npm install
```

---

## 3. Install Server Dependencies

```bash
cd ../server
npm install
```

---

## 4. Configure Environment Variables

Create a `.env` file inside the **server** directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## 5. Run Backend

```bash
cd server
npm start
```

---

## 6. Run Frontend

```bash
cd client
npm start
```

The application will run at:

```
http://localhost:3000
```

Backend:

```
http://localhost:5000
```

---

# 📦 Database Collections

The application uses MongoDB with the following collections:

- Users
- Freelancers
- Projects
- Applications
- Chats

---

# 🔐 Authentication

- User Registration
- Login
- Password Encryption (bcrypt)
- JWT Authentication
- Protected Routes

---

# 📋 Modules

### User Module
- Signup
- Login
- Profile Management

### Project Module
- Create Project
- Update Project
- Delete Project
- Browse Projects

### Application Module
- Submit Proposal
- View Applications

### Chat Module
- Client-Freelancer Messaging

### Freelancer Module
- Portfolio
- Skills
- Experience
- Ratings

### Admin Module
- User Management
- Project Monitoring
- Platform Maintenance

---

# 🔄 Workflow

### Client

```
Register/Login
      ↓
Create Project
      ↓
Receive Applications
      ↓
Select Freelancer
      ↓
Chat & Collaborate
      ↓
Review Work
      ↓
Complete Project
```

---

### Freelancer

```
Register/Login
      ↓
Browse Projects
      ↓
Apply
      ↓
Client Selection
      ↓
Work on Project
      ↓
Submit Work
      ↓
Receive Feedback
```

---

# 💻 Technologies Used

| Technology | Purpose |
|------------|----------|
| React.js | Frontend |
| Node.js | Backend Runtime |
| Express.js | REST APIs |
| MongoDB | Database |
| Mongoose | ODM |
| Axios | API Calls |
| Bootstrap | Styling |
| Material UI | UI Components |
| JWT | Authentication |
| bcrypt | Password Hashing |

---

# 📸 Screens Included

- Landing Page
- Login/Register
- Freelancer Dashboard
- Admin Dashboard
- Project Listing
- Applications
- Project Details
- Create Project

---

# 🚀 Future Improvements

- Real-time Chat using Socket.io
- Online Payments
- Email Notifications
- Video Interviews
- AI-based Freelancer Recommendation
- Project Milestones
- Rating & Review System
- File Sharing
- Resume Verification

---

# 🎯 Learning Outcomes

- Full Stack MERN Development
- REST API Design
- MongoDB Database Design
- Authentication & Authorization
- React Component Architecture
- State Management
- CRUD Operations
- Client-Server Communication


# 👨‍💻 Author

**Anshul Verma**

MERN Stack Developer

---
⭐ If you like this project, don't forget to give it a star!

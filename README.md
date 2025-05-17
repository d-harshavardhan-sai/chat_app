# 📱 Chat App – Realtime Messaging with Style

<div align="center">

<!-- 🌐 Animated Architecture Diagram -->
<img src="https://github.com/user-attachments/assets/0fcf0c9d-668e-4491-bea4-feaee860d3ae" width="500" alt="Chat App Architecture"/>

---

<!-- 🔗 QR Code -->
### 📲 Scan to Try the App  
<img src="https://api.qrserver.com/v1/create-qr-code/?data=https://chat-app-3l00.onrender.com&size=150x150" width="150" alt="QR Code to Live App"/>

[🔗 Click here to open](https://chat-app-3l00.onrender.com)

---

<!-- ✨ Overview Description -->
<p align="center" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 1.2rem; color: #10B981; max-width: 600px; line-height: 1.6;">
  A real-time chat application built using the <strong>MERN Stack</strong>, <strong>Socket.IO</strong>, <strong>TailwindCSS</strong>, and <strong>DaisyUI</strong>.  
  Users can sign up, log in, and chat with others in real time with a modern, responsive UI.
</p>


</div>

---







### 🚀 Features

* 🔐 **User Authentication** (Login & Register) using **JWT tokens**
* 🗂️ **RESTful API Routes** for users, messages, and conversations
* ⚡ **Real-time Messaging** with **Socket.IO**
* 🟢 **Online User Status** indicator
* 🌙 **Responsive UI** built using **Tailwind CSS** + **DaisyUI**
* 🧠 **Global State Management** using `create()` from **Zustand**
* 🛡️ **Protected Routes** using a custom `protectRoute` middleware
* 🔊 **Notification Sounds** when new messages arrive
* 🧱 **MongoDB Atlas** for cloud-hosted database
* 🔄 **Mongoose ODM** for database schema modeling
* 🧩 **Modular Code Structure** with clean separation of concerns (controllers, routes, models)
* 🖼️ **Dynamic Avatar Generator** using:

  ```js
  const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
  const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
  ```
* 🎨 **Canvas-based Background Image** with MERN tech logos
* 🌐 **React Frontend** with:

  * `createContext`, `useContext` for Auth & Socket context
  * `useState`, `useEffect`, `useRef` for UI logic
  * `react-router-dom` for routing:

    ```js
    import { Navigate, Route, Routes, Link, BrowserRouter } from "react-router-dom";
    ```
  * `react-hot-toast` for toasts and alerts
  * `react-icons/io5` and `react-icons/bi` for stunning icons
* 🧪 Custom React Hooks (`useLogin`, `useSignup`, `useSendMessage`, etc.)
* 🗂️ Clean component structure: Messages, Sidebar, Skeltons
* 🌍 **Deployed on [Render](https://render.com/)** with:

  * Node.js + Express backend
  * Vite + React frontend as static site
  * Live socket.io connections


---


## 🛠️ Tech Stack

### 🖥️ Frontend
- ⚛️ React.js
- 🎨 Tailwind CSS
- 💠 DaisyUI
- 📡 Axios
- 🧩 Socket.IO Client

### 🛢️ Backend
- 🟩 Node.js
- 🚂 Express.js
- 🍃 MongoDB (with Mongoose ODM)
- 🔌 Socket.IO

### 🧪 Development Tools
- 🧰 Visual Studio Code
- 🧪 Postman (for API testing)
- 🌐 Chrome DevTools
- 🔄 Git & GitHub (for version control)

### ☁️ Deployment **[Render](https://render.com/)** 
- 🟦 Render (for backend)


---

## 📸 Screenshots
### 📝 1. Sign Up Page
<img src="https://github.com/user-attachments/assets/63011062-871b-48b2-a8fd-13fe5e012b02" width="400"/>

---

### ⚠️ 2. Fill All Fields
<img src="https://github.com/user-attachments/assets/7096074a-dfa7-46c1-a44c-a1006ba40053" width="400"/>

---

### 🔒 3. Password Not Match
<img src="https://github.com/user-attachments/assets/952b7383-bfb4-4f0f-8f4c-82e0062b3c57" width="400"/>

---

### 🔑 4. Password At Least 6 Characters
<img src="https://github.com/user-attachments/assets/9e7607ca-150f-4a7f-a003-377625de213a" width="400"/>

---

### 🔐 5. Login Page
<img src="https://github.com/user-attachments/assets/7910caa3-71a5-48e8-b3bf-37d60f4da521" width="400"/>

---

### ❌ 6. Invalid Username or Password
<img src="https://github.com/user-attachments/assets/c7f70be3-4f6c-43fa-9e3b-01533c3266ee" width="400"/>

---

### ✅ 7. Login Success
<img src="https://github.com/user-attachments/assets/e04b473c-27b4-48ab-b609-18140a17b5b5" width="400"/>

---

### 📲 8. Login Token
<img src="https://github.com/user-attachments/assets/43dbb787-bfd4-4921-aaa3-bf06c662c57b" width="400"/>

---

### 📋 9. Login Token Details
<img src="https://github.com/user-attachments/assets/ba556050-dd1f-4290-8f00-c566552dd3d2" width="400"/>

---

### 💬 10. Chat Box UI
<img src="https://github.com/user-attachments/assets/7968dc3a-1954-417b-902a-275e863d4f84" width="400"/>

---

### 🟢 11. Online User Status & Socket.IO
<img src="https://github.com/user-attachments/assets/254498bb-13cf-4a8c-84c0-ec6d85a9179c" width="400"/>

---

### ⏰ 12. Time Under Each Message
<img src="https://github.com/user-attachments/assets/d8f3a76d-95af-4a3a-ade5-11fe7ff769b4" width="400"/>

---

### 🔍 13. Search At Least 3 Characters
<img src="https://github.com/user-attachments/assets/81f93b7d-8d1e-4007-a429-0db7adfd2dfe" width="400"/>

---

### 🚪 14. Token Deleted After Logout
<img src="https://github.com/user-attachments/assets/05589920-b9dd-45a4-819f-f8aed907ad1c" width="400"/>

---

### 🎨 15. Background Image with MERN Logos Designed in Canva

<p align="center"><strong>🎨 <a href="https://www.canva.com/design/DAGntR_LY7Q/NwNtW1gGGFGIhyQf4CmBaA/view?utm_content=DAGntR_LY7Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h65791f44c0">View Canva Design</a></strong></p>

---

<p align="center">
  <img src="https://github.com/user-attachments/assets/d97392d0-fd21-4e7d-bd8a-f80d11475cb6" alt="MERN Background Design" width="400" />
</p>

---

### 🗃️ 16. MongoDB Database
<img src="https://github.com/user-attachments/assets/b7bc4298-4812-4419-9910-3d3f2fa28a06" width="400"/>

---

### 👥 17. Users Collection
<img src="https://github.com/user-attachments/assets/6c50679a-5627-45f4-a6d5-6309880e67a7" width="400"/>

---

### 💬 18. Messages Collection
<img src="https://github.com/user-attachments/assets/e8c325fd-f90b-44dc-b65f-8f927e9c01cd" width="400"/>

---

### 🧵 19. Conversation Collection
<img src="https://github.com/user-attachments/assets/4033bc56-582d-49e6-86e3-acba4bff1334" width="400"/>

---

### 📊 20. Visualized Data
<img src="https://github.com/user-attachments/assets/7a4536ec-579a-4ea1-9266-db73b00c6062" width="400"/>

---

### 🚀 21. Render Deployment status of chat_app
<img src="https://github.com/user-attachments/assets/90717be9-e440-4f2a-8478-e5ff2ad4721a" width="400"/>

---

### 📜 22. Logs
<img src="https://github.com/user-attachments/assets/cf7ac24f-7d84-45ad-b99b-5aef1d771b0e" width="400"/>

---

### 📈 23. Metrics
<img src="https://github.com/user-attachments/assets/e749a119-84e4-4741-8aa1-13acf496c7f8" width="400"/>

---

### ⚙️ 24. Environmental Variables
<img src="https://github.com/user-attachments/assets/41ac0aa0-27bb-465e-89c1-2c6cadf923bc" width="400"/>

---

## 🚀 Quick Start

1. Clone the repo  
   `git clone https://github.com/yourusername/chat-app.git`

2. Install backend dependencies  
   `cd backend && npm install`

3. Install frontend dependencies  
   `cd ../frontend && npm install`

4. Setup `.env` files (add example env variables here or link `.env.example`)

5. Run backend server  
   `npm run dev` (or your script)

6. Run frontend  
   `npm run dev`

7. Open `http://localhost:3000` in your browser

---

## 📄 License
This project is currently unlicensed.  
Feel free to contact me for any questions regarding usage or contributions.

---

## 🤝 Contributing
Contributions are welcome! Please open issues or pull requests for improvements or bug fixes.

---

## 📬 Contact

<p align="center">
Created by Harshavardhan Sai Divvala —  
<a href="http://linkedin.com/in/d-harshavardhan-sai">🔗 LinkedIn</a> | 
<a href="https://www.instagram.com/ha_darling_ha?igsh=djhlbWp4Y2p2aTU5">📸 Instagram</a>
</p>

<p align="center">
- feel free to reach out!
</p>


 ---

 
## 📁 Folder Structure (Basic Overview)

```bash
CHAT_APP/
├── backend/ # Node.js + Express backend
│ ├── controllers/
│ ├── db/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── socket/
│ ├── utils/
│ └── server.js
│
├── frontend/ # React frontend (Vite)
│ ├── dist/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── context/
│ │ ├── hooks/
│ │ ├── pages/
│ │ ├── utils/
│ │ ├── zustand/
│ │ └── main.jsx, App.jsx, etc.
│ └── index.html, package.json, tailwind config
│
├── .env # Environment variables
├── .gitignore
├── package.json # Backend dependencies
└── README.md





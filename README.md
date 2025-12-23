#  Mini ChatGPT

A **ChatGPT-like conversational AI web app** built using **React (Vite)** for the frontend and **Node.js + Express** for the backend.  
The app allows users to chat with an AI model in real time, featuring a **ChatGPT-style UI**, **typing animation**, and **smooth auto-scrolling**.

## 🚀 Features

- ⚡ Real-time AI chat responses  
- ⌨️ ChatGPT-style typing animation  
- 🔄 Auto-scroll to latest message  
- 🌙 Dark-mode inspired UI (ChatGPT-like)  
- 🧠 Clean separation of frontend & backend  
- 🔐 Environment variable support using Vite  
- 📦 Simple and lightweight setup  

## 🛠 Tech Stack

### Frontend
- React (with Hooks)
- Vite
- Axios
- CSS (Custom Styling)

### Backend
- Node.js
- Express
- Google Gemini API (or compatible LLM API)
- CORS
- dotenv

## 📂 Project Structure

```
Mini ChatGPT/
│
├── client/ 
│ ├── src/
│ │ ├── ChatBox.jsx
│ │ ├── App.jsx
│ │ ├── chatBox.css
│ │ └── App.css
│ ├── .env
│ ├── package.json
│ └── vite.config.js
│
├── server/ 
│ ├── server.js
│ ├── .env
│ └── package.json
│
└── README.md
```

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```
git clone https://github.com/PiyushB752/Mini_ChatGPT.git
cd Mini_ChatGPT
```

### 2️⃣ Backend Setup
```
cd server
npm install
npm run dev
```

Backend will start at - http://localhost:5000

### 3️⃣ Frontend Setup
```
cd client
npm install
npm run dev
```

Frontend will start at - http://localhost:5173

## 💡 How It Works

1. User types a message in the chat input
2. Frontend sends the prompt to the backend API
3. Backend forwards the request to the AI model
4. AI response is returned and displayed in chat
5. UI auto-scrolls and shows a typing indicator


## 📌 Use Cases

- Simple chatting with an AI
- Asking general questions
- Getting quick explanations or answers
- Practicing conversations
- Learning how AI chat applications work

## 🧪 Example Usage

- Type a question like **"What is React?"**
- Ask casual questions like **"Tell me a joke"**
- Have simple conversations with the AI
- Observe how AI responses appear with typing animation
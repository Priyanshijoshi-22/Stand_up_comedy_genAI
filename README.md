# Standup Comedy Generator 🎤😂

This is a simple AI-powered project that generates stand-up comedy scripts based on any topic you give it.  
It uses **Flask** as the backend, **OpenAI API** for script generation, and a clean **HTML/CSS/JS frontend**.

---

## 🚀 Features
- Generate standup comedy jokes/scripts from any topic.  
- Simple and clean UI.  
- Backend powered by Python (Flask).  
- Secure API key management using `.env`.  

---

## 📂 Project Structure
Standup/
│── server.py # Flask backend
│── app.js # Handles UI logic and API calls
│── script_engine.js # Separate script handling logic
│── styles.css # Frontend styling
│── index.html # Main UI page
│── .env # Stores your OpenAI API key (DO NOT SHARE)
│── venv/ # Virtual environment (created locally)


## ⚙️ Installation & Setup

1. **Clone / Copy project files** to your computer.  

2. **Create virtual environment**  
   ```powershell
   python -m venv venv
   venv\Scripts\activate

3. Install dependencies
pip install flask requests python-dotenv

4. Add your OpenAI API Key
Create a file named .env in the project folder and put:
OPENAI_API_KEY=sk-your_api_key_here

5. Run the server
python server.py
Open the app in browser
Visit → http://127.0.0.1:5000

# How It Works

You enter a topic in the UI.
Frontend (app.js) sends it to Flask backend.
Flask (server.py) calls OpenAI API with your topic.
OpenAI generates a funny script/joke and sends it back.
The frontend displays the generated script in your browser.

#  Example Usage

Input: Books
Output (sample AI-generated):

Ladies and gentlemen, let’s talk about books. You know books, right? 
Those heavy things that make you look smarter just by holding them. 
My Kindle is jealous—it thinks it’s the backup dancer in a library!

**Notes**
Never share your .env file (it contains your API key).
This project is for learning/demo purposes. Not production ready.
You can run it as many times as you want as long as you have OpenAI credits.

# Tech Stack

Frontend → HTML, CSS, Vanilla JS
Backend → Python (Flask)
AI Model → OpenAI GPT API
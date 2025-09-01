from flask import Flask, request, jsonify, send_from_directory
import os
import requests
from dotenv import load_dotenv

# Load .env file
load_dotenv()

app = Flask(__name__, static_folder=".", static_url_path="")

# Get API key from environment
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")


@app.route("/")
def index():
    return send_from_directory(".", "index.html")


@app.route("/generate", methods=["POST"])
def generate_script():
    try:
        data = request.json
        topic = data.get("topic", "life")
        style = data.get("style", "observational")
        length = data.get("length", "short")

        if not OPENAI_API_KEY:
            return jsonify({"error": "API key not found. Please check your .env file"}), 500

        headers = {
            "Authorization": f"Bearer {OPENAI_API_KEY}",
            "Content-Type": "application/json"
        }

        # Build the actual prompt
        user_prompt = f"Write a {length} stand-up comedy joke about '{topic}' in a {style} style."

        payload = {
            "model": "gpt-4o-mini",
            "messages": [
                {"role": "system", "content": "You are a standup comedian generating short, funny scripts."},
                {"role": "user", "content": user_prompt}
            ]
        }

        response = requests.post(
            "https://api.openai.com/v1/chat/completions",
            headers=headers,
            json=payload
        )

        response.raise_for_status()
        result = response.json()

        # Extract joke text
        script = result["choices"][0]["message"]["content"].strip()
        return jsonify({"script": script})

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)

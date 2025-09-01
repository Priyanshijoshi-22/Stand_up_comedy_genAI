// app.js
const generateBtn = document.getElementById("generateBtn");
const performBtn = document.getElementById("performBtn");
const stopBtn = document.getElementById("stopBtn");
const scriptTA = document.getElementById("script");

let utter = null;

// Generate script
generateBtn.addEventListener("click", async () => {
  const topic = document.getElementById("topic").value || "life";
  const style = document.getElementById("style").value || "observational";
  const length = document.getElementById("length").value || "short";

  scriptTA.value = "Generating…";

  try {
    const res = await fetch("/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, style, length })
    });
    if (!res.ok) throw new Error("Backend error");

    const data = await res.json();
    scriptTA.value = data.script || "No script returned";
    performBtn.disabled = false;
  } catch (err) {
    console.error(err);
    scriptTA.value = "Error generating script. Check server & API key.";
  }
});

// Perform script with browser TTS
performBtn.addEventListener("click", () => {
  const text = scriptTA.value.trim();
  if (!text) return;

  if (!("speechSynthesis" in window)) {
    alert("Text-to-speech not supported in this browser.");
    return;
  }

  speechSynthesis.cancel();
  utter = new SpeechSynthesisUtterance(text);
  utter.rate = 1.02;
  utter.pitch = 1.0;

  utter.onstart = () => {
    startMouthAnimation();
    performBtn.disabled = true;
    stopBtn.disabled = false;
  };
  utter.onend = () => {
    stopMouthAnimation();
    performBtn.disabled = false;
    stopBtn.disabled = true;
  };
  utter.onerror = () => {
    stopMouthAnimation();
    performBtn.disabled = false;
    stopBtn.disabled = true;
  };

  const voices = speechSynthesis.getVoices();
  if (voices && voices.length) {
    const v = voices.find(v => /en/i.test(v.lang)) || voices[0];
    if (v) utter.voice = v;
  }

  speechSynthesis.speak(utter);
});

// Stop playback
stopBtn.addEventListener("click", () => {
  if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
  }
  stopMouthAnimation();
  performBtn.disabled = false;
  stopBtn.disabled = true;
});




// venv\Scripts\activate   
// python server.py
// http://127.0.0.1:5000

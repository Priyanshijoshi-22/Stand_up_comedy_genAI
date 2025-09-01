document.getElementById("generateBtn").addEventListener("click", async () => {
  const topic = document.getElementById("topic").value;
  const style = document.getElementById("style").value;
  const length = document.getElementById("length").value;

  try {
    const response = await fetch("/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic, style, length }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch from backend");
    }

    const data = await response.json();
    document.getElementById("scriptBox").textContent = data.script || "No joke generated.";
  } catch (error) {
    alert("Error: " + error.message);
  }
});

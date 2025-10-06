const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Predefined chatbot responses
const responses = {
  "hello": "Hi there! 👋 How can I help you today?",
  "how are you": "I'm just a bot, but I'm doing great! Thanks for asking 😊",
  "bye": "Goodbye! 👋 Have a great day!",
  "default": "Sorry, I don’t understand that. Can you rephrase?"
};

// Add message to chat
function addMessage(message, type) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", type);
  msgDiv.innerText = message;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Send user message
sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message === "") return;

  addMessage(message, "user-message");
  userInput.value = "";

  setTimeout(() => {
    const reply = responses[message.toLowerCase()] || responses["default"];
    addMessage(reply, "bot-message");
  }, 500);
});

// Allow Enter key to send
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});

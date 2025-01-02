const chatbotButton = document.getElementById('chatbot-button');
const chatbotBox = document.getElementById('chatbot-box');
const closeChatbot = document.getElementById('close-chatbot');

chatbotButton.addEventListener('click', () => {
  chatbotBox.style.display = 'block';
});

closeChatbot.addEventListener('click', () => {
  chatbotBox.style.display = 'none';
});

// AI Chatbot Logic (Integrate with an AI API like OpenAI)
document.getElementById('chatbot-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const userMessage = e.target.value;
    // Send userMessage to AI API and display response in #chatbot-body
  }
});
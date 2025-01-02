const voiceSearchButton = document.getElementById('voice-search-button');

voiceSearchButton.addEventListener('click', () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    // Use transcript for search functionality
  };
});
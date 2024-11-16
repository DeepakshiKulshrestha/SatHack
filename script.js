

function toggleChat() {
    var chatbot = document.getElementsByClassName("chatbot-main")[0]; // Accessing the first element
    if (chatbot) {
        chatbot.style.display = chatbot.style.display === "block" ? "none" : "block"; // Toggle display
    }
}


(async () => {
    const response = await fetch('./main.json');
    const data = await response.json();
    console.log(data); // Use the JSON data
})();

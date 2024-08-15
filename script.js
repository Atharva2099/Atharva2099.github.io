// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
});

// Open and Close Chat Dialog
function openDialog(section) {
    const chatDialog = document.getElementById('chatDialog');
    const chatMessages = document.getElementById('chatMessages');
    chatDialog.style.display = 'block';
    chatMessages.innerHTML = `<p>You're viewing the ${section} section.</p>`;
}

function closeDialog() {
    document.getElementById('chatDialog').style.display = 'none';
}

// Send Message (Placeholder for Gemini API)
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatMessages = document.getElementById('chatMessages');

    if (userInput.trim() === '') {
        return;
    }

    chatMessages.innerHTML += `<p>User: ${userInput}</p>`;
    
    // Placeholder: Add Gemini API call here
    
    chatMessages.innerHTML += `<p>Bot: (Response will be here)</p>`;
    document.getElementById('userInput').value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Close chat dialog on outside click
window.addEventListener('click', function(event) {
    const chatDialog = document.getElementById('chatDialog');
    if (event.target == chatDialog) {
        closeDialog();
    }
});

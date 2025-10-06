html code 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personal AI Protocol</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="nav-brand">
                <h1>AI Protocol</h1>
            </div>
            <div class="nav-links">
                <a href="#home">Home</a>
                <a href="#chat">Chat</a>
                <a href="#about">About</a>
            </div>
        </nav>
    </header>

    <main>
        <section id="home" class="hero">
            <div class="hero-content">
                <h2 class="hero-title">Welcome to Personal AI Protocol</h2>
                <p class="hero-subtitle">Experience the future of intelligent conversation</p>
                <button class="cta-button" onclick="scrollToChat()">Start Chatting</button>
            </div>
        </section>

        <section id="chat" class="chat-section">
            <div class="chat-container">
                <div class="chat-header">
                    <h3>AI Assistant</h3>
                    <button class="clear-btn" onclick="clearChat()">Clear Chat</button>
                </div>
                <div class="chat-messages" id="chatMessages">
                    <div class="message bot-message">
                        <div class="message-content">
                            <p>Hello! I'm your AI assistant. How can I help you today?</p>
                        </div>
                    </div>
                </div>
                <div class="chat-input-container">
                    <input 
                        type="text" 
                        id="userInput" 
                        class="chat-input" 
                        placeholder="Type your message here..."
                        onkeypress="handleKeyPress(event)"
                    >
                    <button class="send-button" onclick="sendMessage()">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 8L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>

        <section id="about" class="about-section">
            <div class="about-content">
                <h2>About AI Protocol</h2>
                <div class="about-grid">
                    <div class="about-card">
                        <div class="card-icon"></div>
                        <h3>Intelligent Responses</h3>
                        <p>Advanced AI technology to understand and respond to your queries with precision and context awareness.</p>
                    </div>
                    <div class="about-card">
                        <div class="card-icon"></div>
                        <h3>Fast & Efficient</h3>
                        <p>Lightning-fast response times ensure smooth and seamless conversations without delays.</p>
                    </div>
                    <div class="about-card">
                        <div class="card-icon"></div>
                        <h3>Secure & Private</h3>
                        <p>Your conversations are processed securely with privacy as our top priority.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Personal AI Protocol. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>

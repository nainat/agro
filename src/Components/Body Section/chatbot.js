import React, { useState } from "react";
import "./chatbot.css";
const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const responses = {
        "hello": "Hi there! How can I help?",
        "how are you?": "I'm just a bot, but I'm doing great! 😊",
        "what is your name?": "I'm a cropbot used to help farmers! 🤖",
        "which fertilizer is best used for rice?": [
            "The best fertilizer for rice depends on the soil condition, rice variety, and growth stage.",
            "However, a balanced combination of Nitrogen (N), Phosphorus (P), and Potassium (K) is essential for optimal rice growth.",
            "Hope you got you answer. 😊"
        ],

    };

    const sendMessage = () => {
        if (!input.trim()) return; 

        const userMessage = input.toLowerCase();
        const botResponse = responses[userMessage] || "Sorry, I don't understand that.";

        setMessages([...messages, { sender: "user", text: input }, { sender: "bot", text: botResponse }]);
        setInput(""); 
    };

    return (
        <div className="chatbot-container">
            <h3>CROPBOT</h3>
            <div className="chatbox">
            {messages.map((msg, index) => (
    <div key={index} className={msg.sender}>
        {Array.isArray(msg.text) ? msg.text.map((line, i) => <p key={i}>{line}</p>) : msg.text}
    </div>
))}

            </div>
            <div className="input-area">
                <input 
                    type="text" 
                    value={input} 
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Ask me something..."
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chatbot;

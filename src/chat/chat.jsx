import React, {useState} from 'react';
import './chat.css'; 
export function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const send = () => {
    if (input.trim() === "") return; 
    const userMessage = { text: input, sender: "user"}; 
    const response = {text:"Hey dawg", sender:"default"}
    setMessages([...messages, userMessage, response])
    setInput("");
  }
  return (

  <main>
    <div className="chat-box"> 
      <div className="messages">
          <div className="message"> Hello</div>
          <div className="message-user">Hi!</div>
      </div>
      <div className="input-box"> 
        <input type="text" id="text" name="varText" placeholder="Start Typing..." value={input} onChange={(e) => setInput(e.target.value)}/> 
        <button onClick={send}> Send </button>
        </div> 
    </div> 
        </main>
  );
}
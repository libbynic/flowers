import React from 'react';
import './chat.css'; 
export function Chat() {
  return (
  <main>
    <div className="chat-box"> 
      <div className="messages">
          <div className="message"> Hello</div>
          <div className="message-user">Hi!</div>
      </div>
      <div className="input-box"> 
        <input type="text" id="text" name="varText" placeholder="Start Typing..."/> 
        <button> Send </button>
        </div> 
    </div> 
        </main>
  );
}
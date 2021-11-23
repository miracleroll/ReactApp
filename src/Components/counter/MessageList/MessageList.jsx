import React from "react";
import './MessageList.css';

export function MessageList({ messageList }) {

    return (
    <ul className="message_list">
    {messageList.map(({ author, text }) => (
      <div className="message_list">
        <span className="message_list_author">{author}</span>
        <p className="message_list_text">{text}</p>
      </div>
    ))}
    </ul>
    );
};
import React from 'react';
import { useState, useEffect } from "react";
import './App.css';
import { FormMessage } from './Components/counter/FormMessage/FormMessage';
import { MessageList } from './Components/counter/MessageList/MessageList';



function App () {

  const INIT_MESSAGES = {
    author: "Бот",
    text: "Добро пожаловать в чат. Напиши мне что-нибудь",

};

const BOT_MESSAGES = {
    author: "Бот",
    text: "Спасибо, что оставил сообщение!Ты классный!",
};

const [messageList, setMessageList] = useState([INIT_MESSAGES]); 

  useEffect(() => {
    let timer = null;
    const lastMessage = messageList[messageList.length - 1];
    if (lastMessage.author !== "Бот")
      timer = setTimeout(() => {
        setMessageList([...messageList, BOT_MESSAGES]);
      }, 3000);

    return () => {
      clearTimeout(timer);
    };

  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">Чат</header>
      <main className="App-main">
        <MessageList messageList={messageList} />
        <FormMessage
          messageList={messageList}
          setMessageList={setMessageList}
        />
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;

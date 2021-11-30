import React from 'react';
import { useState, useEffect } from "react";
import './App.css';
import { FormMessage } from './Components/counter/FormMessage/FormMessage';
import { MessageList } from './Components/counter/MessageList/MessageList';
import {v4 as uuidv4} from "uuid";
import { createTheme } from '@mui/material/styles';
import { ChatList } from './Components/counter/Chats/Chats';
import { Grid } from "@mui/material/";




function App () {

  const INIT_MESSAGES = {
    id: uuidv4(),
    author: "Бот",
    text: "Добро пожаловать в чат. Напиши мне что-нибудь",

};

const BOT_MESSAGES = {
  id: "",
    author: "Бот",
    text: "Спасибо, что оставил сообщение!Ты классный!",
};

const [messageList, setMessageList] = useState([INIT_MESSAGES]); 

  useEffect(() => {
    let timer = null;
    const botMessage = { id: "", author: "", text: "" };
    const lastMessage = messageList[messageList.length - 1];
    if (lastMessage.author !== "Бот")
      timer = setTimeout(() => {
        if (BOT_MESSAGES.id === "") {
          botMessage.id = uuidv4();
          botMessage.author = BOT_MESSAGES.author;
          botMessage.text = BOT_MESSAGES.text;
        }

        setMessageList([...messageList, BOT_MESSAGES]);
      }, 3000);

    return () => {
      clearTimeout(timer);
    };

  }, [messageList]);

  const theme = createTheme({
      palette: {
        primary: {
          main: '#ec407a',
        },
        secondary: {
          main: '#f48fb1',
        },
      },
  });

  return (
    <div className="App" >
      <Grid item xs={12} sm={4} md={3} lg={2} className="Chats">
        <ChatList/>
      </Grid>
      <Grid item xs={12} sm={8} md={9} lg={10}>
      <header className="App-header">Чат</header>
      <main>
        <MessageList  messageList={messageList}/>
        <FormMessage
          messageList={messageList}
          setMessageList={setMessageList}
        />
      </main>
      </Grid>
      <footer className="App-footer"></footer>
    </div>



  );
}

export default App;

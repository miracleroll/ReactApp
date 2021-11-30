import React from "react";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, } from "@mui/material/";
import { v4 as uuidv4 } from "uuid";
import { createTheme } from '@mui/material/styles';
import "./Chats.css";
  
const chatList = [
    { id: uuidv4(), name: "Петя", avatar: "П" },
    { id: uuidv4(), name: "Егор", avatar: "Е" },
    { id: uuidv4(), name: "Маша", avatar: "М" },
    { id: uuidv4(), name: "Василий", avatar: "В" },
    { id: uuidv4(), name: "Сергей", avatar: "С" },
];
  
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


export function ChatList() {
    return (
      <List sx={{ width: "100%"}} theme={theme}>
        <header className="App-header">Все чаты</header>
        {chatList.map(({ id, name, avatar }) => (
          <ListItem key={id} className="ChatsBorder">
            <ListItemAvatar>
              <Avatar theme={theme}>{avatar}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
    );
}
import React from "react";
import './MessageList.css';
import { Avatar, Box, Typography, List, ListItem } from "@mui/material/";
import { createTheme } from '@mui/material/styles';

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


export function MessageList({ messageList }) {

    return (
<List className="message_list" theme={theme}>
      {messageList.map(({ id, author, text }) => (
        <ListItem key={id}>
          <Avatar
            className="message_list_img"
            src="/broken-image.jpg"
            sx={{ width: 32, height: 32 }}
          />
          <Box className="message_list">
            <Typography className="message_list_author">{author}</Typography>
            <Typography className="message_list_text">{text}</Typography>
          </Box>
        </ListItem>
      ))}
    </List>
    );
};
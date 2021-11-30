import { useEffect, useRef, useState } from "react";
import './FormMessage.css';
import { v4 as uuidv4 } from "uuid";
import { TextField } from "@mui/material/";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f381a7',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});





export function FormMessage({ messageList, setMessageList }) {
    const [messageAuthor, setMessageAuthor] = useState("");
    const [messageText, setMessageText] = useState("");

    const [focus, ] = useState(true);
    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current?.focus();
    }, [messageText, focus]);

    const handleAuthorChange = (e) => setMessageAuthor(e.target.value);
    const handleTextChange = (e) => setMessageText(e.target.value);
    const handleAdd = (e) => {
      if (messageAuthor === "" || messageText === "")
        return alert("не заполнены необходимые данные");
      if (messageAuthor === "бот")
        return alert("вы не можете оставлять сообщения от этого имени");
        const newMessage = {
          id: uuidv4(),
            author: messageAuthor,
            text: messageText,
          };
          setMessageAuthor("");
    setMessageText("");
    return setMessageList([...messageList, newMessage]);
};



return (
  <form
    className="message_form"
    action="#"
    onSubmit={(e) => {
      e.preventDefault();
    }}
  >
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment" >
          Введите имя
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
            </InputAdornment>
          }
          onChange={handleAuthorChange}
        />
      </FormControl>
        <TextField
          id="outlined-textarea"
          label="Написать сообщение"
          multiline
          value={messageText}
          onChange={handleTextChange}
          inputRef={inputRef}
          size="small"
          sx={{  m:"10px", flexGrow: 1 }}
        />
        <Stack spacing={2} direction="row">
      <Button variant="contained" className="message_form_submit" theme={theme} onClick={handleAdd}>Отправить</Button>
    </Stack>
    </form>
  );
}
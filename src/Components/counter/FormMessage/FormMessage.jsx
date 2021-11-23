import { useState } from "react";
import './FormMessage.css';



export function FormMessage({ messageList, setMessageList }) {
    const [messageAuthor, setMessageAuthor] = useState("");
    const [messageText, setMessageText] = useState("");
    const handleAuthorChange = (e) => setMessageAuthor(e.target.value);
    const handleTextChange = (e) => setMessageText(e.target.value);
    const handleAdd = (e) => {
      if (messageAuthor === "" || messageText === "")
        return alert("не заполнены необходимые данные");
      if (messageAuthor === "бот")
        return alert("вы не можете оставлять сообщения от этого имени");
        const newMessage = {
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
    <input
      className="message_form_author"
      value={messageAuthor}
      onChange={handleAuthorChange}
      placeholder="Введите имя"
      />
      <textarea
        className="message_form_text"
        value={messageText}
        onChange={handleTextChange}
        ></textarea>
      <input
        className="message_form_submit"
        type="submit"
        onClick={handleAdd}
        value="Отправить"
      ></input>
    </form>
  );
}
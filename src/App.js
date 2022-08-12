import { useState } from "react";
import "./App.css";

import { XLg } from "react-bootstrap-icons";

function App() {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [memos, setMemos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let date = new Date();

    let val = {
      title: title,
      body: input,
      time: date.toLocaleTimeString(),
    };
    setMemos([...memos, val]);
    setInput("");
    setTitle("");
  };

  const handleDelete = (i) => {
    let temp = memos;
    temp = temp.filter((t, index) => {
      return index !== i;
    });
    setMemos(temp);
  };

  return (
    <div className="container">
      <form onSubmit={(e) => handleSubmit(e)} className="container-form">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add Title"
          className="form-input"
          maxLength={20}
          minLength={5}
          required="required"
        />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength="250"
          placeholder="Add content"
          className="form-input"
          minLength="10"
          rows={10}
          cols={5}
          required="required"
        />
        <button className="button-save" type="submit">
          Add Memo
        </button>
      </form>
      <div className="memo-container">
        {memos.map((memo, i) => {
          return (
            <div className="memo-div" key={i}>
              <button className="button-delete" onClick={() => handleDelete(i)}>
                <XLg />
              </button>
              <p className="memo-title">{memo.title}</p>
              <p className="memo-body">{memo.body}</p>
              <p className="memo-time">{memo.time}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [memos, setMemos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let val = {
      title: title,
      body: input,
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
    <>
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e)} className="container-form">
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={input} onChange={(e) => setInput(e.target.value)} />
          <button className="button-save">Save</button>
        </form>
      </div>
      {memos.map((memo, i) => {
        return (
          <div className="memo-container">
            <button className="button-delete" onClick={() => handleDelete(i)}>
              Delete
            </button>
            <p className="">{memo.title}</p>
            <p>{memo.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;

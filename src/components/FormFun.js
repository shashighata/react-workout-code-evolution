import React, { useState } from "react";

function FormFun() {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [topics, setTopics] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleComments = (e) => {
    setComments(e.target.value);
  };
  const handleSelect = (e) => {
    setTopics(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${name} ${comments} ${topics}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name</label>
          <input type="text" value={name} onChange={handleName} />
        </div>
        <div>
          <label>name</label>
          <textarea type="text" value={comments} onChange={handleComments} />
        </div>
        <div>
          <select value={topics} onChange={handleSelect}>
            <option>HTML</option>
            <option>CSS</option>
            <option>JAvascript</option>
            <option>ReactJs</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default FormFun;

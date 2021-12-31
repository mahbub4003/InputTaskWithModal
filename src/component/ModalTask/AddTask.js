import React, { useState } from "react";
import "./addtask.css";

function AddTask({ setShowModal, setList }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    const listItem = {
      title: title,
      startDate: date,
    };
    setList((pre) => [...pre, listItem]);
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <label>
          <span className="span">
            What is your choice of languege for development?
          </span>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="whte is your choice"
          />
          <span className="span">
            What is start the languege for development?
          </span>
          <input onChange={(e) => setDate(e.target.value)} type="date" />
        </label>
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

export default AddTask;

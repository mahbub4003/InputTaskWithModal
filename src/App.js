import { data } from "./component/Obj";
import React, { useState } from "react";
import "./app.css";
import AddTask from "./component/ModalTask/AddTask";
import Modal from "./component/ModalTask/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [list, setList] = useState(data);

  const handleDelet = (id) => {
    const filterlist = list.filter((data) => data.id !== id);
    setList(filterlist);
  };

  return (
    <div>
      <div className="card">
        {list.map((data) => (
          <div onClick={() => handleDelet(data.id)} className="cardItem">
            <h3>{data.title}</h3>
            <p>{data.startDate}</p>
          </div>
        ))}
        <button onClick={() => setShowModal(true)}>Add Task</button>
      </div>
      {showModal && (
        <Modal>
          <AddTask setList={setList} setShowModal={setShowModal} />
          <button onClick={() => setShowModal(false)}>cansel</button>
        </Modal>
      )}
    </div>
  );
}

export default App;

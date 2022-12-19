import React, { Fragment, useState } from "react";

import Modal from "react-modal";

function UserData() {
  const [cntr, setcntr] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [list, setList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(false);
  };

  // const setModalIsOpenToFalse = () => {
  //   setModalIsOpen(false);
  // };

  const handleSubmit = (e) => {
    setcntr(cntr + 1);
    e.preventDefault();
    console.log(name, email);
    setList(list.concat({ name, email, cntr }));
  };
  const handleRemove = (id) => {
    console.log(id);

    const newList = list.filter((item) => item.cntr !== id);
    console.log(newList);
    setList(newList);
    setModalIsOpen(true);
  };

  return (
    <div className="userdata">
      <h1>Get The Data!!</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button>Add</button>
      </form>
      {list.map((a, i) => (
        <li key={i}>
          {a.name} {a.email}
          <button type="button" onClick={() => handleRemove(a.cntr)}>
            x
          </button>
        </li>
      ))}
      <Modal isOpen={modalIsOpen}>
        <button onClick={setModalIsOpenToTrue}>x</button>
        <Fragment>
          <label>{name}</label>
          <label>{email}</label>
        </Fragment>
      </Modal>
    </div>
  );
}

export default UserData;

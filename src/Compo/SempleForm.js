import React, { useState } from "react";

const SempleForm = () => {
  const [username, setUserName] = useState("");

  const nameChangehandler = (event) => {
    setUserName(event.target.value);
  };
  const Handlersubmit = (event) => {
    event.preventDefault();
    console.log(username);
  };

  return (
    <from onSubmit={Handlersubmit}>
      <div className="container">
        <div className="form-control">
          <label>Name</label>
          <input
            type="text"
            value={username}
            id="name"
            onChange={nameChangehandler}
          />
          <br />
          <button type="submit" onClick={Handlersubmit}>
            Submit
          </button>
        </div>
      </div>
    </from>
  );
};
export default SempleForm;

import React, { useState } from "react";

const Form = () => {
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
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          value={username}
          id="name"
          onChange={nameChangehandler}
        />
        <button type="Submit" onClick={Handlersubmit}>
          Submit
        </button>
      </div>
    </from>
  );
};
export default Form;

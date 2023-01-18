import React, { useState } from "react";

const SearchInput = () => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();

    // 👇️ value of input field
    console.log("handleClick ", message);
  };

  return (
    <div>
      <h1>Search Here</h1>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        autoComplete="off"
      />

      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default SearchInput;

import React from "react";

const Username = () => {
  const studentname = ["Rohan", "Sweta", "John", "Deepak", "Priya"];
  let displayName = "";
  for (let i = 0; i < studentname.length; i++) {
    displayName = displayName + " " + studentname[i];
    console.log(displayName);
  }
  return (
    <div>
      <h1>For loop in React</h1>
      <ul>
        <li>{displayName}</li>
      </ul>
    </div>
  );
};

export default Username;

import React, { useState } from "react";

const Demoform = () => {
  const [num1, setnum1] = useState("");
  const [num2, setnum2] = useState("");

  const HandlerAddNumber = () => {};
  return (
    <form>
      <div className="container">
        <div className="form-control">
          <input
            type="number"
            onChange={(e) => setnum1(e.target.value)}
            name="num1"
            value={num1}
          />
          <br />
          <br />
          <input
            type="number"
            onChange={(e) => setnum2(e.target.value)}
            name="num2"
            value={num2}
          />
          <button onClick={HandlerAddNumber} type="submit">
            Submit
          </button>
          <input type="result" {...(num1 + num2)} />
        </div>
      </div>
    </form>
  );
};

export default Demoform;

// import React from "react";

// const Balancesheet = () => {
//   const num1 = document.getElementById("num1").value;
//   const num2 = document.getElementById("num2").value;
//   const total = parseInt(num1) + parseInt(num2);

//   document.getElementById("total").value = total;

//   return (
//     <div>
//       <h2>Add two Number</h2>
//       <input
//         type="text"
//         id="num1"
//         placeholder="Number1"
//         value={num1}
//         onkeyup="sum()"
//       />
//       <input
//         type="text"
//         id="num2"
//         placeholder="Number2"
//         value={num2}
//         onkeyup="sum()"
//       />

//       <input type="text" id="total" readOnly />
//     </div>
//   );
// };
// export default Balancesheet;

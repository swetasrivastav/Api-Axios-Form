// import React, { useState } from "react";

// function Table() {
//   const [data, setData] = useState(null);
//   const [print, setprint] = useState(false);
//   function getdata(event) {
//     setData(event.target.value);
//     setprint(false);
//     console.log(event.target.value);
//   }
//   return (
//     <div className="table">
//       <input type="text" onChange={getdata} />
//       <button onClick={() => setprint(true)}>Add</button>
//       {print ? <h2>{data}</h2> : null}
//     </div>
//   );
// }

// export default Table;

// form input 2 method
// import { useState } from "react";
// function Table() {
//   const [message, setMessage] = useState("");
//   //const [updated, setUpdated] = useState(message);
//   const handleChange = (event) => {
//     setMessage(event.target.value);
//     console.log(event.target.value);
//   };
//   const handleClick = () => {
//     // 👇 "message" stores input field value
//     //setUpdated(message);
//   };
//   return (
//     <div>
//       <input
//         type="text"
//         id="message"
//         name="message"
//         onChange={handleChange}
//         value={message}
//       />
//       <h2>Message: {message}</h2>
//       {/* <h2>Updated: {updated}</h2> */}
//       <button onClick={handleClick}>Update</button>
//     </div>
//   );
// }
// export default Table;

//form concept

import React, { useState } from "react";

const Array = () => {
  //data push in array for position studentname[1].push
  const [student, setStudent] = useState([1, 2, 3, 4, 6]);
  const ChangeHandler = () => {
    setStudent((current) => [5, ...current]);
    //student.splice();
    //student.push(5);
    console.log(student);
    // setStudent(...student);
  };
  return (
    <div>
      {student.map((item, i) => {
        return (
          <div key={i}>
            <p>{item}</p>
          </div>
        );
      })}
      <button onClick={ChangeHandler}>Add Student</button>
    </div>
  );

  //data remove in array

  //   const studentname = [
  //     { id: 1, name: "Rohan", country: "Austria" },
  //     { id: 2, name: "Sara", country: "UK" },
  //     { id: 3, name: "Ram", country: "India" },
  //     { id: 4, name: "Sam", country: "UK" },
  //   ];

  //   const [student, setStudent] = useState(studentname);

  //   const Remove = () => {
  //     setStudent((current) =>
  //       current.filter((student) => {
  //         return student.id !== 4;
  //       })
  //     );
  //     console.log(student);
  //   };

  //   return (
  //     <div className="container">
  //       {student.map(({ id, name, country }) => {
  //         return (
  //           <div key={id}>
  //             <h2>name: {name}</h2>
  //             <h2>country: {country}</h2>
  //           </div>
  //         );
  //       })}
  //       <button onClick={Remove}>Delete</button>
  //     </div>
  //   );

  //find data in array
  //   const studentname = [
  //     { id: 1, name: "Rohan", country: "Austria" },
  //     { id: 2, name: "Sara", country: "UK" },
  //     { id: 3, name: "Ram", country: "India" },
  //     { id: 4, name: "Sam", country: "UK" },
  //   ];
  //   const find = studentname.filter((obj) => {
  //     return obj.country === "India";
  //   });

  //   console.log(find);

  //   return (
  //     <div>
  //       {studentname.map((list) => {
  //         return (
  //           <div key={list.id}>
  //             <h2>name: {list.name}</h2>
  //             <h4>country: {list.country}</h4>
  //           </div>
  //         );
  //       })}
  //       ;
  //       </div>
  //     );

  //   slice in array
  //     const studentname = ["Rohan", "John", "Deepak", "Ram", "Sam", "Sweta"];

  //     //const newArr = () => {
  //     //studentname.slice(2,4)
  //     console.log(studentname.slice(2, 4));

  //filtter method for filtering
  // setMyData(
  //   data[0].itemdata.filter((x) => {
  //     return (
  //       x.financialyear === 2021 ||
  //       x.financialyear === 2020 ||
  //       x.financialyear === 2019
  //     );
  //   })
  // );

  //setMyData(data[0].itemdata.filter((x) => x.financialyear === 2021));
  //setMyData(data[0].itemdata.filter((x) => x.financialyear === "PowerPlants"))

  //var newdata = data[0].itemdata.filter((x) => x.financialyear === 2021);
  //console.log(newdata);
};

export default Array;

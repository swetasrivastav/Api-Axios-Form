import React, { useState, useRef } from "react";

const Inputlist = () => {
  const inputRef = useRef(null);
  const [alldata, setAllData] = useState([]);
  const [searchResult, setsearchData] = useState([]);
  let arrayAllData = [];

  const ChangeHandler = (e) => {
    //setList(e);
    //console.log(e.target.value);
    //console.log(alldata);
    setsearchData(alldata.filter((item) => item == e));
    console.log(searchResult);

    if (searchResult && searchResult.length > 0) {
      //console.log(searchResult);
      //setAllData(searchResult);
    } else if (setAllData && setAllData.length > 0) {
      //setAllData(arrayAllData);
    }
    // setsearchData(search);
    // console.log(alldata);
  };

  const HandleAdd = (e) => {
    // setAllData((newData) => [...newData, alldata]);

    const newalldata = (newData) => {
      [...newData, inputRef.current.value];
      arrayAllData.push(inputRef.current.value);
    };
    setAllData(newalldata);
    console.log(alldata);
    //arrayAllData.push();
    // console.log(arrayAllData);
    //alldata.push(e.target.value);
    //  setAllData(alldata.push(e.target.value));
    //console.log(alldata);
  };

  const RemoveHandler = (id) => {
    setAllData((alldata) =>
      alldata.filter((alldata) => {
        return alldata.id !== id;
      })
    );
  };

  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => ChangeHandler(e.target.value)}
      />

      <button onClick={HandleAdd}>Add</button>

      {alldata.map((item, i) => (
        <li key={i}>
          {item}

          <button type="button" onClick={(e) => RemoveHandler(e.target.value)}>
            x
          </button>
        </li>
      ))}
    </div>
  );
};

export default Inputlist;

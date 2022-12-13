import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [Title, setTilte] = useState("");
  const [Amount, setAmount] = useState("");
  const [Date, setdate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (event) => {
    setTilte(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setdate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: Title,
      amount: Amount,
      date: Date,
    };
    console.log(expenseData);
    setTilte("");
    setAmount("");
    setdate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={Title}
            onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={Amount}
            onChange={amountChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-11-28"
            mix="2022-12-31"
            value={Date}
            onChange={dateChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="Submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

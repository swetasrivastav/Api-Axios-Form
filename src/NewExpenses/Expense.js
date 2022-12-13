import React from "react";
import "./Expense.css";
import ExpenseForm from "./ExpenseForm";

const Expense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default Expense;

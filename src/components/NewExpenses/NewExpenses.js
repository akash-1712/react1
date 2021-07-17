import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpensesForm";

function NewExpenses(props) {
  return (
    <div className="new-expense">
      <ExpenseForm></ExpenseForm>
    </div>
  );
}

export default NewExpenses;

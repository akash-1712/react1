import React, { useState } from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpensesForm";

function NewExpenses(props) {
  const [isEditing, setEditing] = useState(false);
  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
    setEditing(false);
  };
  const startEditingHandler = () => {
    setEditing(true);
  };
  const stopEditingHandler = () => {
    setEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>ADD NEW EXPENSES</button>
      )}
      {isEditing && (
        <ExpenseForm
          stopEditing={stopEditingHandler}
          onSaveExpenseData={expenseDataHandler}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpenses;

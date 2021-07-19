import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpensesForm";

function NewExpenses(props) {
  const expenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.addExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseDataHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpenses;

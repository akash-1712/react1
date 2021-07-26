import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enterTitle, changedTitle] = useState("");
  const [enterAmount, changeAmount] = useState("");
  const [enterDate, changeDate] = useState("");
  function changeTitleHandler(event) {
    changedTitle(event.target.value);
  }
  const changeAmountHandler = (e) => {
    changeAmount(e.target.value);
  };
  const changeDateHandler = (e) => {
    changeDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpenseData(expenseData);
    changeAmount("");
    changeDate("");
    changedTitle("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={changeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={changeAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-30"
            value={enterDate}
            onChange={changeDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.stopEditing} type="button">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

import React, { useState } from "react";
import "./Expensesitems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpensesItems(props) {
  const [title, setTitle] = useState(props.title);
  function clickHandler() {
    setTitle("update!!");
    console.log(title);
  }
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <Card className="expense-item">
      <ExpenseDate month={month} year={year} date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>click</button>
      </div>
    </Card>
  );
}

export default ExpensesItems;

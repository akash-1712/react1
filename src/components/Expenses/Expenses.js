import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilters/ExpensesFilters";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function NewExpenseItems(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const selectedYear = (givenYear) => {
    setFilterYear(givenYear);
  };

  const filteritems = props.expenses.filter((val) => {
    const Year = val.date.toLocaleString("en-US", { year: "numeric" });
    return Year === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filterYear}
          onChangeYear={selectedYear}
        ></ExpensesFilter>
      </Card>
      <Card className="expenses">
        <ExpensesChart expenses={filteritems}></ExpensesChart>
      </Card>

      <Card className="expenses">
        <ExpensesList items={filteritems}></ExpensesList>
      </Card>
    </div>
  );
}

export default NewExpenseItems;

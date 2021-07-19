import React, { useState } from "react";
import ExpensesItems from "./ExpensesItems";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilters/ExpensesFilters";

function NewExpenseItems(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const selectedYear = (givenYear) => {
    setFilterYear(givenYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filterYear}
          onChangeYear={selectedYear}
        ></ExpensesFilter>
      </Card>

      <Card className="expenses">
        {props.expenses.map((val) => {
          return (
            <ExpensesItems
              key={val.id}
              title={val.title}
              amount={val.amount}
              date={val.date}
            ></ExpensesItems>
          );
        })}
      </Card>
    </div>
  );
}

export default NewExpenseItems;

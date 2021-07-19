import React from "react";

import "./ExpensesFilters.css";

const ExpensesFilter = (props) => {
  const yearHandler = (e) => {
    const selectedYear = e.target.value;
    props.onChangeYear(selectedYear);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.defaultYear} onChange={yearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

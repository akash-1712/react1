import "./ExpensesList.css";
import ExpensesItems from "./ExpensesItems";

const ExpensesList = (props) => {
  let expensesConditional = <p>No items Found!</p>;
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((val) => {
        return (
          <ExpensesItems
            key={val.id}
            amount={val.amount}
            title={val.title}
            date={val.date}
          ></ExpensesItems>
        );
      })}
    </ul>
  );
};
export default ExpensesList;

import ExpensesItems from "./ExpensesItems";
import "./Expenses.css";
import Card from "./Card";

function NewExpenseItems(props) {
  return (
    <Card className="expenses">
      <ExpensesItems
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpensesItems
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpensesItems
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpensesItems
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
}

export default NewExpenseItems;
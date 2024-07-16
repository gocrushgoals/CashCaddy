// import ReactDOM from "react-dom";
import { useState } from "react";
import { SearchBar, SearchResultsList, NewExpenseModal } from "../components";
import { calculateBudget } from "../utils/";
import ExpenseCard from "./ExpenseCard";



export default function Home() {
  let arbitraryAmount = 100;
  let budgetAmount = arbitraryAmount;

  // Placeholder expenses list, to be replaced with db connection later on
  const [expenses, setExpenses] = useState([
    {
      title: "Ice-Cream",
      description: "bought tasty Ice-Cream :p",
      amount: 40,
      categories: ["food", "treat"],
    },
    {
      title: "Peanut",
      description: "one of them...",
      amount: 0.4,
      categories: ["treat", "NOT food"],
    },
  ]);

  const [results, setResults] = useState([]);

  return (
    <>
      <div className="budget">
        <h2 className="budget-title">Budget:</h2>
        <h3 className="budget-amount">{calculateBudget(budgetAmount, expenses)}</h3>
      </div>
      <NewExpenseModal setExpenses={setExpenses} />
      <SearchBar setResults={setResults} expenses={expenses}/>
      <SearchResultsList results={results} />
      <div className="expense-list">
        {expenses.map((expense, index) => (
          <ExpenseCard expense={expense} key={"expense" + index} />
        ))}
      </div>
    </>
  );
}

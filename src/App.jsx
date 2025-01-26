import { useState } from "react";
import Balance from "./components/Balance";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import "./App.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  const [transactions, setTransactions] = useState([]);

  
  function addTransaction(transaction) {
    setTransactions([transaction, ...transactions]);
  }

  
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  
  const editTransaction = (updatedTransaction) => {
    setTransactions(
      transactions.map((transaction) =>
        transaction.id === updatedTransaction.id ? updatedTransaction : transaction
      )
    );
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <Balance transactions={transactions} />
      <AddTransaction addTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        editTransaction={editTransaction}
      />
    </div>
  );
}

export default App;

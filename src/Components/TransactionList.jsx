/* eslint-disable react/prop-types */
import TransactionItem from "./TransactionItem";

const TransactionList = ({ transactions, deleteTransaction, editTransaction }) => {
  return (
    <div className="transaction-list">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
            editTransaction={editTransaction}
          />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

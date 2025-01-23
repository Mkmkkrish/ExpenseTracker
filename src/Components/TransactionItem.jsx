import { useState } from "react";

const TransactionItem = ({ transaction, deleteTransaction, editTransaction }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(transaction.description);
  const [amount, setAmount] = useState(transaction.amount);
  const [type, setType] = useState(transaction.type);

  const handleEditSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) return alert("Please fill all fields!");

    const updatedTransaction = { ...transaction, description, amount, type };
    editTransaction(updatedTransaction);
    setIsEditing(false);
  };

  return (
    <li className={transaction.type}>
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="credit">Income (Credit)</option>
            <option value="debit">Expense (Debit)</option>
          </select>
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          {transaction.description} <span>${transaction.amount.toFixed(2)}</span>
          <div className="actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
};

export default TransactionItem;

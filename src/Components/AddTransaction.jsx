import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTransaction = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("credit");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) return alert("Please fill all fields!");

    const newTransaction = {
      id: uuidv4(),
      description,
      amount: parseFloat(amount),
      type,
    };

    addTransaction(newTransaction);
    setDescription("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-transaction">
      <h3>Add Transaction</h3>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="credit">Income (Credit)</option>
        <option value="debit">Expense (Debit)</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTransaction;

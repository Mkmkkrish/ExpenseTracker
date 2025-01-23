const Balance = ({ transactions }) => {
  const balance = transactions.reduce(
    (acc, transaction) =>
      transaction.type === "credit" ? acc + transaction.amount : acc - transaction.amount,
    0
  );

  return (
    <div className="balance">
      <h2>Current Balance</h2>
      <h3>${balance.toFixed(2)}</h3>
    </div>
  );
};

export default Balance;

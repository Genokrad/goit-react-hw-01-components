import { TableRow } from './Transaction/Transaction';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => {
          return <TableRow key={transaction.id} transaction={transaction} />;
        })}
      </tbody>
    </table>
  );
};

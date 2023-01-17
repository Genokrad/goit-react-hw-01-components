import { TableRow } from './Transaction/Transaction';
import { StyledTable, StyledTableHead } from './Transaction.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <section>
      <StyledTable className="transaction-history">
        <thead>
          <tr>
            <StyledTableHead>Type</StyledTableHead>
            <StyledTableHead>Amount</StyledTableHead>
            <StyledTableHead>Currency</StyledTableHead>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => {
            return <TableRow key={transaction.id} transaction={transaction} />;
          })}
        </tbody>
      </StyledTable>
    </section>
  );
};

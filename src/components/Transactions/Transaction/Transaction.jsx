import { StyledTd, StyledTr } from '../Transaction.styled';

export const TableRow = ({ transaction }) => {
  const { type, amount, currency } = transaction;

  return (
    <StyledTr>
      <StyledTd>{type}</StyledTd>
      <StyledTd>{amount}</StyledTd>
      <StyledTd>{currency}</StyledTd>
    </StyledTr>
  );
};

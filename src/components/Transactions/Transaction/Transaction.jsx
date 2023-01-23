import PropTypes from 'prop-types';
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

TableRow.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

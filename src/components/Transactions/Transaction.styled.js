import styled from 'styled-components';

export const StyledTable = styled.table`
  padding: 40px;

  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
`;

export const StyledTableHead = styled.th`
  padding: 20px;
  background-color: slateblue;
`;

export const StyledTr = styled.tr`
  border: 1px solid black;
  &:nth-child(even) {
    background-color: aqua;
  }
`;

export const StyledTd = styled.td`
  border: 1px solid black;
  padding: 20px;
  text-align: center;
`;

export const TableSection = styled.section`
  padding: 20px;
`;

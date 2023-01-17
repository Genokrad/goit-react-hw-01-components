import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;

  flex-direction: column;
  /* background-color: black; */
  gap: 10px;
`;

export const StyledItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 20px;
  list-style: none;
  background-color: #f3f5f2;
  border-radius: 6px;
  border: 3px solid ${props => (props.isOnline ? 'green' : 'red')};
`;

export const StyledSpan = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const StyledP = styled.p`
  color: ${props => (props.isOnline ? '#363636' : 'red')};
`;

import { StyledItem, StyledSpan, StyledImg, StyledP } from '../Friends.styled';

export const Item = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <StyledItem isOnline={isOnline}>
      <StyledSpan isOnline={isOnline} />
      <StyledImg src={avatar} alt="User avatar" width="48" />
      <StyledP isOnline={isOnline}>{name}</StyledP>
    </StyledItem>
  );
};

import { Item } from './Item/Item';
import { StyledList } from './Friends.styled';

export const Friends = ({ friends }) => {
  return (
    <StyledList>
      {friends.map(friend => {
        return <Item key={friend.id} friend={friend} />;
      })}
    </StyledList>
  );
};

import PropTypes from 'prop-types';
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

Friends.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

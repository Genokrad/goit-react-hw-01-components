import { Item } from './Item/Item';

export const Friends = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return <Item key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};

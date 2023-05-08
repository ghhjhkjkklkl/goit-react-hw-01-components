import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => {
        return <FriendListItem {...friend} key={friend.id} />;
      })}
    </ul>
  );
}

FriendList.propTypes = { friends: PropTypes.array.isRequired };

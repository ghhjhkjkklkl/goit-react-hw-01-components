import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const onlineMarkerColor = 'green';
const offlineMarkerColor = 'red';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      {isOnline ? (
        <span
          className={css.status}
          style={{ backgroundColor: onlineMarkerColor }}
        ></span>
      ) : (
        <span
          className={css.status}
          style={{ backgroundColor: offlineMarkerColor }}
        ></span>
      )}
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;

import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendsList.module.css";

function FriendsList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => {
        const { avatar, name, id, isOnline } = friend;

        const status = [
          styles.status,
          isOnline ? styles.online : styles.offline,
        ];

        return (
          <li key={id} className={styles.item}>
            <span className={status.join(" ")}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="96" />
            <p className={styles.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendsList;

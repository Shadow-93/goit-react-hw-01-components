import React from "react";
import PropTypes from "prop-types";
import FriendsListItem from "./FriendsListItem";

import s from "./FriendsList.module.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, ...props }) => {
        return <FriendsListItem key={id} {...props} />;
      })}
    </ul>
  );
};

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

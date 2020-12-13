import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import s from "../FriendsList.module.css";

const FriendsListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? s.online : s.offline;

  return (
    <li className={s.item}>
      <span className={classNames(s.status, statusClass)}></span>
      <img className={s.avatar} src={avatar} alt={name} width="96" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;

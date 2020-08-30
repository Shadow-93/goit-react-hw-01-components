import React from 'react';
import PropTypes from 'prop-types';

function FriendsList({friends}) {

    return (
        <ul>
    {friends.map(friend => {
    const {avatar, name, id} = friend
    
    return (
        
    <li key={id} className="item">
        <span className="status"></span>
        <img src={avatar} alt={name} />
    <p className="name">{name}</p>
    </li>)
    })}
    </ul>)};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact ({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }))
}

export default FriendsList;
import React from "react";

import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendsList from "../FriendsList/FriendsList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import user from "../../json/user.json";
import statistics from "../../json/statistics.json";
import friends from "../../json/friends.json";
import transactions from "../../json/transactions.json";

import "./App.css";

export default function App() {
  const { name, tag, location, avatar, stats } = user;

  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <Statistics title="Upload stats" stats={statistics} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}

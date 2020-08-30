import React from "react";
import user from "../json/user.json";
import Profile from "./Profile/Profile";
import statistics from "../json/statistics.json";
import Statistics from "./Statistics/Statistics";
import friends from "../json/friends.json";
import FriendsList from "./FriendsList/FriendsList";
import transactions from "../json/transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import "./App.css";

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statistics} />

      <FriendsList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}

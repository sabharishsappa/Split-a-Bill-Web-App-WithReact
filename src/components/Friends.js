import "./../index.css";
import EachFriend from "./EachFriend";
import { useState } from "react";

export default function Friends({ friends, handleSplitBill, billWith }) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <EachFriend
            id={friend.id}
            imgSrc={friend.image}
            key={friend.id}
            name={friend.name}
            handleSplitBill={handleSplitBill}
            billWith={billWith}
          >
            <p
              className={
                friend.balance > 0 ? "green" : friend.balance < 0 ? "red" : ""
              }
            >
              {friend.balance == 0
                ? `You and ${friend.name} are even`
                : friend.balance > 0
                ? `${friend.name} owes you ${friend.balance}$`
                : `You owe ${friend.name} ${Math.abs(friend.balance)}$`}
            </p>
          </EachFriend>
        ))}
      </ul>
    </div>
  );
}

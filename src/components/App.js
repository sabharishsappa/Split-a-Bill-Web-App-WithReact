import { useState, useEffect } from "react";
import NewFriendForm from "./NewFriendForm";
import SideBar from "./SideBar";
import SplitBill from "./SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);

  function handleNewFriend(newFriend) {
    setFriends([...friends, { ...newFriend, id: Date.now(), balance: 0 }]);
  }

  const [billWithId, setBillWithId] = useState(-1);
  const [billWith, setBillWith] = useState({});

  function handleNewBill(bill) {
    // console.log(bill);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === bill.id
          ? {
              ...friend,
              balance: friend.balance + bill.amtToBeChanged,
            }
          : friend
      )
    );

    setBillWith({});
    setBillWithId(-1);
  }

  function handleSplitBill(id) {
    if (id === billWithId) {
      setBillWithId(-1);
      setBillWith({});
    } else {
      setBillWithId(id);
      setBillWith(friends.filter((friend) => friend.id === id));
    }
  }

  return (
    <div className="app">
      <SideBar
        friends={friends}
        handleNewFriend={handleNewFriend}
        handleSplitBill={handleSplitBill}
        billWith={billWithId}
      />
      {billWithId !== -1 ? (
        <SplitBill billWith={billWith[0]} onSplitBill={handleNewBill} />
      ) : null}
    </div>
  );
}

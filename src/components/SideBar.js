import { useState } from "react";
import Friends from "./Friends";
import NewFriendForm from "./NewFriendForm";

export default function SideBar({
  handleSplitBill,
  billWith,
  friends,
  handleNewFriend,
}) {
  const [addAFriend, setAddAFriend] = useState(false);
  function handleAddAFriend() {
    setAddAFriend(!addAFriend);
  }

  return (
    <div className="sidebar">
      <Friends
        friends={friends}
        handleSplitBill={handleSplitBill}
        billWith={billWith}
      />
      {addAFriend ? (
        <NewFriendForm
          handleAdd={handleNewFriend}
          handleNewFrndForm={handleAddAFriend}
        />
      ) : null}
      <button className="button" onClick={() => handleAddAFriend()}>
        {addAFriend ? "Close" : "Add a Friend"}
      </button>
    </div>
  );
}

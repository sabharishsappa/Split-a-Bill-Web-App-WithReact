import { useState } from "react";
import "./../index.css";
import Input from "./Input";

export default function NewFriendForm({ handleAdd, handleNewFrndForm }) {
  const [newFrndName, setNewFrndName] = useState("");
  const [newFrndImg, setNewFrndImg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleAdd({ name: newFrndName, image: newFrndImg });
    setNewFrndImg("");
    setNewFrndName("");
    handleNewFrndForm();
  }

  function handleFrndName(newVal) {
    setNewFrndName(newVal);
  }
  function handleFrndImg(newVal) {
    setNewFrndImg(newVal);
  }

  return (
    <form className="form form-add-friend">
      {/* <span className="emoji">👫</span>
      <label>Friend Name</label>
      <input type="text"></input>

      <span className="emoji"></span>
      <label>Image URL</label>
      <input type="text"></input> */}

      <Input
        emoji="👫"
        type="text"
        handleChange={handleFrndName}
        value={newFrndName}
      >
        {" "}
        Friend Name
      </Input>
      <Input
        emoji="🌄"
        type="text"
        value={newFrndImg}
        handleChange={handleFrndImg}
      >
        {" "}
        Image URL
      </Input>

      <button className="button" onClick={(e) => handleSubmit(e)}>
        Add
      </button>
    </form>
  );
}

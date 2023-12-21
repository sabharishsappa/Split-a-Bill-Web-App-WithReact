import { useState } from "react";
import "./../index.css";
import Input from "./Input";

export default function SplitBill({ billWith, onSplitBill }) {
  const [billValue, setBillvalue] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [frndsExpense, setFrndsExpense] = useState("");
  const [whoPaid, setWhoPaid] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(frndsExpense);
    // console.log(myExpense);

    const amtToBeChanged =
      Number(whoPaid) === 1 ? Number(frndsExpense) : Number(-1 * myExpense);

    onSplitBill({
      amtToBeChanged,
      id: billWith.id,
    });
  }

  function handleBillValue(amt) {
    setBillvalue(amt);
    setMyExpense(amt / 2);
    setFrndsExpense(amt / 2);
  }

  function handleMyExpense(amt) {
    setMyExpense(amt);
    setFrndsExpense(billValue - amt);
  }

  return (
    <form className=" form form-split-bill">
      <h2>SPLIT A BILL WITH {billWith.name}</h2>
      <>
        <Input
          emoji="💰"
          type="text"
          value={billValue}
          handleChange={handleBillValue}
          //   placeholder={""}
        >
          Bill value
        </Input>
        <Input
          emoji="🧍‍♀️"
          type="text"
          value={myExpense}
          handleChange={handleMyExpense}
          //   placeholder={""}
        >
          Your expense
        </Input>

        <label> 👫 {billWith.name}'s expense</label>
        <input
          disabled
          type="text"
          value={frndsExpense}
          //   onChange={handleFrndExpense}
        ></input>

        {/* <Input
          emoji="👫"
          type="number"
          value={frndsExpense}
          handleChange={handleFrndExpense}
          placeholder={""}
        >
          {billWith.name}'s expense
        </Input> */}

        <label>🤑 Who is paying the bill?</label>
        <select value={whoPaid} onChange={(e) => setWhoPaid(e.target.value)}>
          <option key={1} value={1}>
            You
          </option>
          <option key={2} value={2}>
            {billWith.name}
          </option>
        </select>
      </>
      <button
        className="button"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Split Bill
      </button>
    </form>
  );
}

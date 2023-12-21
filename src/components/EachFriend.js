import "./../index.css";

export default function EachFriend({
  id,
  name,
  imgSrc,
  children,
  handleSplitBill,
  billWith,
}) {
  return (
    <div>
      <li>
        <img src={imgSrc} className="image" alt=""></img>
        <div>
          <h3 className="friendName">{name}</h3>
          {children}
        </div>
        <button className="button" onClick={() => handleSplitBill(id)}>
          {billWith === id ? "Close" : "Select"}
        </button>
      </li>
    </div>
  );
}

import "./../index.css";

export default function Input({
  emoji,
  children,
  type,
  handleChange,
  value,
  placeholder,
}) {
  return (
    <>
      <label className="label">
        {emoji} {children}
      </label>
      <input
        type={type}
        className="input"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
      ></input>
    </>
  );
}

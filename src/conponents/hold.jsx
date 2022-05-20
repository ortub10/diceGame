import "./style.css";
function Hold({ onHold }) {
  return (
    <div className="contain_hold">
      <button onClick={onHold}>HOLD</button>
    </div>
  );
}

export default Hold;

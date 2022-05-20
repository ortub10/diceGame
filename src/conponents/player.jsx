import "./style.css";
function Player({ name, totalScore, currentScore }) {
  return (
    <div className="contain_player">
      <h1>{name}</h1>
      <p>{totalScore}</p>
      <div>
        current
        <p>{currentScore}</p>
      </div>
    </div>
  );
}

export default Player;

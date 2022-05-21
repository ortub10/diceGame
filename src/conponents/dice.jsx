import React from "react";
import "./style.css";
import empty from "../images/empty.jpg";
import dice1 from "../images/dice-1.png";
import dice2 from "../images/dice-2.png";
import dice3 from "../images/dice-3.png";
import dice4 from "../images/dice-4.png";
import dice5 from "../images/dice-5.png";
import dice6 from "../images/dice-6.png";
class Dice extends React.Component {
  state = {
    firstDice: empty,
    secondDice: empty,
  };

  onRollDice = (arrDice) => {
    if (!this.props.isGameOver) {
      const dice1 = Math.floor(Math.random() * arrDice.length);
      const dice2 = Math.floor(Math.random() * arrDice.length);
      this.setState({ firstDice: arrDice[dice1] });
      this.setState({ secondDice: arrDice[dice2] });
      this.props.sendScore(dice1 + 1, dice2 + 1);
    }
  };
  render() {
    const arrDice = [dice1, dice2, dice3, dice4, dice5, dice6];
    return (
      <div className="contain_dice">
        <img src={this.state.firstDice} alt="" />
        <img src={this.state.secondDice} alt="" />
        <button onClick={() => this.onRollDice(arrDice)}>ROLL DICE</button>
      </div>
    );
  }
}

export default Dice;

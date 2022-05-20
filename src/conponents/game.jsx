import React from "react";
import Player from "./player";
import Dice from "./dice";
import Hold from "./hold";
import "./style.css";
class Game extends React.Component {
  state = {
    totalScore1: 0,
    currentScore1: 0,
    totalScore2: 0,
    currentScore2: 0,
    turn: 1,
    firstRoll: false,
    isGameOver: false,
    scoreToWin: 100,
  };
  getScore = (score) => {
    if (!this.state.isGameOver) {
      this.setState({ firstRoll: true });
      if (this.state.turn === 1) {
        this.setState((prevState) => {
          return { currentScore1: prevState.currentScore1 + score };
        });
      } else if (this.state.turn === 2) {
        this.setState((prevState) => {
          return { currentScore2: prevState.currentScore2 + score };
        });
      }
    }
  };

  onHold = () => {
    if (this.state.firstRoll) {
      this.setState({ firstRoll: false });
      switch (this.state.turn) {
        case 1:
          this.setState(
            (prevState) => {
              return {
                totalScore1: prevState.totalScore1 + prevState.currentScore1,
                currentScore1: 0,
                turn: 2,
              };
            },
            () => {
              if (this.state.totalScore1 === this.state.scoreToWin) {
                this.setState({ isGameOver: true, turn: 1 });
              } else if (this.state.totalScore1 > this.state.scoreToWin) {
                this.setState({ isGameOver: true });
              }
            }
          );
          break;

        case 2:
          this.setState(
            (prevState) => {
              return {
                totalScore2: prevState.totalScore2 + prevState.currentScore2,
                currentScore2: 0,
                turn: 1,
              };
            },
            () => {
              if (this.state.totalScore2 === this.state.scoreToWin) {
                this.setState({ isGameOver: true, turn: 2 });
              } else if (this.state.totalScore2 > this.state.scoreToWin) {
                this.setState({ isGameOver: true });
              }
            }
          );
          break;
        default:
          console.log("not fount");
      }
    }
  };
  render() {
    return (
      <div>
        <button id="new_game" onClick={() => window.location.reload()}>
          NEW GAME
        </button>
        <div className="contain_game">
          <div>
            <Player
              name="Player 1"
              totalScore={this.state.totalScore1}
              currentScore={this.state.currentScore1}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <Dice
              sendScore={this.getScore}
              isGameOver={this.state.isGameOver}
            />
            <Hold onHold={this.onHold} />
            <input
              onChange={(e) => {
                this.setState({
                  scoreToWin:
                    e.target.value === ""
                      ? 100
                      : Number.parseInt(e.target.value),
                });
              }}
              type="text"
            />
          </div>
          <div>
            <Player
              name="Player 2"
              totalScore={this.state.totalScore2}
              currentScore={this.state.currentScore2}
            />
          </div>
        </div>
        <p className="detailes">
          {!this.state.isGameOver &&
            `Player ${this.state.turn === 1 ? 1 : 2} is your turn`}
        </p>
        <h1 className="detailes">
          {this.state.isGameOver &&
            (this.state.turn === 1 ? "player1 won!!" : "player2 won!!")}
        </h1>
      </div>
    );
  }
}
export default Game;

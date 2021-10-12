import { useState } from "react";
import "./App.css";
import Board from "./Board";
import { Card } from "./deck";
import { useLoteria } from "./useLoteria";

function App() {
  const {
    currentCard,
    drawn,
    evaluateWinner,
    generateBoard,
    getRandomCard,
    initialDeck,
  } = useLoteria();

  const [userBoard, setUserBoard] = useState(generateBoard());
  const [isWinner, setIsWinner] = useState(false);
  const handleWinner = (cards: Card[]) => {
    setIsWinner(evaluateWinner(cards));
  };
  return (
    <div className="App">
      <div className="header">
        <a href="#" id="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png"
            alt=""
          />
        </a>
        <div className="header__right">
          <div className="created-by">
            <span>
              Made by:{" "}
              <a href="https://sayeemahmed.netlify.app/" target="_blank">
                Sayeem
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="appBody">
        <header>
          <h1 className="loteriaText">
            Lotería!{" "}
            <span>
              <a href="https://www.wikihow.com/Play-Loteria" target="_blank">
                How to play
              </a>
            </span>
          </h1>
          <h1>{isWinner && "ES LA BUENA"}</h1>
        </header>
        <div className="gameBoard">
          <div className="mainBoard">
            <div className="userBoard">
              <div className="userBoard__header">
                <h3>My Board</h3>
                <div className="drawCard">
                  <div>{currentCard?.emoji || "No card drawn yet"}</div>
                  <button
                    onClick={getRandomCard}
                    disabled={initialDeck.length === 0 ? true : false}
                  >
                    {initialDeck.length !== 0
                      ? "Draw a card"
                      : "No more cards to draw"}
                  </button>
                </div>
              </div>
              <Board cards={userBoard} onLoteria={handleWinner} />
              <div className="deck">
                <h3>Initial Deck</h3>
                <ul>
                  {initialDeck.map((card) => {
                    return (
                      <li key={card.name}>
                        {card.emoji} - {card.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="drawn">
              <h3>Cards drawn</h3>
              <ul>
                {drawn.map((card) => {
                  return (
                    <li key={card.name}>
                      <span>{card.emoji}</span>
                      <span>{card.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <span id="specialThanks">
          Special Thanks to{" "}
          <a href="https://twitter.com/xnt" target="_blank">
            Vincente Plata
          </a>{" "}
          and{" "}
          <a href="https://twitter.com/The_NaoX" target="_blank">
            Antonio Chavez
          </a>{" "}
          for the{" "}
          <a href="https://youtube.com/watch?v=SwRKNuQhLrs" target="_blank">
            #CodeShow
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;

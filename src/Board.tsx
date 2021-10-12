import React, { useState } from "react";
import { Card } from "./deck";
import "./Board.css";

interface Props {
  cards: Card[];
  onLoteria: (selected: Card[]) => void;
}

export default function Board({ cards, onLoteria }: Props) {
  const [selected, setSelected] = useState<Card[]>([]);
  //console.log(selected);

  const handleCardSelected = (card: Card) => {
    if (selected.includes(card)) {
      setSelected((currentSelected) =>
        currentSelected.filter((csCard) => card.emoji !== csCard.emoji)
      );
      return;
    }
    setSelected([...selected, card]);
  };

  const checkWinningCondition = () => {
    onLoteria(selected);
  };
  return (
    <>
      <div className="myBoard">
        {cards.map((card) => {
          const active = selected.includes(card);
          return (
            <div
              key={card.name}
              className={`myCard ${active && "active"}`}
              onClick={() => handleCardSelected(card)}
            >
              <div className="myCard__emoji">{card.emoji}</div>
              <div className="myCard__name">{card.name}</div>
            </div>
          );
        })}
      </div>
      <button
        className="winnerButton"
        onClick={checkWinningCondition}
        disabled={selected.length === 12 ? false : true}
      >
        ¡¡ LOTERIA !!
      </button>
    </>
  );
}

import { useState } from "react";
import { Card, deck } from "./deck";

export const useLoteria = () => {
  const [initialDeck, setInitialDeck] = useState(deck);
  const [drawn, setDrawn] = useState<Card[]>([]);
  const [currentCard, setCurrentCard] = useState<Card | undefined>();

  const getRandomCard = () => {
    const newRandomCardIndex = Math.floor(Math.random() * initialDeck.length);
    const newRandomCard = initialDeck[newRandomCardIndex];
    setInitialDeck((deck) => {
      return deck.filter((card) => card.emoji !== newRandomCard.emoji);
    });
    setDrawn([...drawn, newRandomCard]);

    setCurrentCard(newRandomCard);
  };

  const generateBoard = () => {
    // get 12 random cards
    const randomizedDeck = deck.sort(() => Math.random() - 0.5);

    return randomizedDeck.slice(0, 12);
  };
  // const evaluateWinner = (board: Card[]) =>
  //   board.every((boardCard) => drawn.includes(boardCard));
  const evaluateWinner = (board: Card[]) => {
    return board.every((boardCard) => drawn.includes(boardCard));
  };
  const grid = () => [];
  return {
    currentCard,
    initialDeck,
    drawn,
    generateBoard,
    getRandomCard,
    evaluateWinner,
    grid,
  };
};

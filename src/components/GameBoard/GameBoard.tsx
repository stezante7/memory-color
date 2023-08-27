import { Button } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { ScorePanel, YouLoose, YouWin } from "./GameBoard.Styled";
import GameLevel from "../GameLevel";
import { generateDeck } from "../../utils/deck";

const calculateDeckSize = (level: number) => {
  const startingDeckDimension = 2;
  const dimensionFactor = level * 2;

  const deckSize =
    (startingDeckDimension + dimensionFactor) *
    (startingDeckDimension + dimensionFactor);

  return deckSize;
};

const COUPLE_FOUND_SCORE_INCREMENT = 50;

const GameBoard: FC = () => {
  const [level, setLevel] = useState(0);

  const initialDeckSize = calculateDeckSize(level);
  const [movesLeft, setMovesLeft] = useState(initialDeckSize);
  const [deck, setDeck] = useState(generateDeck(initialDeckSize));
  const [foundCardsIds, setFoundCardsIds] = useState([] as number[]);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);

  const handleCoupleFound = (cardAId: number, cardBId: number) => {
    setFoundCardsIds([...foundCardsIds, cardAId, cardBId]);
    setMovesLeft(movesLeft + 1);
    setScore(score + COUPLE_FOUND_SCORE_INCREMENT);
  };

  const handleCoupleNotFound = () => {
    setMovesLeft(movesLeft - 1);
  };

  const nextLevel = () => {
    const deckSize = calculateDeckSize(level + 1);

    setMovesLeft(deckSize);
    setLevel(level + 1);
    setDeck(generateDeck(deckSize));
    setFoundCardsIds([]);
  };

  const resetGame = () => {
    const deckSize = calculateDeckSize(0);

    setMovesLeft(deckSize);
    setLevel(0);
    setScore(0);
    setDeck(generateDeck(deckSize));
    setFoundCardsIds([]);
  };

  useEffect(() => {
    if (movesLeft === 0 && score > best) {
      setBest(score);
    }
  });

  const youWin = foundCardsIds.length === deck.length;
  const youLoose = movesLeft === 0;

  return (
    <>
      <ScorePanel>
        <div>Moves left: {movesLeft}</div>
        <div>
          <span>Score: {score}</span>
          <span className="divider">Best: {best === 0 ? "-" : best}</span>
        </div>
      </ScorePanel>
      <GameLevel
        deck={deck}
        onCoupleFound={handleCoupleFound}
        onCoupleNotFound={handleCoupleNotFound}
        foundCardsIds={foundCardsIds}
      />
      {youWin && (
        <YouWin>
          <div>
            <h2>
              Level Complete!<span className="celebration"></span>
            </h2>
            <h3>- Cowabunga -</h3>
            <Button
              onClick={nextLevel}
              variant="contained"
              size="large"
              className="nextLevel"
            >
              Next Level
            </Button>
          </div>
        </YouWin>
      )}
      {youLoose && (
        <YouLoose>
          <div>
            <h4>
              Final Score: <span className="finalScore">{score}</span>{" "}
              {score === best && (
                <span>
                  - Best Score <span className="bestScore"></span>
                </span>
              )}
            </h4>
            <h2>Oh no - you have run out of moves!</h2>
            <h3>- ba ba ba - </h3>
            <Button
              onClick={resetGame}
              variant="contained"
              size="large"
              color="warning"
              className="anotherGameBtn"
            >
              One more, please!
            </Button>
          </div>
        </YouLoose>
      )}
    </>
  );
};

export default GameBoard;

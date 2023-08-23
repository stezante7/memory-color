import { Button, Typography } from "@mui/material";
import { FC, useState } from "react";
import { ScorePanel, YouWin } from "./GameBoard.Styled";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
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

const GameBoard: FC = () => {
  const [level, setLevel] = useState(0);

  const initialDeckSize = calculateDeckSize(level);
  const [movesLeft, setMovesLeft] = useState(initialDeckSize);
  const [deck, setDeck] = useState(generateDeck(initialDeckSize));
  const [foundCardsIds, setFoundCardsIds] = useState([] as number[]);

  const handleCoupleFound = (cardAId: number, cardBId: number) => {
    setFoundCardsIds([...foundCardsIds, cardAId, cardBId]);
    setMovesLeft(movesLeft - 1);
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

  const youWin = foundCardsIds.length === deck.length;

  return (
    <>
      <ScorePanel>
        <span>Moves left: {movesLeft}</span>
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
    </>
  );
};

export default GameBoard;

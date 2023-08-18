import { Typography } from "@mui/material";
import { FC, useMemo, useState } from "react";
import { MemoryCard } from "../../_types";
import FlippingCard from "../FlippingCard";
import { GameBoardContainer, ScorePanel, YouWin } from "./GameBoard.Styled";
import { wait } from "../../utils/wait";
import { generateDeck } from "../../utils/deck";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const GameBoard: FC = () => {
  const deckSize = 16;

  const scorePenalty = 5;

  const { ids, cards } = useMemo(() => generateDeck(deckSize), []);
  const [selectedCards, setSelectedCards] = useState([] as MemoryCard[]);
  const [foundCardsIds, setFoundCardsIds] = useState([] as number[]);
  const [score, setScore] = useState(0);
  const [scoreIncrement, setScoreIncrement] = useState(50);

  const handleCardClick = async (selectedCard: MemoryCard) => {
    const isCardAlreadySelected = selectedCards.some(
      (card) => card.id === selectedCard.id
    );

    if (selectedCards.length >= 2 || isCardAlreadySelected) {
      return;
    }

    setSelectedCards([...selectedCards, selectedCard]);

    if (selectedCards.length === 1) {
      await wait(1000); // Wait time to show the card before checking results

      const prevSelected = selectedCards[0];

      if (prevSelected.value === selectedCard.value) {
        setFoundCardsIds([...foundCardsIds, prevSelected.id, selectedCard.id]);
        setScore(score + scoreIncrement);
      } else {
        const scoreWithPenality = scoreIncrement - scorePenalty;
        setScoreIncrement(scoreWithPenality < 0 ? 0 : scoreWithPenality);
      }

      setSelectedCards([]);
    }
  };

  const youWin = foundCardsIds.length === deckSize;

  return (
    <>
      <ScorePanel>
        <span>
          Score: {score} (+{scoreIncrement})
        </span>
      </ScorePanel>
      <GameBoardContainer>
        {ids.map((id) => {
          const deckCard = cards[id];

          return (
            <FlippingCard
              key={`${id}_card`}
              card={deckCard}
              selected={selectedCards.map((card) => card.id).includes(id)}
              found={foundCardsIds.includes(id)}
              onClick={() => handleCardClick(deckCard)}
            />
          );
        })}
      </GameBoardContainer>
      {youWin && (
        <YouWin>
          <div>
            <Typography variant="h2">You win!</Typography>
            <Typography variant="h3">
              Well done mate{" "}
              <EmojiEventsIcon fontSize="large"></EmojiEventsIcon>
            </Typography>
          </div>
        </YouWin>
      )}
    </>
  );
};

export default GameBoard;

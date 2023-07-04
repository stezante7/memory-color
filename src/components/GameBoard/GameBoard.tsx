import { Typography } from "@mui/material";
import { FC, useMemo, useState } from "react";
import { MemoryCard } from "../../_types";
import FlippingCard from "../FlippingCard";
import { GameBoardContainer, YouWin } from "./GameBoard.Styled";
import { wait } from "../../utils/wait";
import { GenerateDeck } from "../../utils/deck";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const GameBoard: FC = () => {
  const deckSize = 16;
  const { ids, cards } = useMemo(() => GenerateDeck(deckSize), []);
  const [selectedCards, setSelectedCards] = useState([] as MemoryCard[]);
  const [foundCardsIds, setFoundCardsIds] = useState([] as number[]);

  const handleCardClick = async (selectedCard: MemoryCard) => {
    if (selectedCards.length >= 2) {
      return;
    }

    setSelectedCards([...selectedCards, selectedCard]);

    if (selectedCards.length === 0) {
      return;
    }

    await wait(1000);

    const prevSelected = selectedCards[0];

    if (prevSelected.value === selectedCard.value) {
      setFoundCardsIds([...foundCardsIds, prevSelected.id, selectedCard.id]);
    }

    setSelectedCards([]);
  };

  const youWin = foundCardsIds.length === deckSize;

  return (
    <>
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

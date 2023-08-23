import { useState } from "react";
import FlippingCard from "../FlippingCard";
import { GameLevelWrapper } from "./GameLevel.Styled";
import { MemoryCard } from "../../_types";
import { wait } from "../../utils/wait";

interface Props {
  deck: MemoryCard[];
  foundCardsIds: number[];
  onCoupleFound: (cardAId: number, cardBId: number) => void;
  onCoupleNotFound: () => void;
}

const GameLevel = ({
  deck,
  foundCardsIds,
  onCoupleFound,
  onCoupleNotFound,
}: Props) => {
  const [selectedCards, setSelectedCards] = useState([] as MemoryCard[]);

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
        onCoupleFound(prevSelected.id, selectedCard.id);
      } else {
        onCoupleNotFound();
      }

      setSelectedCards([]);
    }
  };

  const rowSize = Math.sqrt(deck.length);

  return (
    <GameLevelWrapper rowSize={rowSize}>
      {deck.map((card) => (
        <FlippingCard
          key={`${card.id}_card`}
          card={card}
          selected={selectedCards.map((card) => card.id).includes(card.id)}
          found={foundCardsIds.includes(card.id)}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </GameLevelWrapper>
  );
};

export default GameLevel;

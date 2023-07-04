import { FC } from "react";
import {
  FlippingCardBack,
  FlippingCardFrame,
  FlippingCardFront,
  FlippingCardInner,
} from "./FlippingCard.Styled";
import { MemoryCard } from "../../_types";

interface Props {
  card: MemoryCard;
  onClick: () => void;
  selected: boolean;
  found: boolean;
}

const FlippingCard: FC<Props> = ({ card, onClick, found, selected }) => {
  const handleCardClick = () => {
    onClick();
  };

  return (
    <FlippingCardFrame>
      <FlippingCardInner flipped={found || selected}>
        <FlippingCardFront color={card.color}></FlippingCardFront>
        <FlippingCardBack onClick={handleCardClick}></FlippingCardBack>
      </FlippingCardInner>
    </FlippingCardFrame>
  );
};
export default FlippingCard;

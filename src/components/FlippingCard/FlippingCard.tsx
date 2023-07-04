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

const decimalToRgb = (decimal: number) => {
  const decimalWithFactor = decimal * 7;
  return (
    "#" +
    ((decimalWithFactor >> 16) & 0xff) +
    ((decimalWithFactor >> 8) & 0xff) +
    (decimalWithFactor & 0xff)
  );
};

const FlippingCard: FC<Props> = ({ card, onClick, found, selected }) => {
  const handleCardClick = () => {
    onClick();
  };

  return (
    <FlippingCardFrame>
      <FlippingCardInner flipped={found || selected}>
        <FlippingCardFront color={decimalToRgb(card.value)}></FlippingCardFront>
        <FlippingCardBack onClick={handleCardClick}></FlippingCardBack>
      </FlippingCardInner>
    </FlippingCardFrame>
  );
};
export default FlippingCard;

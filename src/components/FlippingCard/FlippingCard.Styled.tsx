import styled from "@emotion/styled";
import PestControlRodentIcon from "@mui/icons-material/PestControlRodent";
import { css } from "@emotion/react";

export const FlippingCardFrame = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  &:hover {
    transform: scale(1.02);
  }
`;

export const FlippingCardInner = styled.div<{ flipped: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 15px;

  &:hover {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    cursor: pointer;
  }

  ${(props) =>
    props.flipped &&
    css`
      transform: rotateY(180deg);
    `}
`;

const FlippingCardFace = css`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border-radius: 10px;
`;

export const FlippingCardFront = styled.div`
  ${FlippingCardFace};
  box-shadow: 0 0 0 5px #fff inset;
  background-color: ${(props) => props.color};
  transform: rotateY(180deg);
`;

export const FlippingCardBack = styled.div`
  ${FlippingCardFace};

  box-shadow: 0 0 0 5px #fff inset;
  background-image: url(./splash.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 40% 40%;
  background-color: #ffeee3;
  color: white;
`;

export const BackCardIcon = styled(PestControlRodentIcon)`
  color: #fff;
  width: 50%;
  height: 50%;
`;

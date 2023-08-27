import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { bounce } from "react-animations";

const bounceAnimation = keyframes`${bounce}`;

interface GameLevelWrapperProps {
  rowSize: number;
}

export const GameLevelWrapper = styled.div<GameLevelWrapperProps>`
  display: grid;
  grid-template-rows: ${(props) => `repeat(${props.rowSize}, 1fr)`};
  grid-template-columns: ${(props) => `repeat(${props.rowSize}, 1fr)`};
  height: 80vh;
  width: 80vh;
  max-width: 95vw;
  max-height: 95vw;
  gap: 12px;
  margin: 0px auto;

  animation: 1s ${bounceAnimation};
`;

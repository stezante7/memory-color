import { FC } from "react";
import {
  OverlayLabel,
  PlayButton,
  PlayButtonWrapper,
} from "./SplashScreenPage.Styled";
import { useNavigate } from "react-router-dom";

const SplashScreenPage: FC = () => {
  const navigate = useNavigate();

  const playGame = async () => {
    navigate("/play");
  };

  return (
    <PlayButtonWrapper>
      <PlayButton onClick={playGame}>
        <OverlayLabel>PLAY!</OverlayLabel>
      </PlayButton>
    </PlayButtonWrapper>
  );
};

export default SplashScreenPage;

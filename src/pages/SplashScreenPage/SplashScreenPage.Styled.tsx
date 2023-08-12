import styled from "@emotion/styled";

export const PlayButtonWrapper = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  margin-top: 10%;
`;

export const OverlayLabel = styled.div`
  position: absolute;
  font-size: 2.5em;
  color: #6a7298;
  margin: 0 auto;
  bottom: 10%;
  width: 100%;
  text-align: center;
`;

export const PlayButton = styled.button`
  position: relative;
  border-color: #fff;
  border-style: solid;
  border-width: 20px;
  border-radius: 100%;
  height: 100%;
  width: 100%;
  max-width: 400px;
  max-height: 400px;
  cursor: pointer;

  background-image: url(./splash.png);
  background-size: content;
  background-repeat: no-repeat;
  background-position: 50% 20%;
  background-color: #ffeee3;

  box-shadow: 0 10px 20px rgb(0 0 0 / 0.1);

  &:hover {
    box-shadow: 0 10px 20px rgb(0 0 0 / 0.3);
    transform: scale(1.01);
  }
`;

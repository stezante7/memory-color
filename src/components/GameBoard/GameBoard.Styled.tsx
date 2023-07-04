import styled from "@emotion/styled";

export const GameBoardContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 80vh;
  width: 80vh;
  max-width: 95vw;
  max-height: 95vw;
  gap: 12px;
  margin: 5% auto;
`;

export const YouWin = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;

  div {
    margin: 20%;
    color: #fff;
    text-align: center;
  }
`;

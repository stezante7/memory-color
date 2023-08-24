import styled from "@emotion/styled";

export const ScorePanel = styled.div`
  width: 80vh;
  margin: 20px auto 20px;
  padding: 0px 20px 0px 20px;
  color: #fff;
  font-size: 2.2em;

  .movesLeft {
    width: 60%;
  }

  .scores {
    width: 40%;
  }

  div {
    display: inline-block;
    vertical-align: top;

    span {
      font-size: 0.7em;
      display: block;
      width: 100%;
      text-align: right;
    }
    .divider {
      border-top: solid;
    }
  }
`;

export const YouWin = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  width: 100%;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;

  h2 {
    font-size: 4em;

    span.celebration {
      height: 2em;
      width: 2em;

      display: block;
      background-position-x: right;
      background-image: url("./celebration.png");
      background-repeat: no-repeat;
      background-size: contain;

      margin: 0 auto;
    }
  }

  h3 {
    font-size: 3em;
  }

  div {
    margin: 10% 20% 10% 20%;
    color: #727272;
    text-align: center;
  }

  .nextLevel {
    font-family: "Caveat", cursive;
    font-size: 1.5em;
  }
`;

export const YouLoose = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  height: 100%;
  width: 100%;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;

  div {
    margin: 10% 20% 10% 20%;
    color: #e4e4e4;
    text-align: center;
  }

  h2 {
    font-size: 4em;
  }

  h3 {
    font-size: 3em;
  }

  h4 {
    font-size: 3em;
    border-bottom: solid;
  }

  .finalScore {
    color: gold;
    font-size: 0.8em;
  }

  .anotherGameBtn {
    font-family: "Caveat", cursive;
    font-size: 1.5em;
  }

  .bestScore {
    background-image: url("./star.png");
    background-size: contain;
    width: 20px;
    height: 20px;
    display: inline-block;
  }
`;

import styled from "@emotion/styled";

const buildGridTemplateCss = (rows: number) =>
  Array.from(Array(rows)).reduce((acc, _) => acc + " 1fr", "");

interface GameLevelWrapperProps {
  rowSize: number;
}

export const GameLevelWrapper = styled.div<GameLevelWrapperProps>`
  display: grid;
  grid-template-rows: ${(props) => buildGridTemplateCss(props.rowSize)};
  grid-template-columns: ${(props) => buildGridTemplateCss(props.rowSize)};
  height: 80vh;
  width: 80vh;
  max-width: 95vw;
  max-height: 95vw;
  gap: 12px;
  margin: 0px auto;
`;

import { Deck } from "../_types";

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  const color = [...Array(6).keys()].reduce(
    (acc, _) => acc + letters[Math.floor(Math.random() * 16)],
    ""
  );

  return `#${color}`;
};

export const generateDeck = (
  deckSize: number
): { ids: number[]; cards: Deck } => {
  const ids = [...Array(deckSize).keys()].sort(() => Math.random() - 0.5);
  const colors = [...Array(deckSize).keys()].reduce(
    (acc, idx) =>
      idx % 2 != 0 ? [...acc, acc[idx - 1]] : [...acc, generateRandomColor()],
    [] as string[]
  );

  return {
    ids,
    cards: ids.reduce(
      (acc, idx) => ({
        ...acc,
        [idx]: {
          id: idx,
          value: idx % 2 != 0 ? idx - 1 : idx,
          color: colors[idx],
        },
      }),
      {} as { ids: number[]; cards: Deck }
    ),
  };
};

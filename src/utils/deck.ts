import { MemoryCard } from "../_types";

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  const color = [...Array(6).keys()].reduce(
    (acc, _) => acc + letters[Math.floor(Math.random() * 16)],
    ""
  );

  return `#${color}`;
};

export const generateDeck = (deckSize: number): MemoryCard[] => {
  const ids = [...Array(deckSize).keys()].sort(() => Math.random() - 0.5);
  const colors = [...Array(deckSize).keys()].reduce(
    (acc, idx) =>
      idx % 2 != 0 ? [...acc, acc[idx - 1]] : [...acc, generateRandomColor()],
    [] as string[]
  );

  const cards = ids.reduce(
    (acc, idx) => [
      ...acc,
      {
        id: idx,
        value: idx % 2 != 0 ? idx - 1 : idx,
        color: colors[idx],
      },
    ],
    [] as MemoryCard[]
  );

  return cards;
};

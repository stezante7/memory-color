import { Deck } from "../_types";

export const GenerateDeck = (
  deckSize: number
): { ids: number[]; cards: Deck } => {
  const ids = [...Array(deckSize).keys()].sort(() => Math.random() - 0.5);

  return {
    ids,
    cards: ids.reduce(
      (acc, idx) => ({
        ...acc,
        [idx]: {
          id: idx,
          value: idx % 2 != 0 ? idx - 1 : idx,
        },
      }),
      {}
    ),
  };
};

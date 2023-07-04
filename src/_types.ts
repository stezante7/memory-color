export type MemoryCard = {
  id: number;
  value: number;
};

export type Deck = { [key: number]: MemoryCard };

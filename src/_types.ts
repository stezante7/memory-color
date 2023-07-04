export type MemoryCard = {
  id: number;
  value: number;
  color: string;
};

export type Deck = { [key: number]: MemoryCard };

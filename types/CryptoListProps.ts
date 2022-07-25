import { CoinDataProps } from "./CoinDataProps";

export type CryptoListProps = {
  coins: CoinDataProps[];
  deleteCoin: (code: string) => void;
};

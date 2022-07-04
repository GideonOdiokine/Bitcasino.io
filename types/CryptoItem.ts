import { CoinDataProps } from "./CoinDataProps";

export type CryptoItemProps = {
  coin: CoinDataProps;
  deleteCoin: (coinCode: string) => void;
  index?: number;
};

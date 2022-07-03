export type ListItemProps = {
    coin: CoinDataProps;
    deleteCoin: (coinCode: string) => void;
    index: number;
  };
  
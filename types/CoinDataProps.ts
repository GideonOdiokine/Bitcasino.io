export type CoinDataProps = {
  coinCode: string;
  marketSymbol: string;
  ticker: {
    lastPrice: string;
    __typename: string;
  };
};

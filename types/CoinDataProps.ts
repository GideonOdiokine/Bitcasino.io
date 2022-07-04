export type CoinDataProps = {
  coinCode: string;
  code: string;
  marketSymbol: string;
  ticker: {
    lastPrice: string;
    __typename: string;
  };
};

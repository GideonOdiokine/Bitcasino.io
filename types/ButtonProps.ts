import { CoinDataProps } from "./CoinDataProps";

export type ButtonProps = {
  label?: string;
  code?: string;
  coin?: CoinDataProps;
  loading?: boolean;
  type: "submit" | "button";
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

export type CloseButtonProps = {
  coin: CoinDataProps;
  onClick: (coinCode: string) => void;
};

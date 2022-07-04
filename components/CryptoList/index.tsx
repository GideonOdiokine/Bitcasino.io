import { CoinDataProps } from "../../types/CoinDataProps";

import ListItem from "./ListItem";

export type CryptoListProps = {
  coins: CoinDataProps[];
  deleteCoin: (code: string) => void;
};

const CryptoList = ({ coins, deleteCoin }: CryptoListProps) => {
  return (
    <ul className="mt-[32px] z-[20]">
      {coins?.map((coin: CoinDataProps, index: number) => (
        <ListItem
          coin={coin}
          key={index}
          index={index}
          deleteCoin={deleteCoin}
        />
      ))}
    </ul>
  );
};

export default CryptoList;

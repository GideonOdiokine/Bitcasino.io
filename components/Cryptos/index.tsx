import { CoinDataProps } from "../../types/CoinDataProps";
import CryptoItem from "./CryptoItem";

export type CryptoListProps = {
  coins: CoinDataProps[];
  deleteCoin: (code: string) => void;
};

const CryptoList = ({ coins, deleteCoin }: CryptoListProps) => {
  return (
    <ul className="mt-[32px] z-[20]">
      {coins?.map((coin: CoinDataProps) => (
        <CryptoItem coin={coin} key={coin?.coinCode} deleteCoin={deleteCoin} />
      ))}
    </ul>
  );
};

export default CryptoList;

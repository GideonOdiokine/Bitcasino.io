import { CoinDataProps } from "../../types/CoinDataProps";
import { CryptoListProps } from "../../types/CryptoListProps";
import CryptoItem from "./CryptoItem";

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

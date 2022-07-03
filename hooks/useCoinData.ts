import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { toast } from "react-toastify";
import { PRICE } from "../queries/PRICE-QUERY";
import { CoinDataProps } from "../types/CoinDataProps";

export default function useCoins() {
  const [coins, setCoins] = useState<CoinDataProps[]>([]);
  const [coinCode, setCoinCode] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const fetchCoin = (coinCode: string) => {
    setCoinCode((state: string) => (state = coinCode));
    setIsSuccess(false);
    fetchPrices();
  };

  const [fetchPrices, { loading }] = useLazyQuery(PRICE, {
    variables: { coinCode },
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      let coinExist = coins.find(
        (coin: CoinDataProps) => coin.coinCode === coinCode
      );

      let notFound = data.markets.length === 0;

      if (coinExist) {
        toast.error("Coin already exist!");
        return;
      } else if (notFound) {
        toast.error("Coin not found!");
      }

      if (data && !notFound) {
        setCoins(
          (state: CoinDataProps[]) =>
            (state = [{ ...data?.markets[0], coinCode }, ...state])
        );
        setIsSuccess(true);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const deleteCoin = (coinCode: string) => {
    let filteredCoins = coins.filter(
      (coin: CoinDataProps) => coin.coinCode !== coinCode
    );
    setCoins((state: CoinDataProps[]) => (state = [...filteredCoins]));
  };

  return { deleteCoin, fetchCoin, coins, loading, isSuccess };
}

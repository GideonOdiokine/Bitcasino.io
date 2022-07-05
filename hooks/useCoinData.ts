import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { toast } from "react-toastify";
import { PRICE } from "../queries/PRICE-QUERY";
import { CoinDataProps } from "../types/CoinDataProps";

export default function useCoins() {
  const [coins, setCoins] = useState<CoinDataProps[]>([]);
  const [coinCode, setCoinCode] = useState<string>("");
  const [code, setCode] = useState<string>("");

  const [fetchPrices, { loading, error }] = useLazyQuery(PRICE, {
    variables: {
      input: coinCode,
    },
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      console.log(data);
      const hasCoin = [...new Set(coins)];

      const coinsNotFound = data?.markets?.length === 0;

      if (hasCoin) {
        toast.error("Coin already exists");
        setCode("");
        return;
      }

      if (data && coinsNotFound) {
        toast.error("Coin not found");
        setCode("");
        return;
      }

      setCoins(
        (state: CoinDataProps[]) =>
          (state = [{ ...data?.markets[0], coinCode }, ...state])
      );
      setCode("");
      toast.success("Coin added successfully!");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const deleteCoin = (code: string) => {
    let filteredCoins = coins.filter(
      (coin: CoinDataProps) => coin.coinCode !== code
    );
    setCoins((state: CoinDataProps[]) => (state = [...filteredCoins]));
    toast.success("Coin removed successfully!");
  };

  return {
    coins,
    code,
    loading,
    setCode,
    setCoins,
    setCoinCode,
    fetchPrices,
    deleteCoin,
  };
}

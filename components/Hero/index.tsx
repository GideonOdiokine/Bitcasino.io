import React, { useEffect, useState } from "react";
import Form from "../Form";
import Intro from "../Intro";
import useCoinData from "../../hooks/useCoinData";
import CryptoList from "../CryptoList";

const Hero = () => {
  const [code, setCode] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value.toUpperCase());
  };

  const handleGetCoin = async (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    fetchCoin(code);
  };

  const { deleteCoin, fetchCoin, loading, coins, isSuccess } = useCoinData();

  useEffect(() => {
    // checking if isSuccess and clear input
    if (isSuccess) setCode("");
  }, [isSuccess]);

  return (
    <div>
      <main className="my-4 lg:mt-10 lg:mb-9" data-testid="hero">
        <section>
          <div className="w-full flex flex-col lg:flex-row flex-wrap gap-y-6 items-center justify-between">
            <Intro />
            <Form
              fetchCoin={handleGetCoin}
              loading={loading}
              code={code}
              handleChange={handleChange}
            />
          </div>

          <CryptoList coins={coins} deleteCoin={deleteCoin} />
        </section>
      </main>
    </div>
  );
};

export default Hero;

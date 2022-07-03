import React from "react";
import Form from "../Form";
import Intro from "../Intro";

const Hero = () => {
  return (
    <div>
      <main className="my-4 lg:mt-10 lg:mb-9" data-testid="hero">
        <section>
          <div className="w-full flex flex-col lg:flex-row flex-wrap gap-y-6 items-center justify-between">
            <Intro />
            <Form
            //   setCode={setCode}
            //   setCoinCode={setCoinCode}
            //   fetchPrices={fetchPrices}
            //   code={code}
            //   loading={loading}
            />
          </div>

          {/* <CryptoList data={coins} setCoins={setCoins} /> */}
        </section>
      </main>
    </div>
  );
};

export default Hero;

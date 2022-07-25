import React from "react";
import { CryptoItemProps } from "../../types/CryptoItem";
import Image from "next/image";
import CloseButton from "../CloseButton";

const CryptoItem = ({ coin, deleteCoin }: CryptoItemProps) => {
  return (
    <li
      title={coin?.coinCode}
      className="flex items-center justify-between w-full lg:w-[280px] py-3 border-b-[1px] border-[#9484a4]"
    >
      <div className="flex items-center gap-x-8">
        <Image
          src="/assets/svg/icon.svg"
          alt="league-cup"
          width={40}
          height={50}
        />
        <div className="flex flex-col gap-2">
          <div className="text-white capitalize">{coin?.coinCode}</div>
          <div className="text-[#9484a4] text-[13px]">
            {Number(coin?.ticker?.lastPrice || 0).toFixed(2)}€
          </div>
        </div>
      </div>
      <CloseButton onClick={deleteCoin} coin={coin}></CloseButton>
    </li>
  );
};

export default CryptoItem;

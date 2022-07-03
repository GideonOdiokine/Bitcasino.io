import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { CoinDataProps } from "../../types/CoinDataProps";
import { ListItemProps } from "../../types/ListItemProps";
import Image from "next/image";


const ListItem = ({ coin, deleteCoin, index }: ListItemProps) => {
  return (
    <li
      title={coin?.coinCode}
      key={index}
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
      <button
        type="button"
        aria-label={`delete ${coin.coinCode}`}
        title={`delete ${coin.coinCode}`}
        className="text-white cursor-pointer z-10"
        onClick={() => deleteCoin(coin.coinCode)}
      >
        <CloseIcon color="inherit" style={{ height: "15px" }} />
      </button>
    </li>
  );
};

export default ListItem;

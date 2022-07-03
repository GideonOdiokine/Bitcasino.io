import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Input } from "../Input";

const Form = () => {
  return (
    <div className="flex-1 w-full flex md:justify-end z-10">
      <div className="w-full lg:w-[61%] bg-white p-6 lg:px-8 lg:py-6 flex flex-col rounded">
        <form
          // onSubmit={getCoinPrice}
          className="flex flex-col"
          data-testid="form"
        >
          <Input
            label="CRYPTOCURRENCY CODE"
            variant="outlined"
            size="small"
            id="outlined-size-small"
            margin="normal"
            value={""}
            autoFocus
            //   onChange={handleChange}
            data-testid="crypto-code-input"
          />
          <button
            type="submit"
            //   disabled={!code || loading}
            className="disabled:bg-[#fd4c24bc] disabled:cursor-not-allowed border-0 outline-none bg-[#fd4b24] p-[10px] text-white rounded-[20px] text-sm mb-10 flex items-center justify-center"
          >
            <ClipLoader color="#fff" size={20} />
            {"Add"}
          </button>
        </form>
        <p className="text-sm text-gray-400 text-center tracking-[0.5px]">
          Use of this service is subject to terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default Form;

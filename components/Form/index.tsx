import React from "react";
import Button from "../Button";
import { Input } from "../Input";

type FormProps = {
  code: string;
  loading: boolean;
  fetchPrices: (event: React.MouseEvent<HTMLElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form = ({ code, loading, fetchPrices, handleChange }: FormProps) => {
  return (
    <div className="flex-1 w-full flex md:justify-end z-10">
      <div className="w-full lg:w-[61%] bg-white p-6 lg:px-8 lg:py-6 flex flex-col rounded">
        <form
          aria-label="add coin form"
          className="flex flex-col"
          data-testid="form"
        >
          <Input
            label="CRYPTOCURRENCY CODE"
            variant="outlined"
            size="small"
            id="outlined-size-small"
            margin="normal"
            value={code}
            onChange={handleChange}
          />
          <Button
            type="submit"
            label="Add"
            code={code}
            loading={loading}
            onClick={fetchPrices}
          />
        </form>
        <p className="text-sm text-gray-400 text-center tracking-[0.5px]">
          Use of this service is subject to terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default Form;

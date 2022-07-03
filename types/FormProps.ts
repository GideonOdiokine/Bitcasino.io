export type FormProps = {
  code: string;
  loading: boolean;
  fetchPrices: (event: React.MouseEvent<HTMLElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

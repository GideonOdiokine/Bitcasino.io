export type FormProps = {
  code: string;
  loading: boolean;
  fetchCoin: (event: React.MouseEvent<HTMLElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

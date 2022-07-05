import RingLoader from "react-spinners/RingLoader";
import { ButtonProps } from "../../types/ButtonProps";
import CloseIcon from "@mui/icons-material/Close";

const Button: React.FC<ButtonProps> = ({
  code,
  loading,
  onClick,
  label,
  type,
  coin,
}) => {
  return (
    <>
      {type === "submit" && (
        <button
          type={type}
          disabled={!code || loading}
          onClick={onClick}
          className="disabled:bg-[#fd4c24bc] disabled:cursor-not-allowed border-0 outline-none bg-[#fd4b24] p-[10px] text-white rounded-[20px] text-sm mb-10 flex items-center justify-center"
        >
          {type === "submit" && (
            <RingLoader color="#fff" loading={loading} size={20} />
          )}
          {!loading && label}
        </button>
      )}

      {type === "button" && (
        <button
          type="button"
          aria-label={`delete ${coin?.coinCode}`}
          title={`delete ${coin?.coinCode}`}
          className="text-white cursor-pointer z-10"
          onClick={onClick}
        >
          <CloseIcon color="inherit" style={{ height: "15px" }} />
        </button>
      )}
    </>
  );
};

export default Button;

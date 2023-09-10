import { TbFidgetSpinner } from "react-icons/tb";
// eslint-disable-next-line react/prop-types
const BtnLoading = ({ loading, setLoading }) => {
  return (
    <div>
      <button
        type="submit"
        className="bg-rose-500 w-full rounded-md py-3 text-white"
        onClick={() => setLoading(!loading)}
      >
        {loading ? (
          <TbFidgetSpinner className="m-auto animate-spin" size={24} />
        ) : (
          "Continue"
        )}
      </button>
    </div>
  );
};

export default BtnLoading;

import { useState } from "react";
import BtnLoading from "./BtnLoading";

const Btnload = () => {
  const [loading, setLoading] = useState(false);
  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <div>
      <h1>Button Loading Example</h1>
      <BtnLoading loading={loading} setLoading={setLoading} />
      <button onClick={startLoading}>Start Loading</button>
    </div>
  );
};

export default Btnload;

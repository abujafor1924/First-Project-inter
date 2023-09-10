import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const Loading = ({ children }) => {
  const [loading, setLoading] = useState();
  //   const { user, loding } = useContext(AutContext);
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    const exmLoading = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(exmLoading);
  }, []);

  if (loading) {
    return (
      <div className=" h-[70vh] flex flex-col justify-center items-center ">
        <ScaleLoader height={100} width={4} color="#07332F" />
      </div>
    );
  } else {
    return children;
  }

  // this is use Authsystem

  // const { user, loading } = useAuth();
  // const loacation = useLocation();
  //   if (loading) {
  //     return (
  //       <div className=" h-[70vh] flex flex-col justify-center items-center ">
  //         <ScaleLoader height={100} width={4} color="#07332F" />
  //       </div>
  //     );
  //   }
  //   if (user) {
  //     return children;
  //   }

  //   return (
  //     <Navigate to={"/login"} state={{ from: loacation }} replace></Navigate>
  //   );
};

export default Loading;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
// import { ScaleLoader } from "react-spinners";

// eslint-disable-next-line react/prop-types
const Loading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsLoading(true);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, [location]);

  if (isLoading) {
    return (
      <div className="mt-20 md:w-96 mx-auto">
        <div className=" h-[70vh] flex flex-col justify-center items-center ">
          <ScaleLoader height={100} width={4} color="#07332F" />
        </div>
      </div>
    );
  }

  return children;

  // useEffect(() => {
  //   // onAuthStateChanged come fierbase
  //   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     // console.log(currentUser);
  //     setLoading(false);
  //   });
  //   // stop obserbing
  //   return () => {
  //     return unSubscribe();
  //   };
  // }, []);

  // const loacation = useLocation();
  // if (loading) {
  //   return (
  //     <div className=" h-[70vh] flex flex-col justify-center items-center ">
  //       <ScaleLoader height={100} width={4} color="#07332F" />
  //     </div>
  //   );
  // }
  // // use user
  // if (user) {
  //   return children;
  // }

  // return (
  //   <Navigate to={"/login"} state={{ from: loacation }} replace></Navigate>
  // );
};

export default Loading;

import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const Loading = ({ children }) => {
  const [loading, setLoading] = useState();

  useEffect(() => {
    // onAuthStateChanged come fierbase
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser);
      setLoading(false);
    });
    // stop obserbing
    return () => {
      return unSubscribe();
    };
  }, []);

  const loacation = useLocation();
  if (loading) {
    return (
      <div className=" h-[70vh] flex flex-col justify-center items-center ">
        <ScaleLoader height={100} width={4} color="#07332F" />
      </div>
    );
  }
  // use user
  if (user) {
    return children;
  }

  return (
    <Navigate to={"/login"} state={{ from: loacation }} replace></Navigate>
  );
};

export default Loading;

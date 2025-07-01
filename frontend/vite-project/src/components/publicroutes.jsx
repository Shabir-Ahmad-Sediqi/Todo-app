import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/authserveces";

const PublicRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const check = async () => {
      try {
        const result = await isAuthenticated();
        setAuth(result); // true or false
      } catch (err) {
        setAuth(false); // default to unauthenticated if error
      }
    };
    check();
  }, []);

  if (auth === null) return <div className="text-white text-center mt-10">Checking authentication...</div>;

  if (auth) return <Navigate to="/" />;

  return children;
};

export default PublicRoute;

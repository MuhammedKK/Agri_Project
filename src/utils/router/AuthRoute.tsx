import { useJwt } from "react-jwt";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AuthRoute = () => {
  const { token } = useSelector((state: any) => state.signin);
  const { isExpired } = useJwt(token);
  return (
    <div className="App">
      {!isExpired ? <Outlet /> : <Navigate to={"/signin"} />}
    </div>
  );
};

export default AuthRoute;

import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./store/reducers/slices/Counter.slice";
import { SignIn } from "./api/auth/auth.api";
import { useJwt } from "react-jwt";
import { useEffect, useState } from "react";
import { Users } from "./api/users/users.api";
import { SigninActions } from "./store/reducers/slices/Signin.slice";
import { getAllUsers } from "./store/reducers/crud-extra/users-crud-extra";

interface Login {
  accessToken: "";
  user: {
    email: string;
    id: string;
    name: string;
  };
}

function App() {
  const { value } = useSelector((state: any) => state.counter);
  const { token: myToken } = useSelector((state: any) => state.signin);
  const { data } = useSelector((state: any) => state.users);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const testLogin = async () => {
    try {
      const { data } = await SignIn.auth({
        email: "motest@gmail.com",
        password: "123",
      });

      console.log(data.accessToken);
      setToken(data.accessToken);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dispatch(SigninActions.setToken(token));
  });

  const getUsers = async () => {
    try {
      dispatch(getAllUsers() as any);
    } catch (err) {
      console.log(err);
    }
  };
  const { decodedToken, isExpired } = useJwt(token);

  console.log(decodedToken, isExpired, myToken, data);

  return (
    <>
      test {value}
      <button className="" onClick={handleIncrement}>increment</button>
      <span className="text-3xl">hello</span>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={testLogin}>login</button>
      <button onClick={getUsers}>Get Users</button>
    </>
  );
}

export default App;

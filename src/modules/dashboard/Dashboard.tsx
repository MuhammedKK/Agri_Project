/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import Navbar from "../../layout/navbar/Navbar";
import Sidebar from "../../layout/sidebar/Sidebar";
import Content from "./components/Content";
import { useJwt } from "react-jwt";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const {token} = useSelector((state:any) => state.signin);
  const navigate = useNavigate();
  const {isExpired} = useJwt(token) as {isExpired : boolean}

  useEffect(() => {
    if(isExpired) navigate('/signin', {replace: true})
  }, [isExpired])
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Content />
      </div>
    </>
  );
};

export default Dashboard;

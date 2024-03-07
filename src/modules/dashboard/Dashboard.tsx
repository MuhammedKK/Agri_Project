import Navbar from "../../layout/navbar/Navbar";
import Sidebar from "../../layout/sidebar/Sidebar";
import Content from "./components/Content";

const Dashboard = () => {
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

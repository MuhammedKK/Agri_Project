import { HiOutlineMailOpen } from "react-icons/hi";
import Button from "../../shared/Button";

const CheckMail = () => {
  return (
    <div
      style={{ width: "30%", margin: "auto" }}
      className="flex items-center justify-center text-white h-screen"
    >
      <div className=" flex flex-col text-center p-8 rounded shadow-md w-full animate__animated animate__backInDown">
        <div className="text-center">
            <HiOutlineMailOpen style={{margin: 'auto', color:'#97B497'}} fontSize={90} />
        </div>
        <h2 className="text-2xl font-bold mb-4">Email Has Been Sent</h2>
        <p style={{color:'#97B497'}}>Please check your inbox and follow the instructions to reset your password</p>
      </div>
    </div>
  );
};

export default CheckMail;

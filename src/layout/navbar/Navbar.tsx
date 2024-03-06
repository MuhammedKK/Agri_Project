import { useSelector } from "react-redux";
import User from "../../assets/user.png";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useJwt } from "react-jwt";

const Navbar = () => {
  const {token} = useSelector((state:any) => state.signin);
  const data = useJwt(token);

  return ( 
    <nav className="p-4 flex flex-wrap items-center justify-between text-white mb-5">
      {/* Left: Logo */}
      <div className="text-white mb-4 md:mb-0 md:mr-4">
        <span className="font-bold text-xl">Agri-Sense</span>
      </div>

      {/* Middle: Search Bar */}
      <div className="flex-1 mb-4 md:mb-0">
        <div className="flex items-center">
          <div className="flex-1"><span className="font-bold">Dashboard</span> / Default</div>
          <div className="flex-1">
            <input
              type="search"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-md bg-transparent shadow-xl text-white focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Right: User Logo, Name, and Notification Icon */}
      <div className="flex items-center space-x-4">
        <div className="text-white">
          {/* Your notification icon */}
          <IoIosNotificationsOutline fontSize={25} />
        </div>
        <div className="text-white hidden md:block">
          <span className="font-bold">{data.decodedToken?.user?.email}</span>
        </div>
        <div className="text-white">
          {/* Your user logo */}
          <img src={User} alt="User Logo" className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

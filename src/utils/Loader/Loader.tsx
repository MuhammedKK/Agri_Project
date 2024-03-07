/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
  
  const Loader: React.FC = () => {
    const {loading} = useSelector((state:any) => state.loader);
    console.log(loading);
    

    return (
        <div className={`loader-overlay ${loading ? '' : 'hidden'}`}>
        <div className="loader"></div>
      </div>
    )
};
  
  export default Loader;
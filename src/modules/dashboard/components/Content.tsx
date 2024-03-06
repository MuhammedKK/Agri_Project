import Card from "./Card"
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";


const Content = () => {
  return (
    <div className="w-8/12 flex justify-between items-start space-x-5 m-5">
      <Card title="Views" number={"1500"} percentage="50%" icon={<FaArrowTrendUp />} />
      <Card title="Vists" number={"1050"} percentage="-50%" icon={<FaArrowTrendDown />} />
      <Card title="New Users" number={"2105"} percentage="30%" icon={<FaArrowTrendUp />} />
      <Card title="Total Earning" number={`${1690}EGP`} percentage="-80%" icon={<FaArrowTrendDown />} />
    </div>
  )
}

export default Content
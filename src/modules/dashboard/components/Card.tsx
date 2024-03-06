import { ReactNode } from "react";

interface CardProps {
  title: string;
  number: string;
  percentage: string;
  icon?: ReactNode;
}
const Card = ({ title, number, percentage, icon }: CardProps) => {
  return (
    <div
      style={{ backgroundColor: "#192626" }}
      className="flex flex-col rounded-2xl p-6 shadow-lg w-full  py-10 text-white"
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="text-xl font-semibold flex">
        <div className="flex-1">{number}</div>
        <div className="flex-1">
            <div className="flex items-center">
                <div className="mx-1">{percentage}</div>
                <div className="">{icon}</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

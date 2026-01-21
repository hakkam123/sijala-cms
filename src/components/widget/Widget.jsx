import Card from "components/card";
import { useNavigate } from "react-router-dom";

const Widget = ({ title, subtitle, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    }
  };

  return (
    <Card 
      extra="!flex-row flex-grow items-center rounded-[20px] min-h-[100px] cursor-pointer transition-all duration-300 hover:shadow-sm hover:scale-105 dark:hover:bg-navy-700"
      onClick={handleClick}
    >
      <div className="h-20 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-gray-600">{title}</p>
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {subtitle}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
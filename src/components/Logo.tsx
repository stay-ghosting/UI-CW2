import { useNavigate } from "react-router-dom";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({className= ""}) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => {navigate("/")}} className={"text-2xl font-handwriten text-center text-logo-blue inline-flex flex-col " + className}>
      <p className="leading-none">EVENT</p>
      <p className="text-logo-pink leading-none">COMPANY</p>
    </button>
  );
}

export default Logo;

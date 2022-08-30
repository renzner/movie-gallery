import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.svg";

export const Header: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center w-full h-16 bg-theme">
      <div className="flex justify-between w-full max-w-81.25 px-8">
        <img
          src={Logo}
          alt="logo"
          className="w-40 cursor-pointer"
          onClick={handleClick}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
    </div>
  );
};

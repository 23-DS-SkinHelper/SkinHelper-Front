import LogoImage from "../../../assets/logo.svg";

const Logo = () => {
  return (
    <div className="w-100 h-100 flex justify-center items-center">
      <img className="object-contain" src={LogoImage} alt="logo" />
    </div>
  );
};

export default Logo;

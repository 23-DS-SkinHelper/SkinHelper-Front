import Logo from "../../atoms/Header/Logo";
import Title from "../../atoms/Header/Title";

const Header = () => {
  return (
    <div className="flex justify-between items-start">
      <Logo />
      <Title />
    </div>
  );
};

export default Header;

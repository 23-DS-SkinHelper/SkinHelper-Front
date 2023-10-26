const Footer = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:mink141416@gmail.com";
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/23-DS-SkinHelper", "_blank");
  };

  return (
    <div className="fixed bottom-[50px] left-[70px] leading-22 font-18">
      <div className="flex">
        <div className="mr-70 cursor-pointer" onClick={handleContactClick}>
          Contact Us
        </div>
        <div className="cursor-pointer" onClick={handleGitHubClick}>
          GitHub
        </div>
      </div>
    </div>
  );
};

export default Footer;

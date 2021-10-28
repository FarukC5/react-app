import logo from "../assets/images/paragon.png";
import Navigator from "./Navigator";

const AppHeader = () => {
  return (
    <header>
      <div className="left">
        &nbsp;
        <img src={logo} alt="Logo" />
        &nbsp;&nbsp;
      </div>
      <div className="left"> 
        <h2>React-App</h2>
      </div>
      <div className="right">
        <Navigator />
      </div>
    </header>
  );
};

export default AppHeader;

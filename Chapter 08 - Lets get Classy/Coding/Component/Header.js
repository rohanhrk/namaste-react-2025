import { Link } from "react-router-dom";

const Header = ({ logo }) => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items-container">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/lifeCycleMethod"}>LifeCycleMethod</Link>
          </li>
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

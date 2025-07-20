const Header = ({ logo }) => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={logo} />
      </div>
      <div className="nav-items-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Help</li>
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

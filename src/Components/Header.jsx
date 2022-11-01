const Header = () => {
  return (
    <header>
      {/* Converse Logo  */}
      <div className="converse_logo">
        <img src="img/Logo/ConverseLogo.png" alt="ConverseLogo" />
      </div>

      {/* Jordan Logo */}
      <div className="jordan_logo">
        <img src="img/Logo/jordanLogo.png" alt="jordanLogo" />
      </div>

      {/* Menu Items   */}
      <ul className="list">
        <li>
          <a href="#" className="list_link">
            Sign In |
          </a>
        </li>

        <li>
          <a href="#" className="list_link">
            Join Us |
          </a>
        </li>

        <li>
          <a href="#" className="list_link">
            Help
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;

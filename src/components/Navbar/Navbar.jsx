import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navdiv">
        <ul className="navbar-ul">
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#my-life">My Life</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

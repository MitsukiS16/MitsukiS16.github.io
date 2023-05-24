import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navdiv">
        <ul className="navbar-ul">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">My Life</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

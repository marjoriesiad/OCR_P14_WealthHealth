import { Link } from "react-router-dom";
import Logo from "../../assets/wealth_health.jpg";
import "./header.css";

/**
 * @component
 * @returns a header component
 */

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Logo Wealth Health" />
      </Link>
    </header>
  );
};

export default Header;

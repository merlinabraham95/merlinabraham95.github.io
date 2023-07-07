import { Link } from "react-router-dom";
import CustomRoutes from "./Routes";

export default function Main() {
  return (
    <div>
      <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle">
        <i></i>
      </a>
      <aside
        id="colorlib-aside"
        role="complementary"
        className="js-fullheight text-center"
      >
        
        <h1 id="colorlib-logo">
          <Link to="/">
            merlin<span>.</span>
          </Link>
        </h1>
        <nav id="colorlib-main-menu" role="navigation">
          <ul>
            <li className="colorlib-active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/experiences">Experiences</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <CustomRoutes />
      </div>
  );
}

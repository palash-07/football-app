import { Link, useLocation } from "react-router-dom";
import appIcon from "../assets/appIcon.png";
import fixtureIcon from "../assets/fixtureIcon.png";
import clubIcon from "../assets/clubIcon.png";
import nationsIcon from "../assets/nationsIcon.png";
import homeIcon from "../assets/homeIcon.png";

function Header() {
  const location = useLocation();

  const pathMatchRoute = (route) => {
    return route === location.pathname;
  };

  const btn = "btn btn-ghost btn-sm rounded-btn";
  const btnActive = "btn btn-active btn-sm rounded-btn";

  return (
    <div className="navbar mb-2 shadow-lg drop-shadow-xl bg-neutral text-neutral-content ">
      <div className="flex-1 px-2 mx-2">
        {/* Enable sidebar opening for the app Icon */}
        <img src={appIcon} alt="appIcon" height="30px" width="30px" />
        <Link
          to="/"
          className="text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold ml-2"
        >
          Football App
        </Link>
      </div>
      <div className="flex-auto px-2 mx-2 justify-end">
        <div className="flex">
          <Link to="/" className={pathMatchRoute("/") ? btnActive : btn}>
            <img src={homeIcon} alt="fixture" className="mr-2 h-4 w-4" />
            Home
          </Link>
          <Link
            to="/fixtures"
            className={pathMatchRoute("/fixtures") ? btnActive : btn}
          >
            <img src={fixtureIcon} alt="fixture" className="mr-2 h-4 w-4" />
            Fixtures
          </Link>
          <Link
            to="/clubs"
            className={pathMatchRoute("/clubs") ? btnActive : btn}
          >
            <img src={clubIcon} alt="fixture" className="mr-2 h-4 w-4" />
            Clubs
          </Link>
          <Link
            to="/nations"
            className={pathMatchRoute("/nations") ? btnActive : btn}
          >
            <img src={nationsIcon} alt="fixture" className="mr-2 h-4 w-4" />
            Nations
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

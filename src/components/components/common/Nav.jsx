import { Link } from "react-router-dom";
import LwsLogo from "../../assets/logo.svg";
import { useAuth } from "../../hooks/useAuth";
import ProfileNavigation from "./navbar/ProfileNavigation";
import SearchButton from "./navbar/SearchButton";
import ThemeNevigation from "./navbar/ThemeNevigation";

export default function Nav() {
  const { auth } = useAuth();

  return (
    <header className=" w-full flex justify-center sticky top-0 z-[100] dark:bg-inherit bg-white backdrop-blur-xl">
      <nav className="container">
        {/* <!-- Logo --> */}
        <div>
          <Link to="/">
            <img className="w-32 dark:inline hidden" src={LwsLogo} alt="lws" />
            <img
              className="w-32 dark:hidden"
              src={
                "https://learnwithsumit.com/_next/static/media/lws-logo-light.ae7b3c3a.svg"
              }
              alt="lws"
            />
          </Link>
        </div>
        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <Link
                to="/write"
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Write
              </Link>
            </li>

            {auth?.user && <SearchButton />}
            <ThemeNevigation />
            <ProfileNavigation user={auth?.user} />
          </ul>
        </div>
      </nav>
    </header>
  );
}

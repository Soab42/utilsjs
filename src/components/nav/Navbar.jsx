import LinkList from "./LinkList";
import Logo from "../nav/Logo";
import User from "./User";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import SmallNav from "./SmallNav";

export default function Navbar() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="flex justify-between h-[4.5rem]  backdrop-blur-md xl:px-52 items-center shadow-xl shadow-red-950/10 fixed w-full px-2 z-50 bg-blue-600/10 top-0">
      <section className="flex-3">
        <Logo />
      </section>
      <div className=" pr-10 flex justify-between  items-center lowercase">
        <section className="flex gap-1 font-thin text-lg justify-start tracking-widest pr-10">
          <LinkList />
        </section>
        <section className="hidden xl:block">
          {user ? <User /> : <Link to={"/login"}>Login</Link>}
        </section>
        <section className="lg:hidden z-50">
          <SmallNav user={user} />
        </section>
      </div>
    </div>
  );
}

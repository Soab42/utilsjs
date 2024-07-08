import LinkList from "./LinkList";
import Logo from "../nav/Logo";
import User from "./User";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../firebase";
import SmallNav from "./SmallNav";

export default function Navbar() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className="flex justify-between py-3 bg-white xl:px-52 items-center border-b border-black/10 fixed w-full px-2 z-40 bg-blue-600/10 top-0">
      <section className="flex-3 xl:w-fit w-full flex-center">
        <Logo />
      </section>
      <div className=" pr-10 flex justify-between  items-center lowercase">
        <section className="xl:flex gap-1 font-thin text-lg justify-start tracking-widest pr-10 hidden">
          <LinkList />
        </section>
        <section className="hidden xl:block">
          {user ? <User /> : <Link to={"/login"}>Login</Link>}
        </section>
        <section className="xl:hidden md:block z-50">
          <SmallNav user={user} />
        </section>
      </div>
    </div>
  );
}

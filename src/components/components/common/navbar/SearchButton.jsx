import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import SearchIcon from "../../../assets/icons/search.svg";
import usePortal from "../../../hooks/usePortal";
import Search from "../../page/Search";
export default function SearchButton() {
  const modalRef = useRef();
  const PortalComponent = usePortal();
  return (
    <li>
      <button
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => modalRef.current.open()}
      >
        <img src={SearchIcon} alt="Search" />
        <span>Search</span>
      </button>
      <AnimatePresence>
        <PortalComponent>
          <Search ref={modalRef} />
        </PortalComponent>
      </AnimatePresence>
    </li>
  );
}

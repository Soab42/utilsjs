import { Link, useLocation, useParams } from "react-router-dom";
import { useList } from "react-firebase-hooks/database";
import { ref } from "firebase/database";
import { db } from "../../../firebase";
import { extractFirstPathname } from "../../utils.js/extractFirstPathname";
export default function LeftBar() {
  // Define an array of items with links
  const location = useLocation();
  const params = useParams();
  const pathName = extractFirstPathname(location?.pathname);

  const reference = ref(db, pathName);
  const [snapshots, loading, error] = useList(reference);

  error && <strong>Error: {error}</strong>;

  loading && <span>;List: Loading...</span>;

  return (
    <ul className="flex flex-col mr-4 p-2 rounded h-full ring-1 ring-green-600/70">
      <Link
        to={"/write"}
        className="bg-green-700/20 text-center py-2 hover:bg-green-600/50 duration-500 w-full"
      >
        Add New
      </Link>

      {snapshots.length === 0 && <span>No Data Found</span>}
      {/* Map over the array to render each item */}
      {snapshots?.map((item, index) => {
        return (
          <li
            key={index}
            className={`${
              params && params?.name === item.key
                ? "shadow-md ring-emerald-500 border-y border-green-600 w-full rounded-sm"
                : ""
            } h-10 flex mt-1 items-center hover:bg-green-600/30 pl-2 border-b`}
          >
            <Link to={`${pathName}/${decodeURIComponent(item.key)}`}>
              {item.key}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

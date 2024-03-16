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
    <ul className="grid pr-4">
      <Link to={"/write"} className="    bg-green-700/20 text-center py-2">
        Add New
      </Link>

      {snapshots.length === 0 && <span>No Data Found</span>}
      {/* Map over the array to render each item */}
      {snapshots?.map((item, index) => {
        return (
          <li
            key={index}
            className={
              params && params?.name === item.key ? "bg-pink-100 rounded" : ""
            }
          >
            <Link to={`${pathName}/${item.key}`}>{item.key}</Link>
          </li>
        );
      })}
    </ul>
  );
}

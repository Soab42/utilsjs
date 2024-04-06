import { ref } from "firebase/database";
import { useList } from "react-firebase-hooks/database";
import { useLocation } from "react-router-dom";
import { db } from "../../../firebase";
import TextWithMarkup from "../code/TextWithMarkup";
import AuthorDetails from "../common/AuthorDetails";
import { removeSlug } from "../../utils.js/generateSlug";

export default function SinglePost() {
  const location = useLocation();
  const reference = ref(db, decodeURIComponent(location?.pathname));
  const [snapshots, loading, error] = useList(reference);
  error && <strong>Error: {error}</strong>;
  loading && <span>;List: Loading...</span>;
  // snapshots.map((snapshot) => console.log(snapshot?.val()));

  return (
    snapshots && (
      <div className="xl:w-[60vw] w-full space-y-3 p-3 text-lg text-pretty overflow-hidden">
        <h1 className="text-center bg-blue-400/20 text-2xl pl-4 py-3  font-bold">
          {removeSlug(snapshots[0]?.val().name)}
        </h1>
        {snapshots?.map((snapshot) => (
          <div
            key={snapshot.key}
            className=" ring-1 p-5 mb-2 rounded hover:shadow-lg duration-500"
          >
            <TextWithMarkup
              key={snapshot?.val().key}
              text={snapshot?.val().content}
            />
            <AuthorDetails post={snapshot.val()} />
          </div>
        ))}
      </div>
    )
  );
}

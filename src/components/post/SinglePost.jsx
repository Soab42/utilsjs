import { ref } from "firebase/database";
import { useList } from "react-firebase-hooks/database";
import { useLocation } from "react-router-dom";
import { db } from "../../../firebase";
import getDateFormat from "../../utils.js/getDateFormat";
import TextWithMarkup from "../code/TextWithMarkup";

export default function SinglePost() {
  const location = useLocation();
  const reference = ref(db, location?.pathname);
  const [snapshots, loading, error] = useList(reference);

  error && <strong>Error: {error}</strong>;
  loading && <span>;List: Loading...</span>;
  // snapshots.map((snapshot) => console.log(snapshot?.val()));
  return (
    snapshots && (
      <div className="space-y-3 p-3 text-lg text-pretty">
        <h1 className="w-full text-center bg-blue-400/20 text-2xl pl-4 py-3 text-blue-900 font-bold">
          {snapshots[0]?.val().name}
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
            <div className="mt-10 p-2 flex rounded flex-col gap-2 shadow-xl ">
              <p className="">Posted By</p>
              <div className="flex gap-2">
                <img
                  src={snapshot?.val().author.avatar}
                  width={60}
                  className="rounded-full"
                />
                <div className="gap-2 w-full items-end capitalize ">
                  <p className="text-xl font-black text-blue-900">
                    {snapshot?.val().author.name}
                  </p>
                  {/* <p>{snapshot?.val().author.email}</p> */}
                  <p>posted on: {getDateFormat(snapshot?.val().createdAt)}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
}

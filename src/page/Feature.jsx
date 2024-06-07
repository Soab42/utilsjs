import { ref } from "firebase/database";
import { useListVals } from "react-firebase-hooks/database";
import { FaBatteryEmpty } from "react-icons/fa";
import { db } from "../../firebase";
import Loading from "../components/ui/common/Loading";
import PostCard from "../components/ui/post/PostCard";
import { Link, useLocation } from "react-router-dom";

export default function Feature() {
  const location = useLocation();
  const pageName = location?.pathname?.split("/")[1];
  const reference = ref(db, location?.pathname);
  const [snapshots, loading, error] = useListVals(reference);
  if (loading) return <Loading />;
  if (error) return <div>error</div>;
  const posts = snapshots?.flat();

  return (
    <div className="w-full space-y-3 px-3 text-sm text-pretty overflow-hidden mt-16">
      {posts?.length > 0 ? (
        <div className="w-full space-y-2">
          <div className="flex-center bg-[#5cf24842]  border-b-2 border-emerald-500 px-3">
            <h3 className="w-full text-center text-fuchsia-900 font-bold text-2xl">
              We Have Total {posts?.length} {pageName} shared
            </h3>
            <Link
              to={`/write/${pageName}`}
              className=" text-center hover:bg-green-400/50 hover:text-[black] duration-500 min-w-fit p-2 rounded-sm font-semibold bg-[#E0FBE2] text-slate-500 capitalize"
            >
              Add New {pageName}
            </Link>
          </div>
          <div className="grid xl:grid-cols-3 gap-2">
            {posts?.map((post) => {
              const postId = Object?.keys(post)[0];
              const data = Object?.values(post)[0];
              // debugger;
              return <PostCard data={data} key={postId} postId={postId} />;
            })}
          </div>
        </div>
      ) : (
        <div className="text-2xl font-semibold dark:text-black lg:text-[28px] h-96 flex-center gap-2">
          <FaBatteryEmpty className="text-5xl size-32 text-red-300 animate-pulse" />
          No {pageName} shared yet!
        </div>
      )}
    </div>
  );
}

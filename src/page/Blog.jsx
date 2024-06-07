import { ref } from "firebase/database";
import { useListVals } from "react-firebase-hooks/database";
import { Link, useLocation } from "react-router-dom";
import { db } from "../../firebase";
import MainCard from "../components/ui/blog/MainCard";
import Loading from "../components/ui/common/Loading";

export default function Blog() {
  const location = useLocation();
  const reference = ref(db, location?.pathname);
  const [snapshots, loading, error] = useListVals(reference);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-[90vh] relative mt-16  px-4">
      <section className="grid grid-flow-row rounded-lg gap-2">
        <div className="flex-center bg-[#5cf24842]  border-b-2 border-emerald-500 px-3">
          <h3 className="w-full text-center text-fuchsia-900 font-bold text-2xl">
            Recent Blogs
          </h3>
          <Link
            to={"/write"}
            className=" text-center hover:bg-green-600/50 duration-500 min-w-fit p-2 rounded-sm font-semibold bg-[#E0FBE2] text-slate-500"
          >
            Write New blog
          </Link>
        </div>

        <div className="flex flex-wrap gap-2">
          {snapshots.map((snapshot) => {
            const data = Object.values(snapshot)[0];
            const key = Object.keys(snapshot)[0];
            return <MainCard key={key} data={data} postId={key} />;
          })}
        </div>
      </section>
    </div>
  );
}

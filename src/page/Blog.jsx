import { ref } from "firebase/database";
import React from "react";
import { useListVals } from "react-firebase-hooks/database";
import { Link, useLocation } from "react-router-dom";
import MainCard from "../components/ui/blog/MainCard";
import { db } from "../../firebase";
import Loading from "../components/ui/common/Loading";

export default function Blog() {
  const location = useLocation();
  const reference = ref(db, location?.pathname);
  const [snapshots, loading, error] = useListVals(reference);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className=" border-x-2 min-h-[90vh] p-5 relative mt-14">
      <div className="flex-center">
        <Link
          to={"/write"}
          className="px-10 bg-green-700/20 text-center py-2 hover:bg-green-600/50 duration-500 "
        >
          Write New blog
        </Link>
      </div>
      <section className="mt-4 ring-1 p-2 grid grid-flow-row rounded-lg ">
        <h3 className="w-full bg-green-400/30 text-center mb-2 text-fuchsia-900 font-bold text-2xl">
          Recent Blogs
        </h3>
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

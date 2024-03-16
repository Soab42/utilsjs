import { ref } from "firebase/database";
import React from "react";
import { useObjectVal } from "react-firebase-hooks/database";
import { useLocation } from "react-router-dom";
import { db } from "../../../firebase";
import TextWithMarkup from "../code/TextWithMarkup";

export default function SinglePost() {
  const location = useLocation();
  const reference = ref(db, location?.pathname);
  const [snapshot, loading, error] = useObjectVal(reference);

  error && <strong>Error: {error}</strong>;
  loading && <span>;List: Loading...</span>;
  return (
    snapshot && (
      <div className="space-y-3 p-3">
        <h1 className="w-full text-center bg-blue-400/20 text-2xl pl-4">
          {snapshot?.name}
        </h1>
        <p>code snippet</p>
        <TextWithMarkup key={snapshot?.content} text={snapshot?.content} />
      </div>
    )
  );
}

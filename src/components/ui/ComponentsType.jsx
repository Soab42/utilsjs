import { ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { useListVals } from "react-firebase-hooks/database";
import { useLocation } from "react-router-dom";
import AuthorDetails from "./common/AuthorDetails";
import { db } from "../../../firebase";
import useActive from "../../hooks/useActive";
import TextWithMarkup from "./code/TextWithMarkup";
export default function ComponentsType() {
  const location = useLocation();
  const reference = ref(db, location?.pathname);
  const [snapshots, loading, error] = useListVals(reference);

  const datas = snapshots?.map((snapshot) =>
    Object?.values(snapshot)?.map((data) => data)
  );

  // Extract class names from content
  return (
    <div>
      <p>{location.pathname}</p>
      {datas?.flat().map((data, i) => (
        <ShowData key={i} data={data} />
      ))}
    </div>
  );
}

function ShowData({ data }) {
  const [content, setContent] = useState();
  const [show, setShow] = useActive();
  const [extractedClassNames, setExtractedClassNames] = useState([]);
  useEffect(() => {
    if (content) {
      const classNames = extractClassNames(content);
      // Apply the extracted class names to the span element
      setExtractedClassNames(classNames);
    }
  }, [content]);
  const handleClick = () => {
    setShow(true);
  };

  return (
    <div className="xl:w-full px-4 h-full">
      <div className="w-full bg-blue-400/40 p-3 flex gap-2 ">
        <button
          className={`${!show ? "bg-green-400" : ""} w-24  py-2`}
          onClick={() => setShow(false)}
        >
          code
        </button>
        <button
          className={`${show ? "bg-green-400" : ""} w-24  py-2`}
          onClick={handleClick}
        >
          preview
        </button>
      </div>
      {show ? (
        <div className="min-h-96 h-full bg-blue-400/20 p-2">
          <code className="px-4">Copy and paste code here</code>
          <textarea
            className="w-full h-36 ring-1 p-2 language-javascript"
            id="codeInput"
            onChange={(e) => setContent(e.target.value)}
          />
          <div
            className={extractedClassNames.join(" ")}
            style={{}}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      ) : (
        <TextWithMarkup text={data?.content} />
      )}

      <AuthorDetails post={data} />
    </div>
  );
}

// Function to extract class names from HTML content
const extractClassNames = (htmlContent) => {
  const classNames = [];
  const regex = /className=["']([^"']+)["']/g;
  let match;
  while ((match = regex.exec(htmlContent)) !== null) {
    const classString = match[1];
    const individualClassNames = classString.split(" ");
    classNames.push(...individualClassNames);
  }
  return classNames;
};

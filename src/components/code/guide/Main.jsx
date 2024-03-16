import React, { useState } from "react";
import Section from "./section";
import Img from "./Img";
import GuideForm from "./form";

export default function GuideMain({ data, category }) {
  const [section, setSections] = useState();
  const [file, setfiles] = useState();
  const [type, setType] = useState("");
  // console.log("main", category);
  // console.log(Object.entries(data));

  return data?.title ? (
    <div>
      <div className="h-10 uppercase rounded-b-full  text-center  shadow-md shadow-sky-900/80 text-sky-600 text-2xl">
        {data?.title}
      </div>
      <main className="flex flex-col gap-4 mt-5 p-4 text-justify">
        {Object.entries(data).map((entry) => {
          // console.log(entry[0]);
          if (entry[1].img) {
            return <Img data={entry[1].img} id={{ id: entry[0], category }} />;
          }
          if (entry[1].section) {
            return (
              <Section
                data={entry[1].section}
                id={{ id: entry[0], category }}
              />
            );
          }
        })}
      </main>

      {/* //add files or section here */}
      <GuideForm type={type} category={category} />
      {/* //end form section */}
      <div className="flex w-1/2">
        <button className="btn" onClick={() => setType("section")}>
          Add Section
        </button>
        <button className="btn" onClick={() => setType("image")}>
          Add Image
        </button>
      </div>
    </div>
  ) : (
    <div>no data found</div>
  );
}

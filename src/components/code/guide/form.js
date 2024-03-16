import Image from "next/image";
import React, { useRef, useState } from "react";
import Section from "./section";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage as DB } from "@firebase2";
import axios from "axios";
import TextEditor from "./Editor";
import { useAddDataMutation } from "@features/guide/guideApi";

export default function GuideForm({ type, category }) {
  const editorRef = useRef(null);
  const [file, setFile] = useState();
  const [fileSl, setFileSl] = useState();
  const [image, setImage] = useState();
  const [section, setSection] = useState();
  const [addData, isLoading, isSuccess] = useAddDataMutation();

  const handleUpload = async (file, category) => {
    const link = "guide/" + category + "/" + fileSl;
    const fileData = file;
    const dbRef = ref(DB, link);

    // 'file' comes from the Blob or File API
    uploadBytes(dbRef, fileData).then(async () => {
      const downloadURL = await getDownloadURL(dbRef);
      setImage(downloadURL);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload the file first
    if (file) {
      await handleUpload(file, category).then(() =>
        addData({ data: { img: image }, category })
          .unwrap()
          .then(() => e.target.reset())
      );
    }

    if (section) {
      addData({ data: { section: section }, category })
        .unwrap()
        .then(() => setSection(""));
    }

    // Add any additional logic or handling after the requests are made
  };
  // console.log("section", section);

  return (
    <form onSubmit={handleSubmit}>
      {type == "image" ? (
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <div className="flex justify-between bg-black/30 p-2 w-full">
            <input
              name="image"
              type="file"
              accept=".png,.jpg,.jpeg,.webp"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
            <label>
              Image No
              <input
                type="number"
                className=" ml-2 w-20 text-center"
                onChange={(e) => setFileSl(e.target.value)}
              />
            </label>

            <button className="bg-blue-400 px-4 h-10" type="submit">
              Add Image
            </button>
          </div>
        </div>
      ) : type == "section" ? (
        <div className="flex flex-col justify-between bg-black/20 p-2 items-center w-full">
          <div className="w-full flex flex-col justify-center items-center gap-2">
            {section && <Section data={section} />}
          </div>

          <div className="flex justify-center p-2 w-full">
            <TextEditor editorRef={editorRef} />
            <div className="flex flex-col justify-around">
              <div
                className="bg-green-400 px-4 h-10 active:bg-green-400/20 duration-300 flex justify-center items-center cursor-pointer"
                onClick={() => setSection(editorRef.current.getContent())}
              >
                Try It
              </div>
              {section && (
                <button className="bg-blue-400 px-4 h-10" type="submit">
                  Add Section
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </form>
  );
}

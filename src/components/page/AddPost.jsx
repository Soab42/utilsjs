import React, { useRef, useState } from "react";
import CodeEditor from "../code/CodeEditor";
import TextWithMarkup from "../code/TextWithMarkup";

export default function AddPost() {
  const [data, setData] = useState({ category: "", name: "", content: "" });
  const postRef = useRef();
  const handleClick = () => {
    // console.log(postRef.current.getContent());
    setData((prev) => ({ ...prev, content: postRef.current.getContent() }));
  };
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="flex flex-col">
      <h1 className="w-full bg-rose-700/20 p-2 text-center text-xl mb-2">
        Add New Post
      </h1>
      <div className="flex">
        <div className="w-1/2 ">
          <div className="flex px-2 items-center justify-between">
            <label htmlFor="category">
              Select Category
              <select
                name="category"
                id="category"
                className=" w-56 h-10 bg-green-100 ml-2 pl-2"
                onChange={handleChange}
              >
                <option value="select category">select category</option>
                <option value="components">Components</option>
                <option value="hooks">Hooks</option>
                <option value="utils">Utils</option>
                <option value="tools">Tools</option>
                <option value="blog">Blog</option>
              </select>
            </label>

            <label htmlFor="name">
              Name
              <input
                type="name"
                name="name"
                id="name"
                className="h-10 w-56 bg-green-100 ml-4 pl-2"
                placeholder="write post name"
                onChange={handleChange}
              />
            </label>
          </div>
          <CodeEditor ref={postRef} onClick={handleClick} />;
        </div>
        <div className="w-[calc(50%-1rem)] mx-4 p-2 ring-1 h-[80vh] overflow-y-scroll">
          <div className="flex gap-10 text-xl border-b-2 pb-2 ">
            <p>
              Category:{" "}
              <span className="text-emerald-600">{data.category}</span>
            </p>
            <p>
              Name: <span className="text-emerald-600">{data.name}</span>
            </p>
          </div>
          <TextWithMarkup text={data.content} />
        </div>
      </div>
    </div>
  );
}

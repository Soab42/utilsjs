import { push, ref, serverTimestamp } from "firebase/database";
// import firebase from "firebase/app";
import { useRef, useState } from "react";
import { db } from "../../../firebase";
import CodeEditor from "../code/CodeEditor";
import TextWithMarkup from "../code/TextWithMarkup";
import { useAuth } from "../../hooks/useAuth";
import { componentsList } from "../../data/componentsType";
import useActive from "../../hooks/useActive";
import { useNavigate } from "react-router-dom";
export default function AddPost() {
  const [data, setData] = useState({ category: "", name: "", content: "" });
  const [loading, setLoading] = useActive();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();
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
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const dataRef = ref(db, `${data.category}/${data.name}`);
    // console.log(serverTimestamp);
    push(dataRef, {
      ...data,
      createdAt: serverTimestamp(), // Server-side timestamp
      updatedAt: serverTimestamp(),
      author: user,
    })
      .then((data) => {
        console.log(data.root.key);
        setLoading(false);
        alert(data.key);
      })
      .catch((err) => {
        setLoading(false), setError(err.message);
      });
  };

  error && <strong>Error: {error}</strong>;

  loading && <span> Loading...</span>;
  return (
    <div className="flex flex-col">
      <h1 className="w-full bg-rose-700/20 p-2 text-center text-xl mb-2">
        Add New Post
      </h1>
      <div className="flex">
        <form className="w-1/2 " onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-3 px-2 xl:items-center justify-between">
            <label
              htmlFor="category"
              className="flex justify-between items-center w-[calc(50%-1em)]"
            >
              Category
              <select
                name="category"
                id="category"
                className=" w-56 h-10 bg-green-100 ml-2 pl-2"
                onChange={handleChange}
                required
              >
                <option>select category</option>
                <option value="components">Components</option>
                <option value="hooks">Hooks</option>
                <option value="utils">Utils</option>
                <option value="tools">Tools</option>
                <option value="blog">Blog</option>
              </select>
            </label>
            {data.category === "components" && (
              <label
                htmlFor="type"
                className="flex justify-between items-center w-[calc(50%-1em)]"
              >
                Type
                <select
                  name="type"
                  id="type"
                  className=" w-56 h-10 bg-green-100 ml-2 pl-2"
                  onChange={handleChange}
                  required
                >
                  <option>select category</option>
                  {componentsList.map((component) => (
                    <option value={component} key={component}>
                      {component}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <label
              htmlFor="name"
              className="flex justify-between items-center w-[calc(50%-1em)]"
            >
              Name
              <input
                type="name"
                name="name"
                id="name"
                required
                className="h-10 w-56 bg-green-100 ml-4 pl-2"
                placeholder="write post name"
                onChange={handleChange}
              />
            </label>
          </div>
          <CodeEditor ref={postRef} onClick={handleClick} />;
        </form>
        <div className="w-[calc(50%-1rem)] mx-4 p-2 ring-1 h-[80vh] overflow-y-scroll">
          <div className="flex gap-10 text-xl border-b-2 pb-2 ">
            <p>
              Category:
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

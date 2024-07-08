import { push, ref, serverTimestamp, set } from "firebase/database";
// import firebase from "firebase/app";
import { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../firebase";
import CodeEditor from "../components/ui/code/CodeEditor";
import TextWithMarkup from "../components/ui/code/TextWithMarkup";
import { componentsList } from "../docs/componentsTypeList";
import useActive from "../hooks/useActive";
import { useAuth } from "../hooks/useAuth";
import { generateSlug } from "../utils/generateSlug";
export default function AddPost() {
   const { category } = useParams();
   const [data, setData] = useState({
      category: category,
      name: "",
      content: "",
   });
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
      if (name === "name") {
         setData((prev) => ({ ...prev, [name]: generateSlug(value) }));
      } else {
         setData((prev) => ({ ...prev, [name]: value }));
      }
      // console.log(test);
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      let dataRef;
      if (data.category === "components") {
         dataRef = ref(db, `${data.category}/${data.type}/${data.name}`);
      } else {
         dataRef = ref(db, `${data.category}/${data.name}`);
      }
      // console.log(serverTimestamp);
      push(dataRef, {
         ...data,
         createdAt: serverTimestamp(), // Server-side timestamp
         updatedAt: serverTimestamp(),
         author: user,
      })
         .then((res) => {
            set(ref(db, "usersData/" + user?.userId + "/posts/" + res.key), {
               postId: res.key,
               category: data.category,
               name: data.name,
            })
               .then((res) =>
                  console.log("post added to use post list. key-", res.key)
               )
               .catch((err) => console.log(err.message));
            setLoading(false);
            if (data.category === "components") {
               navigate(`/${data.category}/${data.type}`);
            } else if (data.category === "blogs") {
               navigate(`/${data.category}/${data.name}/${res.key}`);
            } else {
               navigate(`/${data.category}/${data.name}`);
            }
            alert(res.key);
         })
         .catch((err) => {
            setLoading(false), setError(err.message);
         });
   };

   error && <strong>Error: {error}</strong>;

   loading && <span> Loading...</span>;
   return (
      <div className="flex flex-col mt-16 px-4">
         <h1 className="w-full bg-[#5cf24842]  border-b-2 border-emerald-400 p-2 text-center text-xl mb-2">
            Add New Post
         </h1>
         <div className="xl:flex ">
            <form className="xl:w-1/2 " onSubmit={handleSubmit}>
               <div className="flex flex-wrap gap-3 px-2 xl:items-center justify-between">
                  <label
                     htmlFor="category"
                     className="flex justify-between items-center xl:w-[calc(50%-1em)] w-full"
                  >
                     Category
                     <select
                        name="category"
                        id="category"
                        className=" w-56 h-10 bg-green-100 ml-2 pl-2"
                        defaultValue={category ?? "select category"}
                        onChange={handleChange}
                        required
                     >
                        <option>select category</option>
                        <option value="components">Components</option>
                        <option value="hooks">Hooks</option>
                        <option value="utils">Utils</option>
                        <option value="tools">Tools</option>
                        <option value="blogs">Blog</option>
                     </select>
                  </label>
                  {data.category === "components" && (
                     <label
                        htmlFor="type"
                        className="flex justify-between items-center w-full xl:w-[calc(50%-1em)]"
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
                              <option
                                 value={component.toLowerCase()}
                                 key={component}
                              >
                                 {component}
                              </option>
                           ))}
                        </select>
                     </label>
                  )}

                  <label
                     htmlFor="name"
                     className="flex justify-between items-center xl:w-[calc(50%-1em)] w-full"
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
            <div className="xl:w-[calc(50%-1rem)] mx-4 p-2 ring-1 h-[80vh] overflow-y-scroll">
               <div className="flex gap-10 text-sm border-b-2 pb-2 ">
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

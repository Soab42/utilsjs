import { ref } from "firebase/database";
import { useObject } from "react-firebase-hooks/database";
import { db } from "../../../../firebase";
import CardAuthor from "../blog/CardAuthor";
import { Link } from "react-router-dom";
export default function UserPost({ post = {} }) {
  const userRef = ref(db, post.category);
  const [snapshot, loading, error] = useObject(userRef);
  const data = flattenObject(snapshot?.val(), post.postId);
  console.log(data);
  console.log(snapshot?.val());
  return (
    <div className="relative w-[calc(33.33%-8px)]">
      <Link to={`${data?.name}`}>
        <div className="blog-card h-full " ref={ref} key={data?.id}>
          <div className="relative flex flex-col justify-between">
            <div>
              <h3 className="dark:text-slate-700 text-xl lg:text-2xl">
                {data?.name}
              </h3>
              <p
                className="mb-6 text-base text-slate-500 mt-1 line-clamp-5"
                dangerouslySetInnerHTML={{ __html: data?.content }}
              >
                {/* {data.content} */}
              </p>
            </div>

            <CardAuthor author={data?.author} createdAt={data?.createdAt} />
          </div>
        </div>
      </Link>
      {/* {isMe && <ActionDot post={data} />} */}
    </div>
  );
}

function flattenObject(obj = {}, key) {
  // Base case: if the object is null or undefined, return null
  if (obj === null || typeof obj !== "object") {
    return null;
  }

  // Check if the current object has the key
  if (obj.hasOwnProperty(key)) {
    return obj[key]; // Return the value if key found
  }

  // Iterate through the object keys recursively
  for (let k in obj) {
    // If the current property is an object, search recursively
    if (typeof obj[k] === "object") {
      const result = flattenObject(obj[k], key);
      if (result !== null) {
        return result; // Return the value if found in nested object
      }
    }
  }

  // Return null if key not found
  return null;
}
// Recursive function to search for a key in a nested object

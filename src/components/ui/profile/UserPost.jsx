import { ref } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { useObject } from "react-firebase-hooks/database";
import { Link } from "react-router-dom";
import { auth, db } from "../../../../firebase";
import { removeSlug } from "../../../utils/generateSlug";
import CardAuthor from "../blog/CardAuthor";
import ActionDot from "../common/ActionDot";
export default function UserPost({ post = {}, userId }) {
  const postRef = ref(
    db,
    post?.category + "/" + post?.name + "/" + post?.postId
  );
  const [snapshot, loading, error] = useObject(postRef);
  const [user] = useAuthState(auth);

  const data = snapshot?.val();
  const isMe = userId === user?.uid;
  debugger;
  error && (
    <div className="flex-center h-screen text-5xl capitalize">error</div>
  );
  loading && (
    <div className="flex-center h-screen text-5xl capitalize">loading</div>
  );
  return (
    data && (
      <div className="relative w-full text-left overflow-hidden ">
        <Link to={getPostLink(post)}>
          <div className="blog-card h-full " key={post}>
            <div className="relative flex flex-col justify-between">
              <div>
                <h3 className="dark:text-slate-700 text-xl">
                  {removeSlug(data?.name)}
                </h3>
                <pre className="prose max-h-24 overflow-hidden">
                  <code
                    className="mb-6 text-base text-slate-500 mt-1 line-clamp-5"
                    dangerouslySetInnerHTML={{ __html: data?.content }}
                  />
                </pre>
              </div>

              <CardAuthor author={data?.author} createdAt={data?.createdAt} />
              <code className="text-right font-bold bg-white">
                Category: {post?.category}
              </code>
            </div>
          </div>
        </Link>
        {isMe && <ActionDot post={data} postId={post?.postId} />}
      </div>
    )
  );
}

// function flattenObject(obj = {}, key) {
//   // Base case: if the object is null or undefined, return null
//   if (obj === null || typeof obj !== "object") {
//     return null;
//   }

//   // Check if the current object has the key
//   if (obj.hasOwnProperty(key)) {
//     return obj[key]; // Return the value if key found
//   }

//   // Iterate through the object keys recursively
//   for (let k in obj) {
//     // If the current property is an object, search recursively
//     if (typeof obj[k] === "object") {
//       const result = flattenObject(obj[k], key);
//       if (result !== null) {
//         return result; // Return the value if found in nested object
//       }
//     }
//   }

//   // Return null if key not found
//   return null;
// }
// Recursive function to search for a key in a nested object
function getPostLink(data) {
  if (data?.category == "blogs") {
    return "/" + data.category + "/" + data.name + "/" + data.postId;
  } else {
    return "/" + data.category + "/" + data.name;
  }
}

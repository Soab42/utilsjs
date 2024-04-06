import { ref } from "firebase/database";
import { useObject } from "react-firebase-hooks/database";
import { Link } from "react-router-dom";
import { db } from "../../../../firebase";
import { removeSlug } from "../../../utils.js/generateSlug";
import CardAuthor from "../blog/CardAuthor";
export default function UserPost({ post = {} }) {
    const userRef = ref(
        db,
        post?.category + "/" + post?.name + "/" + post?.postId
    );
    const [snapshot, loading, error] = useObject(userRef);
    const { name, id, content, createdAt, author } = snapshot?.val() || {}; // logged user data
    const { postId, category } = post || {};
    return (
        <div className="relative w-full">
            <Link to={`/${category}/${name}/${postId}`}>
                <div
                    className="blog-card h-full "
                    key={id}>
                    <div className="relative flex flex-col justify-between">
                        <div>
                            <h3 className="dark:text-slate-700 text-xl lg:text-2xl">
                                {removeSlug(name)}
                            </h3>
                            <p
                                className="mb-6 text-base text-slate-500 mt-1 line-clamp-5"
                                dangerouslySetInnerHTML={{
                                    __html: content,
                                }}
                            />
                        </div>

                        <CardAuthor
                            author={author}
                            createdAt={createdAt}
                        />
                    </div>
                </div>
            </Link>
            {/* {isMe && <ActionDot post={data} />} */}
        </div>
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

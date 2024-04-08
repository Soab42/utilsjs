import { useLocation } from "react-router-dom";
// import useDynamicTitle from "../../hooks/useDynamicTitle";
import BlogDetails from "../blog/BlogDetails";
// import FloatingAction from "../blog/actionButtons/FloatingAction";
// import Comments from "../blog/comments/Comments";
// import Error from "../common/Error";
import BlogPostLoader from "../loader/BlogPostLoader";
import { useObject } from "react-firebase-hooks/database";
import { ref } from "firebase/database";
import { db } from "../../../../firebase";

export default function SingleBlog() {
  const location = useLocation();
  const reference = ref(db, decodeURIComponent(location?.pathname));
  const [snapshot, loading, error] = useObject(reference);

  let content;
  if (loading) {
    content = <BlogPostLoader />;
  } else if (error) {
    // content = <Error error={error.message} />;
  } else {
    content = (
      <>
        <BlogDetails blog={snapshot.val()} />
        {/* <Comments comments={post?.comments} postId={post?.id} />  */}
        {/* <FloatingAction post={post} /> */}
      </>
    );
  }

  return <main className="mb-5">{content}</main>;
}

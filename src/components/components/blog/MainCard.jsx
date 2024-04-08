import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

// import ActionDot from "../common/ActionDot";
import CardAuthor from "./CardAuthor";
import { removeSlug } from "../../../utils.js/generateSlug";
import ActionDot from "../common/ActionDot";
import { isUser } from "../../../utils.js/isUser";
import { auth } from "../../../../firebase";
export default function MainCard({ data = {}, postId }) {
  const [user, loading, error] = useAuthState(auth);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const isMe = isUser(data.author, user.uid);
  return (
    <div
      className="relative xl:w-[calc(33.33%-8px)] w-full "
      ref={ref}
      key={data.id}
      style={{
        background: isInView ? "" : "white",
        transform: !isInView ? "translateY(30px)" : "translateX(0px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1s cubic-bezier(0.25, 0.1, 0.25, 1) .1s",
      }}
    >
      <Link to={`${encodeURIComponent(data?.name)}/${postId}`}>
        <div className="blog-card h-full ">
          <div className="relative flex flex-col justify-between">
            <div>
              <h3 className="dark:text-slate-700 text-xl lg:text-2xl">
                {removeSlug(data.name)}
              </h3>
              <p
                className="mb-6 text-base text-slate-500 mt-1 line-clamp-5"
                dangerouslySetInnerHTML={{ __html: data.content }}
              >
                {/* {data.content} */}
              </p>
            </div>

            <CardAuthor
              author={data.author}
              likes={data.likes}
              createdAt={data.createdAt}
            />
          </div>
        </div>
      </Link>
      {isMe && <ActionDot post={data} />}
    </div>
  );
}

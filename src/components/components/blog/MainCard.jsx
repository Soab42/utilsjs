import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

// import ActionDot from "../common/ActionDot";
import CardAuthor from "./CardAuthor";
export default function MainCard({ data = {}, postId }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 100px -50px 0px",
    });
    return (
        <div className="relative w-[calc(33.33%-8px)]">
            <Link to={`${data.name}/${postId}`}>
                <div
                    className="blog-card"
                    ref={ref}
                    key={data.id}
                    style={{
                        background: isInView ? "" : "white",
                        transform: !isInView
                            ? "translateY(30px)"
                            : "translateX(0px)",
                        opacity: isInView ? 1 : 0,
                        transition:
                            "all 1s cubic-bezier(0.25, 0.1, 0.25, 1) .1s",
                    }}>
                    <div className="relative">
                        <h3 className="dark:text-slate-700 text-xl lg:text-2xl">
                            {data.name}
                        </h3>
                        <p
                            className="mb-6 text-base text-slate-500 mt-1 line-clamp-5"
                            dangerouslySetInnerHTML={{ __html: data.content }}>
                            {/* {data.content} */}
                        </p>

                        <CardAuthor
                            author={data.author}
                            likes={data.likes}
                            createdAt={data.createdAt}
                        />
                    </div>
                </div>
            </Link>
            {/* {isMe && <ActionDot post={data} />} */}
        </div>
    );
}

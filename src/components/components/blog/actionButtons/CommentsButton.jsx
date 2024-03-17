import CommentIcon from "../../../assets/icons/comment.svg";
import AnimatedValueSpan from "../../animated/AnimatedValueSpan";
export default function CommentsButton({ commentsLength }) {
  return (
    <a href="#comments" className="">
      <li className="">
        <img src={CommentIcon} alt="Comments" />
        <div className="relative">
          <AnimatedValueSpan initialValue={commentsLength} />
        </div>
        {/* <span>{commentsLength}</span> */}
      </li>
    </a>
  );
}

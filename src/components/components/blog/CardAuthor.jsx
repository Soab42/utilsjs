import AuthorImage from "../common/AuthorImage";
import getDateFormat from "../../../utils.js/getDateFormat";

export default function CardAuthor({ author, likes, createdAt }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center capitalize space-x-2">
        <AuthorImage author={author} />

        <div>
          <h5 className="dark:text-slate-800 text-sm">
            <button>{author?.name}</button>
          </h5>
          <div className="flex items-center text-xs text-slate-700">
            <span>{getDateFormat(createdAt)}</span>
          </div>
        </div>
      </div>

      <div className="text-sm px-2 py-1 text-slate-700">
        <span>{likes?.length} Likes</span>
      </div>
    </div>
  );
}

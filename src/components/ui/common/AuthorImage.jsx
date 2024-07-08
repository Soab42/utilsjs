import { useEffect, useState } from "react";
import { generateColor } from "../../../utils/generateColor";

export default function AuthorImage({ author = {} }) {
  const [nameBackgroundColor, setNameBackgroundColor] = useState("");

  // Effect to generate the color once on component mount
  useEffect(() => {
    if (author.name) {
      const color = generateColor(author.name);
      setNameBackgroundColor(color);
    }
  }, [author.name]);

  return (
    <div className="avater-img bg-orange-600 text-white overflow-hidden">
      {author?.avatar ? (
        <img
          src={author.avatar}
          alt={author?.name?.slice(0, 1)}
          className="w-full h-full rounded-full"
        />
      ) : (
        <span
          className="bg-orange-500 w-full h-full flex-center"
          style={{ backgroundColor: nameBackgroundColor }}
        >
          {author?.name?.slice(0, 1)}
        </span>
      )}
    </div>
  );
}

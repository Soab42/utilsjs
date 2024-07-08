import React from "react";

export default function BlogTags({ tags }) {
  const tagsArray = tags?.split(",");

  return (
    <ul className="tags">
      {tagsArray?.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}

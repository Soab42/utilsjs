// function for generating url for blog thumbnail from a post data

export const getBlogImage = (link) => {
  let thumbnailLink;
  if (typeof link === "string") {
    thumbnailLink = `${
      import.meta.env.VITE_SERVER_BASE_URL
    }/uploads/blog/${link}`;
  }
  return thumbnailLink;
};

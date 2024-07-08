// function for generating url from a post data
export const generatePostURL = (post) => {
  const sanitizedTitle = post?.title
    ?.replace(/\s+/g, "-")
    .replace(/[\s,!?|]/g, "");
  return `/blog/${sanitizedTitle}-${post?.id}`;
};

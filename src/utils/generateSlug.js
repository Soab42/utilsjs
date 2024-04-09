// function for generating url from a post data
export const generateSlug = (text) => {
  const sanitizedTitle = text?.replace(/\s+/g, "-").replace(/[\s,!?|]/g, "");
  return sanitizedTitle;
};
// function for generating slug from a text

// function for removing slug from a slug
export const removeSlug = (slug) => {
  const sanitizedText = slug?.replace(/-/g, " ");
  return sanitizedText;
};

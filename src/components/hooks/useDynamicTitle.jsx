import { useEffect } from "react";

//set dynamic title for different page
function useDynamicTitle(title) {
  useEffect(() => {
    if (title) {
      document.title = title + " | React Blogify";
    } else {
      document.title = "React Blogify | Learn with Sumit";
    }
  }, [title]); // Run effect when the title changes
}

export default useDynamicTitle;

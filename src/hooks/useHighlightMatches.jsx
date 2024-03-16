// headlight search results keyword that matches
export function useHighlightMatches(searchValue) {
  const highlightMatches = (text) => {
    if (!searchValue) return text; // If there's no query, return the original text
    const regex = new RegExp(`(${searchValue})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark
          key={index}
          className="dark:bg-blue-900 bg-green-400 text-inherit"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return highlightMatches;
}

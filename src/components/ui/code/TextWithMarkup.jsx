/* eslint-disable react/prop-types */
import CodeViewer from "./CodeViewer";
export default function TextWithMarkup({ text }) {
  // Define the regex pattern
  const pattern = /<pre>@(.*?)@#/gs;
  // Split the text into chunks using the regular expression
  const chunks = text?.split(pattern);

  return (
    <div className="text-slate-700">
      {chunks?.map((chunk, index) => {
        if (chunk.startsWith("code")) {
          const modifiedText = chunk.replace(/code/g, "");
          // If the chunk is markup, render it as code
          return <CodeViewer key={index} text={modifiedText} />;
        } else {
          return (
            <span
              key={index}
              className="prose"
              dangerouslySetInnerHTML={{ __html: capitalizeSentences(chunk) }}
            />
          );
        }
      })}
    </div>
  );
}
// Function to capitalize the first letter of each sentence
const capitalizeSentences = (text) => {
  return text.replace(/(^|\.\s+)([a-z])/g, (match) => match.toUpperCase());
};

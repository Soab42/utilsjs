/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const CodeEditor = forwardRef((props, ref) => {
  const handleCode = () => {
    if (ref.current) {
      // Inserting code block into the editor
      ref.current.insertContent("<pre>@code\n //add your code here \n@#</pre>");
    }
  };
  return (
    <div className="p-4">
      <div>
        <Editor
          apiKey="j32j82szrveom95zxgyc9s1qie1ejm67r96gbvcj8itwmd6d"
          onInit={(evt, editor) => (ref.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 400,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
              "codesample code",
              "emoticons",
            ],
            codesample_languages: [
              { text: "HTML/XML", value: "markup" },
              { text: "JavaScript", value: "javascript" },
              { text: "CSS", value: "css" },
              { text: "PHP", value: "php" },
            ],
            toolbar:
              "undo redo|emoticons|image| codesample code | fullscreen  | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
      <button
        className="rounded-md px-10 mt-4 py-2 bg-gray-200 hover:bg-green-300 duration-200"
        type="button"
        onClick={props.onClick}
      >
        Set & View
      </button>
      <button
        className="px-4 rounded-md mt-4 ml-4 py-2 bg-blue-200 hover:bg-green-300 duration-200"
        type="button"
        onClick={handleCode}
      >
        <code>add code block</code>
      </button>
      <button
        type="submit"
        className="px-4 rounded-md mt-4 mx-2 py-2 bg-green-200 float-right hover:bg-green-300 duration-200"
      >
        submit
      </button>
    </div>
  );
});
export default CodeEditor;

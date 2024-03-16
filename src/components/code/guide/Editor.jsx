import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App({ editorRef }) {
  return (
    <>
      <Editor
        apiKey="j32j82szrveom95zxgyc9s1qie1ejm67r96gbvcj8itwmd6d"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          height: 250,
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
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat| code | help ",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
}

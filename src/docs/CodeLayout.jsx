import useActive from "../hooks/useActive";
import CodeViewer from "./CodeViwer";

export default function CodeLayout({ children, content }) {
  const [showCode, setShowCode] = useActive();
  return (
    <div className="">
      <div className="w-full bg-blue-900/90 rounded-t-md p-2 flex gap-2">
        <button
          className={`px-4 ${
            !showCode ? "bg-blue-950" : ""
          } text-white rounded py-1`}
          onClick={() => setShowCode(false)}
        >
          preview
        </button>
        <button
          className={`px-4 ${
            showCode ? "bg-blue-950" : ""
          } text-white rounded py-1`}
          onClick={() => setShowCode(true)}
        >
          code
        </button>
      </div>
      <div className="max-h-96 p-4 border border-black/10 ">
        {!showCode ? children : <CodeViewer text={content} />}
      </div>
    </div>
  );
}

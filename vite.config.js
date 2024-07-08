import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
export default defineConfig(async () => {
  // const mdx = await import("@mdx-js/rollup");

  return {
    plugins: [
      { enforce: "pre", ...mdx(/* jsxImportSource: …, otherOptions… */) },
      react(),
    ],
  };
});

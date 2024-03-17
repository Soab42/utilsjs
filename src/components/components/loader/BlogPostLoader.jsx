import { motion } from "framer-motion";
import React from "react";
export default function BlogPostLoader() {
  return (
    <motion.div>
      <section className="xl:w-[80vw]">
        <div className="container text-center py-8">
          <div className="h-10 w-4/5 rounded-md m-auto dark:bg-white/10 bg-black/10 animate-pulse"></div>
        </div>
        <motion.div
          className="flex justify-center items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="size-10 rounded-full bg-pink-200/30"></div>
          <div className="h-4 rounded-full bg-slate-600 w-20"></div>
          <div className="h-4 rounded-full bg-slate-600 w-36 ml-5"></div>
          <div className="h-4 rounded-full bg-slate-600 w-16 ml-4"></div>
        </motion.div>
        <motion.div
          className="m-auto w-full md:w-8/12 object-cover md:h-96 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        >
          <div className="blog-thumb w-full bg-black/80"></div>
          <div className="blog-thumb w-full bg-black/80"></div>
        </motion.div>
        <motion.div
          className="flex justify-center items-center gap-2 mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          <div className="h-6 rounded-md bg-slate-600 w-24 ml-4"></div>
          <div className="h-6 rounded-md bg-slate-600 w-24 ml-4"></div>
          <div className="h-6 rounded-md bg-slate-600 w-24 ml-4"></div>
          <div className="h-6 rounded-md bg-slate-600 w-24 ml-4"></div>
        </motion.div>

        <div className="container space-y-2 text-center py-8 animate-pulse">
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <br />
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <br />
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <br />
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
          <div className="h-2 w-4/5 rounded-md m-auto dark:bg-white/20 bg-black/20"></div>
        </div>
      </section>
    </motion.div>
  );
}

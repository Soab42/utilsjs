import { AnimatePresence, motion } from "framer-motion";

export default function MainCardLoader() {
  return (
    <motion.div
      style={{ display: "flex", flexDirection: "column" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <CardLoader key={index} index={index} />
      ))}
    </motion.div>
  );
}

export function CardLoader({ index }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [1, 0.2, 1], scale: [1, 1.01, 1] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.5,
        }}
        exit={{ x: 100 }}
        className="blog-card"
        style={{ marginBottom: "2px" }}
      >
        <div className="blog-thumb bg-black/10 dark:bg-slate-400/10" />
        <div className="mt-2 relative">
          <h3 className="h-10 rounded-lg bg-indigo-600/10"></h3>
          <div className="mb-6 mt-3 space-y-2">
            <p className="h-2 bg-black/10 dark:bg-slate-200/10"></p>
            <p className="h-2 bg-black/10 dark:bg-slate-200/10"></p>
            <p className="h-2 bg-black/10 dark:bg-slate-200/10"></p>
          </div>

          <div className="flex w-full">
            <div className="w-12 h-10 bg-pink-400/20 rounded-full"></div>
            <div className="flex justify-between items-center w-full pl-2">
              <div className="flex-center-col gap-2">
                <p className="w-36 h-3 rounded-md bg-black/10 dark:bg-slate-200/10"></p>
                <p className="w-36 h-2 rounded-full bg-slate-200/20"></p>
              </div>
              <div className="flex gap-1">
                <div className="h-2 rounded-full w-4 bg-slate-600"></div>
                <div className="h-2 rounded-full w-10 bg-slate-600"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

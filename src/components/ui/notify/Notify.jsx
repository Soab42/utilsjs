import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useNotify } from "../../../contexts/NotifyContext";
import useActive from "../../../hooks/useActive";

export default function Notify() {
  const { notifications } = useNotify();
  return (
    <div className="flex flex-col-reverse gap-2 ">
      {notifications?.map((notif) => (
        <NotificationComponent key={notif.id} data={notif} />
      ))}
    </div>
  );
}

const NotificationComponent = ({ data }) => {
  const [show, setShow] = useActive(true);
  console.log(data);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute left-5 h-fit min-h-10 w-fit overflow-hidden bg-pink-400 rounded flex-center p-1 space-x-2"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          exit={{ x: -200 }}
        >
          <div className="message">{data.message}</div>
          <button className="" onClick={setShow}>
            x
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

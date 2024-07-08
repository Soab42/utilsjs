import React, { createContext, useContext, useState } from "react";

const NotifyContext = createContext();
export const useNotify = () => useContext(NotifyContext);

export default function NotifyContextProvider({ children }) {
  const [notifications, setNotifications] = useState([]);
  const notify = (message) => {
    const id = new Date().getTime();
    setNotifications((prev) => [...prev, { id, message }]);
    // Schedule the removal of the notification after 3 seconds
    setTimeout(() => {
      removeNotification(id);
    }, 3000);
  };

  const removeNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotifyContext.Provider
      value={{ notifications, notify, removeNotification }}
    >
      {children}
    </NotifyContext.Provider>
  );
}

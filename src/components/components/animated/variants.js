// variants collection for framer-motion animation

export const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const actionModalVariants = {
  initial: {
    opacity: 0,
    y: "-10%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.2,
      type: "spring",
      stiffness: 100,
    },
  },
  exit: {
    opacity: 0,
    y: "-10%",
    transition: {
      duration: 0.2,
    },
  },
};

export const searchVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    x: "100vh",
    transition: {
      duration: 0.2,
    },
  },
};

export const searchChildVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 200,
    },
  },
  exit: {
    opacity: 0,
    x: "100vh",
    transition: {
      duration: 0.2,
    },
  },
};

export const buttonVariant = {
  hidden: {
    opacity: 0,
    position: "absolute",
    right: "2px",
    translateX: "10vw",
    transition: {
      opacity: { duration: 0.5 },
      translateX: { duration: 0.5 },
    },
  },
  visible: {
    opacity: 1,
    position: "absolute",
    right: "2px",
    translateX: 0,
    transition: {
      opacity: { duration: 0.5 },
      translateX: { duration: 0.5 },
    },
  },
};

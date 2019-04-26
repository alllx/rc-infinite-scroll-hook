const throttle = (callback: () => void, limit = 300) => {
  let wait = false;

  return () => {
    if (!wait) {
      callback();
      wait = true;
      setTimeout(() => (wait = false), limit);
    }
  };
};

export default throttle;

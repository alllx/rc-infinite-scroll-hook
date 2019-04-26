const throttle = (callback: () => void, limit = 300) => {
  let wait = false;
  let callbackTiemout: number;

  return () => {
    if (!wait) {
      clearTimeout(callbackTiemout);
      callback();
      wait = true;
      setTimeout(() => {
        wait = false;
        callbackTiemout = window.setTimeout(callback, limit);
      }, limit);
    }
  };
};

export default throttle;

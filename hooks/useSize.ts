import { useEffect, useState } from "react";

const useSize = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    setSize(window.innerWidth);
  }, []);
  return {
    sm: size <= 768,
    lg: size > 768,
  };
};

export default useSize;

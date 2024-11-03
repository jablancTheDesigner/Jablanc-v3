import { useScroll, motion } from "framer-motion";
import { ReactElement } from "react";

const ProgressBar = (): ReactElement => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className={`bg-primary h-[10px]`}
      style={{ width: scrollYProgress }}
    />
  );
};

export default ProgressBar;

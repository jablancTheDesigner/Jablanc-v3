import { motion } from "framer-motion";

const AnimatedComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      initial={{ scale: 0 }}
      whileInView={{ scale: [0, 1], offset: 100 }}
      className="w-full flex">
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;

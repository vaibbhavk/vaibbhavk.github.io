import { motion } from "framer-motion";

const MyComponent = () => (
  <motion.div
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
  >
    <p>opsmopmp</p>
  </motion.div>
);

export default MyComponent;

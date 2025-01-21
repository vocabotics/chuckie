import { motion } from 'framer-motion';

export const Egg = ({ x, y, collected }: { x: number; y: number; collected: boolean }) => (
  <motion.div
    className={`absolute w-6 h-6 ${collected ? 'invisible' : 'visible'}`}
    animate={{
      x: x * 48 + 12,
      y: 256 - y * 48 + 12,
      scale: collected ? 0 : 1
    }}
  >
    <div className="w-full h-full bg-yellow-400 rounded-full" />
  </motion.div>
);

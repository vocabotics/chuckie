import { motion } from 'framer-motion';

export const Enemy = ({ x, y }: { x: number; y: number }) => (
  <motion.div
    className="absolute w-8 h-8 bg-destructive rounded-full"
    animate={{
      x: x * 48,
      y: 256 - y * 48,
      scale: [1, 0.8, 1]
    }}
    transition={{ duration: 0.5, repeat: Infinity }}
  />
);

import { motion } from 'framer-motion';
import { useGameStore } from '../stores/gameStore';

export const Player = () => {
  const { player } = useGameStore();

  return (
    <motion.div
      className="absolute w-8 h-8 bg-primary rounded-full"
      animate={{
        x: player.x * 48,
        y: 256 - player.y * 48,
        scale: player.isJumping ? 1.2 : 1
      }}
      transition={{ type: 'spring', stiffness: 300 }}
    />
  );
};

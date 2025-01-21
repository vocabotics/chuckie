import { useEffect } from 'react';
import { useGameStore } from '../stores/gameStore';

export const useGameLoop = () => {
  const { updateEnemies, checkCollisions, gameOver } = useGameStore();

  useEffect(() => {
    let animationFrameId: number;

    const gameLoop = () => {
      if (!gameOver) {
        updateEnemies();
        checkCollisions();
        animationFrameId = requestAnimationFrame(gameLoop);
      }
    };

    gameLoop();
    return () => cancelAnimationFrame(animationFrameId);
  }, [gameOver, updateEnemies, checkCollisions]);
};

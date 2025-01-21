import { useEffect } from 'react';
import { useGameStore } from '../stores/gameStore';
import type { Direction } from '../types';

export const useKeyboardControls = () => {
  const { movePlayer } = useGameStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const directions: Record<string, Direction> = {
        ArrowLeft: 'left',
        ArrowRight: 'right',
        ArrowUp: 'up',
        ArrowDown: 'down'
      };

      if (directions[e.key]) {
        e.preventDefault();
        movePlayer(directions[e.key]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [movePlayer]);
};

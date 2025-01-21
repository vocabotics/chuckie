import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GameState } from '../types';

const INITIAL_STATE: GameState = {
  player: { x: 0, y: 0, velocityY: 0, isJumping: false },
  enemies: [],
  eggs: [],
  score: 0,
  lives: 3,
  isPlaying: false,
  gameOver: false
};

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      ...INITIAL_STATE,
      movePlayer: (direction: 'left' | 'right' | 'up' | 'down') => {
        const { player } = get();
        const newPlayer = { ...player };

        switch (direction) {
          case 'left':
            newPlayer.x = Math.max(0, player.x - 1);
            break;
          case 'right':
            newPlayer.x = Math.min(7, player.x + 1);
            break;
          case 'up':
            if (!player.isJumping) {
              newPlayer.velocityY = 2;
              newPlayer.isJumping = true;
            }
            break;
        }

        set({ player: newPlayer });
      },
      updateEnemies: () => {
        set(state => ({
          enemies: state.enemies.map(enemy => ({
            ...enemy,
            x: enemy.x + (enemy.direction === 1 ? 0.1 : -0.1)
          }))
        }));
      },
      checkCollisions: () => {
        const { player, eggs, enemies } = get();
        const collectedEgg = eggs.find(
          egg => !egg.collected && egg.x === player.x && egg.y === player.y
        );

        if (collectedEgg) {
          set(state => ({
            score: state.score + 10,
            eggs: state.eggs.map(egg =>
              egg.id === collectedEgg.id ? { ...egg, collected: true } : egg
            )
          }));
        }

        const enemyCollision = enemies.find(
          enemy => Math.abs(enemy.x - player.x) < 1 && Math.abs(enemy.y - player.y) < 1
        );

        if (enemyCollision) {
          set(state => ({
            lives: state.lives - 1,
            gameOver: state.lives - 1 === 0
          }));
        }
      },
      resetGame: () => set(INITIAL_STATE)
    }),
    { name: 'chuckie-egg-game' }
  )
);

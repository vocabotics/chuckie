import { useEffect } from 'react';
import { useGameStore } from '../stores/gameStore';
import { Player } from '../components/Player';
import { Enemy } from '../components/Enemy';
import { Egg } from '../components/Egg';
import { HUD } from '../components/HUD';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useGameLoop, useKeyboardControls } from '../hooks';

export const Game = () => {
  const { resetGame, eggs, enemies, gameOver } = useGameStore();
  const navigate = useNavigate();

  useGameLoop();
  useKeyboardControls();

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="relative w-[512px] h-[512px] bg-accent rounded-lg overflow-hidden">
        <HUD />
        <Player />
        {enemies.map(enemy => (
          <Enemy key={enemy.id} x={enemy.x} y={enemy.y} />
        ))}
        {eggs.map(egg => (
          <Egg key={egg.id} x={egg.x} y={egg.y} collected={egg.collected} />
        ))}
        {gameOver && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-destructive mb-4">Game Over!</h2>
              <Button onClick={() => navigate('/')}>Return to Menu</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

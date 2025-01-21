export interface GameState {
  player: {
    x: number;
    y: number;
    velocityY: number;
    isJumping: boolean;
  };
  enemies: Array<{
    id: string;
    x: number;
    y: number;
    direction: number;
  }>;
  eggs: Array<{
    id: string;
    x: number;
    y: number;
    collected: boolean;
  }>;
  score: number;
  lives: number;
  isPlaying: boolean;
  gameOver: boolean;
}

export type Direction = 'left' | 'right' | 'up' | 'down';

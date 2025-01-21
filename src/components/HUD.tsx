import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useGameStore } from '../stores/gameStore';

export const HUD = () => {
  const { score, lives } = useGameStore();

  return (
    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
      <Badge className="text-lg px-4 py-2">Score: {score}</Badge>
      <div className="flex items-center gap-2">
        <span className="text-sm">Lives:</span>
        <Progress value={(lives / 3) * 100} className="w-24 h-3" />
      </div>
    </div>
  );
};

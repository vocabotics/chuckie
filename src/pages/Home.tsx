import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-8"
      >
        <h1 className="text-6xl font-bold text-primary">Chuckie Egg</h1>
        <Button
          size="lg"
          onClick={() => navigate('/game')}
          className="text-2xl px-8 py-6"
        >
          Start Game
        </Button>
      </motion.div>
    </div>
  );
};

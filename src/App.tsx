import { ThemeProvider } from './components/theme-provider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { Toaster } from '@/components/ui/sonner';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="chuckie-egg-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/:gameId" element={<Game />} />
        </Routes>
      </Router>
      <Toaster position="top-center" />
    </ThemeProvider>
  );
}
import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full bg-gradient-secondary">
      {/* Gradient Glass Header */}
      <header className="glass bg-gradient-to-r from-blue-100/80 via-purple-100/80 to-teal-100/80 border-b border-white/30 p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <button
            onClick={onReset}
            className="glass-interactive text-primary font-semibold px-4 py-2 rounded-lg text-sm hover:bg-white/20"
          >
            ← Back
          </button>
          <h1 className="font-bold text-2xl text-primary">Bingo Mixer</h1>
          <div className="w-20"></div>
        </div>
      </header>

      {/* Instructions with gradient text */}
      <p className="text-center text-secondary text-sm py-3 px-4 font-medium">
        Tap a square when you find someone who matches it.
      </p>

      {/* Animated BINGO Indicator */}
      {hasBingo && (
        <div className="bg-gradient-winning glass animate-pulse py-3 px-4 text-center font-bold text-lg shadow-lg">
          <span className="animate-bounce inline-block">🎉</span>
          <span className="ml-2 bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent">
            BINGO! You got a line!
          </span>
          <span className="animate-bounce inline-block ml-2">🎉</span>
        </div>
      )}

      {/* Board Container */}
      <div className="flex-1 flex items-center justify-center p-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>

      {/* Footer spacing */}
      <div className="h-4"></div>
    </div>
  );
}

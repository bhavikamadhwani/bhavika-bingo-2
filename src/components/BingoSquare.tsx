import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center rounded-lg transition-all duration-200 select-none min-h-16 text-xs leading-tight font-medium';

  let stateClasses = '';
  
  if (square.isFreeSpace) {
    stateClasses = 'bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200 text-amber-900 font-bold cursor-default';
  } else if (isWinning) {
    stateClasses = 'square-winning text-yellow-900 shadow-xl animate-[winning-flash_0.5s_ease-in-out]';
  } else if (square.isMarked) {
    stateClasses = 'square-marked text-rose-900 shadow-md';
  } else {
    stateClasses = 'square-unmarked text-purple-900 hover:shadow-lg hover:scale-105';
  }

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="block px-1">{square.text}</span>
      
      {/* Checkmark with animation on marked state */}
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-1 right-1 text-rose-500 text-lg font-bold animate-scale-pop">
          ✓
        </span>
      )}

      {/* Glow effect for winning squares */}
      {isWinning && (
        <div className="absolute inset-0 rounded-lg border-2 border-yellow-400 opacity-50 animate-[pulse_2s_ease-in-out_infinite]"></div>
      )}
    </button>
  );
}

interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="glass-card bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 max-w-xs w-full text-center shadow-2xl animate-bounce-in border-2 border-white/40">
        {/* Emoji with pulse */}
        <div className="text-6xl mb-4 animate-pulse">🎉</div>

        {/* Title */}
        <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-pink-600 bg-clip-text text-transparent mb-2">
          BINGO!
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 mb-6 font-medium">You completed a line!</p>

        {/* Confetti effect with multiple emojis */}
        <div className="flex justify-center gap-2 mb-6 text-2xl animate-bounce">
          <span>✨</span>
          <span>🎊</span>
          <span>✨</span>
        </div>

        {/* Action Button */}
        <button
          onClick={onDismiss}
          className="w-full glass-interactive bg-gradient-to-r from-pink-200 to-purple-200 hover:from-pink-300 hover:to-purple-300 text-primary font-bold py-3 px-6 rounded-xl shadow-md transition-all duration-200 active:scale-95"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}

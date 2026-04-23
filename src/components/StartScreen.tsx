interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gradient-primary">
      <div className="text-center max-w-sm space-y-6">
        {/* Title */}
        <h1 className="text-5xl font-bold text-primary animate-fade-in" style={{ animationDelay: '0ms' }}>
          Bingo Mixer
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-secondary animate-slide-up" style={{ animationDelay: '100ms' }}>
          Find your people!
        </p>

        {/* Rules Card */}
        <div
          className="glass-card bg-white/20 animate-slide-up"
          style={{ animationDelay: '200ms' }}
        >
          <h2 className="font-semibold text-primary mb-3">How to play</h2>
          <ul className="text-left text-secondary space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="w-full glass-interactive bg-gradient-to-r from-pink-200 to-purple-200 hover:from-pink-300 hover:to-purple-300 text-primary font-bold py-4 px-8 rounded-2xl text-lg shadow-lg animate-scale-pop transition-all duration-200 active:scale-95"
          style={{ animationDelay: '300ms' }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

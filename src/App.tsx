import { useState } from "react";
import "./App.css";

const MOODS = [
  {
    value: "tired",
    emoji: "😵"
  },
  {
    value: "unhappy",
    emoji: "😞"
  },
  {
    value: "chill",
    emoji: "😎"
  },
  {
    value: "happy",
    emoji: "😊"
  }
]

function App() {
  const [moodState, setMoodState] = useState<string | null>(null);

  function handleMoodState(e: React.MouseEvent<HTMLButtonElement>) {
    const mood = e.currentTarget.value;
    setMoodState(mood);
  }

  return (
    <div className="container">
      <header>
        <h1>Mood Tracker</h1>
      </header>
      <main>
        <h2>Choose Your Mood Today</h2>
        <div className="moodContainer">
          {
            moodState === null ?
              MOODS.map(mood =>
                <button key={mood.value} value={mood.emoji} onClick={handleMoodState}>{mood.emoji}</button>
              ) :
              <div className="chosenMood">My mood is {moodState}</div>
          }
        </div>
      </main>
      <footer>
        Created by Airida
      </footer>
    </div>
  )
}

export default App;
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
  const [moodState, setMoodState] = useState<string | undefined>(undefined);

  function handleMoodState(e: React.MouseEvent<HTMLButtonElement>) {
    const mood = e.currentTarget.value;
    setMoodState(mood);
  }

  function handleMoodReset() {
    setMoodState(undefined);
  }

  function findMood() {
    return MOODS.find((mood) => mood.value === moodState)?.emoji
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
            moodState === undefined ?
              MOODS.map(mood =>
                <button key={mood.value} value={mood.value} onClick={handleMoodState}>{mood.emoji}</button>
              ) :
              <div className="chosenMoodContainer">
                <div className="chosenMood">My mood is {findMood()}</div>
                <button onClick={handleMoodReset}>Reset</button>
              </div>
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
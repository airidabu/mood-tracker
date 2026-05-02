import { useState } from "react";
import "./App.css";
import MOODS from "./data";


function App() {
  const [moodState, setMoodState] = useState<string | undefined>(() => {
    return localStorage.getItem("chosenMood") ?? undefined;
  });

  function handleMoodState(e: React.MouseEvent<HTMLButtonElement>) {
    const mood = e.currentTarget.value;
    setMoodState(mood);
    localStorage.setItem("chosenMood", mood);
  }

  function handleMoodReset() {
    setMoodState(undefined);
    localStorage.removeItem("chosenMood");
  }

  function findMood() {
    return MOODS.find((mood) => mood.value === moodState)?.emoji
  }

  function renderMoods() {
    return MOODS.map(mood =>
      <button key={mood.value} value={mood.value} onClick={handleMoodState}>{mood.emoji}</button>
    )
  }

  function renderChosenMood() {
    return <div className="chosenMoodContainer">
      <div className="chosenMood">My mood is {findMood()}</div>
      <button onClick={handleMoodReset}>Reset</button>
    </div>
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
            moodState === undefined ? renderMoods() : renderChosenMood()
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
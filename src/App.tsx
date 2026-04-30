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
  return (
    <div className="container">
      <header>
        <h1>Mood Tracker</h1>
      </header>
      <main>
        <h2>Choose Your Mood Today</h2>
        <div>
          <button>{MOODS[0].emoji}</button>
          <button>{MOODS[1].emoji}</button>
          <button>{MOODS[2].emoji}</button>
          <button>{MOODS[3].emoji}</button>
        </div>
      </main>
      <footer>
        Created by Airida
      </footer>
    </div>
  )
}

export default App;
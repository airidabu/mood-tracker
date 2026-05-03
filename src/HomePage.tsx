import { useState } from "react";
import MOODS from "./data";
import Calendar from "./components/Calendar";

function HomePage() {
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
        return (
            <>
                <Calendar />
                <div className="moodButtons">
                    {MOODS.map(mood =>
                        <button aria-label={`Choose ${mood.value} mood`} type="button" key={mood.value} value={mood.value} onClick={handleMoodState}>{mood.emoji}</button>
                    )}
                </div>
            </>

        )
    }

    function renderChosenMood() {
        return <div className="chosenMoodContainer">
            <div className="chosenMood">My mood is {findMood()}</div>
            <button type="button" onClick={handleMoodReset}>Reset</button>
        </div>
    }

    return (
        <main>
            <h2>Choose Your Mood Today</h2>
            <div className="moodContainer">
                {
                    moodState === undefined ? renderMoods() : renderChosenMood()
                }
            </div>
        </main>
    );
}

export default HomePage;
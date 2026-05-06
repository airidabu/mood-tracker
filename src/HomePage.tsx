import { useState } from "react";
import MOODS from "./data";
import Calendar from "./components/Calendar";

type MoodEntry = {
    moodValue: string;
    date: string;
}

function HomePage() {
    const [moodState, setMoodState] = useState<string | undefined>(() => {
        return localStorage.getItem("chosenMood") ?? undefined;
    });

    const today = new Date();
    const date = today.toLocaleDateString("lt-LT");

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const yesterdayDate = yesterday.toLocaleDateString("lt-LT");

    function handleMoodState(e: React.MouseEvent<HTMLButtonElement>) {
        const mood = e.currentTarget.value;
        setMoodState(mood);
        localStorage.setItem("chosenMood", mood);

        const moodObject = {
            moodValue: mood,
            date: date
        };

        const savedMoods = localStorage.getItem("moods");
        let moodArray: MoodEntry[] = savedMoods ? JSON.parse(savedMoods) : [];

        moodArray = moodArray.filter((arr) => arr.date !== date);
        moodArray.push(moodObject);

        localStorage.setItem("moods", JSON.stringify(moodArray));
    }

    function handleMoodReset() {
        setMoodState(undefined);
        localStorage.removeItem("chosenMood");
    }

    function findMood() {
        return MOODS.find((mood) => mood.value === moodState)?.emoji
    }

    function findYesterdaysMood() {
        const savedMoods = localStorage.getItem("moods");
        const moodArray: MoodEntry[] = savedMoods ? JSON.parse(savedMoods) : [];

        const yesterdaysMood = moodArray.find((arr) => arr.date === yesterdayDate);

        return MOODS.find((mood) => mood.value === yesterdaysMood?.moodValue)?.emoji;
    }

    function renderMoods() {
        return (
            <>
                <Calendar date={date} />
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
            <div>Today is {date}</div>
            <div>Yesterday {yesterdayDate} mood was {findYesterdaysMood()}</div>
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
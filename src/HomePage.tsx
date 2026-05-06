import { useState } from "react";
import MOODS from "./data";
import MoodPicker from "./components/MoodPicker";
import ChosenMood from "./components/ChosenMood";

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

    return (
        <main>
            <h2>Choose Your Mood</h2>
            <div className="moodContainer">
                {
                    moodState === undefined
                        ? <MoodPicker date={date} handleMoodState={handleMoodState} moods={MOODS} />
                        : <ChosenMood date={date} yesterdayDate={yesterdayDate} findMood={findMood} findYesterdaysMood={findYesterdaysMood} handleMoodReset={handleMoodReset} />
                }
            </div>
        </main>
    );
}

export default HomePage;
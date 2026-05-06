import Calendar from "./Calendar";
import type { Mood } from "../data";

type MoodPickerProps = {
    date: string;
    handleMoodState: (e: React.MouseEvent<HTMLButtonElement>) => void;
    moods: Mood[];
}

function MoodPicker({ date, handleMoodState, moods }: MoodPickerProps) {
    return (
        <>
            <Calendar date={date} />
            <div className="moodButtons">
                {moods.map(mood =>
                    <button aria-label={`Choose ${mood.value} mood`} type="button" key={mood.value} value={mood.value} onClick={handleMoodState}>{mood.emoji}</button>
                )}
            </div>
        </>

    )
};

export default MoodPicker;
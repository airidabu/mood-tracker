type ChosenMoodProps = {
    date: string;
    yesterdayDate: string;
    findYesterdaysMood: () => string | undefined;
    findMood: () => string | undefined;
    handleMoodReset: () => void;
}

function ChosenMood({ date, yesterdayDate, findYesterdaysMood, findMood, handleMoodReset }: ChosenMoodProps) {
    return (
        < div className="chosenMoodContainer" >
            <div>Today is {date}</div>
            <div>Yesterday {yesterdayDate} mood was {findYesterdaysMood()}</div>
            <div className="chosenMood">My mood is {findMood()}</div>
            <button type="button" onClick={handleMoodReset}>Reset</button>
        </div >
    )
}

export default ChosenMood;
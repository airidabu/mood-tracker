import styles from "./ChosenMood.module.css";

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
            <div className={styles.todaysDate}>Today is {date}</div>
            <div className={styles.todaysMood}>Today my mood is {findMood()}</div>
            <div>Yesterday {yesterdayDate} mood was {findYesterdaysMood()}</div>
            <button type="button" onClick={handleMoodReset}>Reset</button>
        </div >
    )
}

export default ChosenMood;
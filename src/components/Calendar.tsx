type CalendarProps = {
    date: string;
}

function Calendar({ date }: CalendarProps) {
    return (
        <div className="calendarContainer">
            {date}
        </div>
    )
}

export default Calendar;
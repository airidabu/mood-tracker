function Calendar() {
    const date = new Date().toLocaleDateString("lt-LT");


    return (
        <div className="calendarContainer">
            {date}
        </div>
    )
}

export default Calendar;
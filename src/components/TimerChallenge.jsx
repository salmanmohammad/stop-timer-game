import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime})
{
    const timer = useRef();
    const dialog = useRef();
    const [timeRemaining, setTimeRemaning] = useState(targetTime*1000);

    const isTimerActive = (timeRemaining > 0 && timeRemaining < targetTime * 1000);

    if(timeRemaining <= 0)
    {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function startTimer()
    {
        timer.current = setInterval(() =>{
            setTimeRemaning(prevRemaningTime => prevRemaningTime - 10);
        }, 10);

    }

    function stopTimer()
    {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function resetTimer()
    {
        setTimeRemaning(targetTime*1000);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            <ResultModal targetTime={targetTime} ref={dialog} remainingTime={timeRemaining} onReset={resetTimer}/>
            <p>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={ isTimerActive ? stopTimer : startTimer}>{isTimerActive ? "Stop" : "Start"} Challenge</button>
            </p>
            <p>{isTimerActive ? "Time is running...." : "Timer is inactive" }</p>
        </section>
    )
}
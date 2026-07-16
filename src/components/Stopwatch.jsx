import { useRef, useState } from "react";
import "./Stopwatch.css";

function Stopwatch() {

    const [time, setTime] = useState(0);
    const timerRef = useRef(null);
    const [laps, setlaps] = useState([]);

    function startTimer() {
        if (timerRef.current !== null) return;

        timerRef.current = setInterval(() => {
            setTime((prev) => prev + 10);
        }, 10);
    }

    function stopTimer() {
        clearInterval(timerRef.current);
        timerRef.current = null;
    }

    function resetTimer() {
        stopTimer();
        setTime(0);
        setlaps([]);
    }

    function lapTimer() {
        if (time === 0) return;

        const lap = `${minutes}:${seconds}:${milliseconds}`
        setlaps((prev) => [...prev, lap]);
    }

    const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, "0");

    return (
        <div className="container">

            <div className="card">

                <h1>Stopwatch</h1>

                <div className="display">

                    {minutes}:{seconds}:{milliseconds}

                </div>

                <div className="buttons">

                    <button className="start" onClick={startTimer}>
                        Start
                    </button>

                    <button className="pause" onClick={stopTimer}>
                        Pause
                    </button>

                    <button className="reset" onClick={resetTimer}>
                        Reset
                    </button>

                    <button className="lap" onClick={lapTimer}>
                        Lap
                    </button>

                </div>


                <div className="lap-list">

                {laps.length > 0 && (
                    <h2 className="lap-heading">Lap History</h2>
                )}
                    {laps.map((lap, index) => (

                        <div className="lap-item" key={index}>

                            <span>Lap {index + 1}</span>

                            <span>{lap}</span>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default Stopwatch;
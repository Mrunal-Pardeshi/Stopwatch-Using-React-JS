import { useRef, useState } from "react";
import "./Stopwatch.css";

function Stopwatch() {

    const [time, setTime] = useState(0);
    const timerRef = useRef(null);

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

                </div>

            </div>

        </div>
    );
}

export default Stopwatch;
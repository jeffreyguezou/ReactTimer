import { useState } from "react";
import "./App.css";
import TimeBox from "./components/timeBox";
import ControlBtn from "./components/controlBtn";

let interval: number | undefined;

function App() {
  const [hourValue, setHourValue] = useState("00");
  const [minValue, setMinValue] = useState("01");
  const [secValue, setSecValue] = useState("00");
  const [btnStart, setBtnStart] = useState(true);

  const btnToggler = () => {
    setBtnStart(() => {
      return !btnStart;
    });
  };

  const onHourChange = (value: string) => {
    setHourValue(value);
  };
  const onMinuteChange = (value: string) => {
    setMinValue(value);
  };
  const onSecondsChange = (value: string) => {
    setSecValue(value);
  };
  let hour = parseInt(hourValue);
  let min = parseInt(minValue);
  let sec = parseInt(secValue);
  let time = hour * 60 * 60 * 1000 + min * 60 * 1000 + sec * 1000;
  let doTimer = () => {
    time = time - 1000;

    if (time >= 0) {
      let hours = Math.floor(time / 3600000);
      let minutes = Math.floor((time - hours * 3600000) / 60000);
      let seconds = Math.floor(
        (time - hours * 3600000 - minutes * 60000) / 1000
      );
      setHourValue(hours.toString().padStart(2, "0"));
      setMinValue(minutes.toString().padStart(2, "0"));
      setSecValue(seconds.toString().padStart(2, "0"));
    }
  };

  const startHandler = () => {
    if (btnStart) {
      interval = setInterval(doTimer, 1000);
      console.log({ interval });
      if (time <= 0) {
        clearInterval(interval);
      }
    }
  };

  const resetHandler = () => {
    setHourValue("00");
    setMinValue("01");
    setSecValue("00");
  };

  const btnClickHandler = () => {
    btnToggler();
    console.log({ interval });
    if (typeof interval === "number") {
      clearInterval(interval);
      interval = undefined;
    } else {
      startHandler();
    }
  };

  return (
    <>
      <div className="box">
        <TimeBox onValueChange={onHourChange} value={hourValue} title="hours" />
        <TimeBox
          onValueChange={onMinuteChange}
          value={minValue}
          title="minutes"
        />
        <TimeBox
          onValueChange={onSecondsChange}
          value={secValue}
          title="seconds"
        />
      </div>
      <div>
        <ControlBtn
          text={btnStart ? "Start" : "Stop"}
          onBtnClick={btnClickHandler}
        />
        <button onClick={resetHandler}>Reset</button>
      </div>
    </>
  );
}

export default App;

import React from "react";

type timeBoxProps = {
  title: string;
  value: string;
  onValueChange: (value: string) => void;
};

const TimeBox = (props: timeBoxProps) => {
  const valueChangeHanlder = (event: React.FormEvent<HTMLInputElement>) => {
    props.onValueChange(event.currentTarget.value);
  };
  return (
    <div className="timeBox">
      {props.title}

      <input
        className="valuetextbox"
        onChange={valueChangeHanlder}
        value={props.value}
        type="text"
      ></input>
    </div>
  );
};
export default TimeBox;

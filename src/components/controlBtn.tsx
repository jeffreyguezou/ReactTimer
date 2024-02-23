type ControlBtnProps = {
  text: string;
  onBtnClick: () => void;
};

const ControlBtn = (props: ControlBtnProps) => {
  return <button onClick={props.onBtnClick}>{props.text}</button>;
};
export default ControlBtn;

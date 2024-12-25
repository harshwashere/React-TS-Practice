import '../../App.css'
type ClockProps = {
  date: Date;
};

export default function Clock({ date }: ClockProps) {
  let hours = date.getHours();
  let className;

  if (hours >= 0 && hours <= 6) {
    className = "night";
  } else {
    className = "day";
  }
  return <h1 className={className}>{date.toLocaleTimeString()}</h1>;
}

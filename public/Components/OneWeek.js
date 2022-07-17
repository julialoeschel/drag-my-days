import styles from "../../styles/OneWeek.module.css";
import OneDay from "./OneDay";

export default function OneWeek({ week, onNext, onPrev }) {
  return (
    <div className={styles.container}>
      <span className={styles.week}>Week: {week.week}</span>
      <button className={styles.button} onClick={onPrev}>
        &#171;
      </button>
      {week.days.map((day) => (
        <OneDay day={day} key={day.date}></OneDay>
      ))}
      <button className={styles.button} onClick={onNext}>
        &#187;
      </button>
    </div>
  );
}

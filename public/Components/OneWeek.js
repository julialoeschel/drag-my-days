import styles from "../../styles/OneWeek.module.css";
import OneDay from "./OneDay";

export default function OneWeek({ data }) {
  return (
    <div className={styles.container}>
      {data.days.map((day) => (
        <OneDay day={day} key={day.date}></OneDay>
      ))}
    </div>
  );
}

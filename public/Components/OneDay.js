import styles from "../../styles/OneDay.module.css";

export default function OneDay({ day }) {
  console.log(day);
  return (
    <div className={styles.container}>
      <h2 className={styles.date}>{day.date}</h2>
      <p className={styles.session}>{day.session1}</p>
      <p className={styles.session}>{day.breather}</p>
      <p className={styles.session}>{day.guestSession}</p>
      <p className={styles.session}>{day.session2}</p>
      <p className={styles.session}>{day.assignment}</p>
    </div>
  );
}

import Link from "next/link";
import styles from "../../styles/SessionOverview.module.css";
import Sessions from "./Sessions";

export default function SessionOverview({ sessions }) {
  return (
    <section className={styles.container}>
      <div className={styles.buttonConainer}>
        <button className={styles.button}>Sessions</button>
      </div>

      <ul className={styles.list}>
        <Sessions sessions={sessions}></Sessions>
      </ul>
    </section>
  );
}

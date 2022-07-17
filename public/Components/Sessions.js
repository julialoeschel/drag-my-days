import styles from "../../styles/Sessions.module.css";

export default function Sessions({ sessions }) {
  return (
    <>
      {sessions.map((session) => (
        <li key={session.session} className={styles.listItems}>
          {session.session}
        </li>
      ))}
    </>
  );
}

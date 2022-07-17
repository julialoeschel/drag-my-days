import styles from "../../styles/GuestSessions.module.css";

export default function GuestSessions({ guestSessions }) {
  return (
    <>
      {guestSessions.map((session) => (
        <li key={session.guestSession} className={styles.listItems}>
          {session.guestSession}
        </li>
      ))}
    </>
  );
}

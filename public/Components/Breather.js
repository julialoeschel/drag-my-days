import styles from "../../styles/Breather.module.css";

export default function Breather({ breather }) {
  return (
    <>
      {breather.map((session) => (
        <li key={session.breather} className={styles.listItems}>
          {session.breather}
        </li>
      ))}
    </>
  );
}

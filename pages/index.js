import OneWeek from "../public/Components/OneWeek";
import styles from "../styles/Home.module.css";
import { weeks, sessions, guestSessions, breather } from "../public/data";
import { useState } from "react";
import SessionOverview from "../public/Components/SessionOverview";

export default function Home() {
  const [week, setWeek] = useState(weeks[0]);
  const [allSessions, setAllSessions] = useState(sessions);

  function handleNextWeek() {
    const indexOfWeek = weeks.findIndex((element) => element === week);
    if (indexOfWeek == weeks.length - 1) return;
    const indexOfNextWeek = indexOfWeek + 1;
    setWeek(weeks[indexOfNextWeek]);
  }

  function handlePreviousWeek() {
    const indexOfWeek = weeks.findIndex((element) => element === week);
    if (indexOfWeek == 0) return;
    const indexOfLastWeek = indexOfWeek - 1;
    setWeek(weeks[indexOfLastWeek]);
  }

  return (
    <section className={styles.container}>
      <OneWeek
        week={week}
        onNext={handleNextWeek}
        onPrev={handlePreviousWeek}
      ></OneWeek>
      <SessionOverview
        sessions={allSessions}
        guestSessions={guestSessions}
        breather={breather}
      ></SessionOverview>
    </section>
  );
}

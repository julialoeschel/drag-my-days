import OneWeek from "../public/Components/OneWeek";
import styles from "../styles/Home.module.css";
import { data } from "../public/data-newsortet";
import { useState } from "react";
import SessionOverview from "../public/Components/SessionOverview";
import { DndContext } from "@dnd-kit/core";

export default function Home() {
  const [week, setWeek] = useState(data.weeks[0]);
  const [allSessions, setAllSessions] = useState(data.sessions);

  function handleNextWeek() {
    const indexOfWeek = data.weeks.findIndex((element) => element === week);
    if (indexOfWeek == data.weeks.length - 1) return;
    const indexOfNextWeek = indexOfWeek + 1;
    setWeek(data.weeks[indexOfNextWeek]);
  }

  function handlePreviousWeek() {
    const indexOfWeek = data.weeks.findIndex((element) => element === week);
    if (indexOfWeek == 0) return;
    const indexOfLastWeek = indexOfWeek - 1;
    setWeek(data.weeks[indexOfLastWeek]);
  }

  return (
    <DndContext>
      <section className={styles.container}>
        <OneWeek
          week={week}
          onNext={handleNextWeek}
          onPrev={handlePreviousWeek}
        ></OneWeek>
        <SessionOverview
          sessions={allSessions}
          guestSessions={data.guestSessions}
          breather={data.breather}
        ></SessionOverview>
      </section>
    </DndContext>
  );
}

import { useState } from "react";
import styles from "../../styles/SessionOverview.module.css";
import Sessions from "./Sessions";
import GuestSessions from "./GuestSessions";
import Breather from "./Breather";

export default function SessionOverview({ sessions, guestSessions, breather }) {
  const [view, setView] = useState("sessions");

  return (
    <section className={styles.container}>
      <div className={styles.buttonConainer}>
        <button
          className={view === "sessions" ? styles.buttonActive : styles.button}
          onClick={() => setView("sessions")}
        >
          Sessions
        </button>
        <button
          className={view === "guest" ? styles.buttonActive : styles.button}
          onClick={() => setView("guest")}
        >
          Guest Session
        </button>
        <button
          className={view === "breather" ? styles.buttonActive : styles.button}
          onClick={() => setView("breather")}
        >
          Breather
        </button>
      </div>
      <ul className={styles.list}>
        {view === "sessions" ? (
          <Sessions sessions={sessions}></Sessions>
        ) : view === "guest" ? (
          <GuestSessions guestSessions={guestSessions}></GuestSessions>
        ) : (
          <Breather breather={breather}></Breather>
        )}
      </ul>
    </section>
  );
}

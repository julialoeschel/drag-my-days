import OneWeek from "../public/Components/OneWeek";
import styles from "../styles/Home.module.css";
import { data } from "../public/data";
import { useState } from "react";

export default function Home() {
  const [week, setWeek] = useState(data[0]);

  function handleNextWeek() {
    const indexOfWeek = data.findIndex((element) => element === week);
    if (indexOfWeek == data.length - 1) return;
    const indexOfNextWeek = indexOfWeek + 1;
    setWeek(data[indexOfNextWeek]);
  }

  function handlePreviousWeek() {
    const indexOfWeek = data.findIndex((element) => element === week);
    if (indexOfWeek == 0) return;
    const indexOfLastWeek = indexOfWeek - 1;
    setWeek(data[indexOfLastWeek]);
  }

  return (
    <>
      <OneWeek
        week={week}
        onNext={handleNextWeek}
        onPrev={handlePreviousWeek}
      ></OneWeek>
    </>
  );
}

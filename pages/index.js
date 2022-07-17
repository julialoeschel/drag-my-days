import OneWeek from "../public/Components/OneWeek";
import styles from "../styles/Home.module.css";
import { data } from "../public/data";

export default function Home() {
  return (
    <>
      <OneWeek data={data[0]}></OneWeek>
    </>
  );
}

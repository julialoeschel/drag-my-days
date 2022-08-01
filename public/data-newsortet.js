import { v4 as uuidv4 } from "uuid";

export const data = () => {
  const items = {
    sessions: [
      { name: "welcome", coach: "Julia", id: uuidv4() },
      { name: "Github and Markdown", coach: "Julia", id: uuidv4() },
      { name: "Shell Basics & Setup", coach: "Gregor", id: uuidv4() },
      {
        name: "Git CLI & remote & ssh Setup",
        coach: "Gregor",
        id: uuidv4(),
      },
      {
        name: "Git branches & pull requests",
        coach: "Gregor",
        id: uuidv4(),
      },
      { name: "HTML Basics and the Web", coach: "Julia", id: uuidv4() },
      { name: "CSS Basics", coach: "Dominik", id: uuidv4() },
      { name: "CSS Selektors", coach: "Gregor", id: uuidv4() },
      { name: "CSS Flexbox", coach: "Mareike", id: uuidv4() },
      { name: "CSS Positioning", coach: "Julia", id: uuidv4() },
      { name: "Repetition Project", coach: "Gregor", id: uuidv4() },
      { name: "A11y", coach: "Gregor", id: uuidv4() },
      { name: "JS Basics", coach: "Gregor", id: uuidv4() },
      { name: "CSS Structure", coach: "Gregor", id: uuidv4() },
      { name: "JS Variables and Numbers", coach: "Julia", id: uuidv4() },
      { name: "CSS Grid", coach: "Mareike", id: uuidv4() },
      { name: "JS Conditions Booleans", coach: "", id: uuidv4() },
      { name: "CSS Responsive", coach: "", id: uuidv4() },
      { name: "JS Functions 1", coach: "Julia", id: uuidv4() },
      { name: "JS Functions 2", coach: "Julia", id: uuidv4() },
    ],
    guestSessions: [
      {
        name: "Kommunikation",
        coach: "Nele",
        id: uuidv4(),
      },
      {
        name: "Get to knwo each other",
        coach: "Julia",
        id: uuidv4(),
      },
      {
        name: "How to ...",
        coach: "jemand",
        id: uuidv4(),
      },
      {
        name: "How to ...",
        coach: "jemand",
        id: uuidv4(),
      },
      {
        name: "How to ...",
        coach: "jemand",
        id: uuidv4(),
      },
      {
        name: "How to ...",
        coach: "jemand",
        id: uuidv4(),
      },
      {
        name: "How to ...",
        coach: "jemand",
        id: uuidv4(),
      },
      {
        name: "How to ...",
        coach: "jemand",
        id: uuidv4(),
      },
      {
        name: "How to ...",
        coach: "jemand",
        id: uuidv4(),
      },
      {
        name: "How to ...",
        coach: "jemand",
        id: uuidv4(),
      },
      {
        name: "How to ...",
        coach: "jemand",
        id: uuidv4(),
      },
      {
        name: "How to ...",
        coach: "jemand",
        id: uuidv4(),
      },
      {
        name: "How to ...",
        coach: "jemand",
        id: uuidv4(),
      },
    ],
    breather: [
      {
        name: "Irgendwas",
        coach: "Ayla",
        id: uuidv4(),
      },
      {
        name: "Irgendwas in Praxis",
        coach: "Ayla",
        id: uuidv4(),
      },
      {
        name: "Sport",
        coach: "Sportwissenschaftler",
        id: uuidv4(),
      },
    ],
    "day 25/07/2022": [
      { name: "welcome", id: uuidv4(), coach: "" },
      { name: "breather with a", id: uuidv4(), coach: "" },
      { name: "kennenlernen", id: uuidv4(), coach: "" },
      { name: "Markdown", id: uuidv4(), coach: "" },
    ],
    "day 26/07/2022": [
      { name: "welcome", id: uuidv4(), coach: "" },
      { name: "breather with a", id: uuidv4(), coach: "" },
      { name: "kennenlernen", id: uuidv4(), coach: "" },
      { name: "Markdown", id: uuidv4(), coach: "" },
    ],
    "day 27/07/2022": [
      { name: "welcome", id: uuidv4(), coach: "" },
      { name: "breather with a", id: uuidv4(), coach: "" },
      { name: "kennenlernen", id: uuidv4(), coach: "" },
      { name: "Markdown", id: uuidv4(), coach: "" },
    ],
    "day 28/07/2022": [
      { name: "welcome", id: uuidv4(), coach: "" },
      { name: "breather with a", id: uuidv4(), coach: "" },
      { name: "kennenlernen", id: uuidv4(), coach: "" },
      { name: "Markdown", id: uuidv4(), coach: "" },
    ],
    "day 29/07/2022": [
      { name: "welcome", id: uuidv4(), coach: "" },
      { name: "breather with a", id: uuidv4(), coach: "" },
      { name: "kennenlernen", id: uuidv4(), coach: "" },
      { name: "Markdown", id: uuidv4(), coach: "" },
    ],
    "day 01/08/2022": [
      { name: "welcome", id: uuidv4(), coach: "" },
      { name: "breather with a", id: uuidv4(), coach: "" },
      { name: "kennenlernen", id: uuidv4(), coach: "" },
      { name: "Markdown", id: uuidv4(), coach: "" },
    ],
    "day 02/08/2022": [
      { name: "welcome", id: uuidv4(), coach: "" },
      { name: "breather with a", id: uuidv4(), coach: "" },
      { name: "kennenlernen", id: uuidv4(), coach: "" },
      { name: "Markdown", id: uuidv4(), coach: "" },
    ],
    "day 03/08/2022": [
      { name: "welcome", id: uuidv4(), coach: "" },
      { name: "breather with a", id: uuidv4(), coach: "" },
      { name: "kennenlernen", id: uuidv4(), coach: "" },
      { name: "Markdown", id: uuidv4(), coach: "" },
    ],
    "day 04/08/2022": [
      { name: "welcome", id: uuidv4(), coach: "" },
      { name: "breather with a", id: uuidv4(), coach: "" },
      { name: "kennenlernen", id: uuidv4(), coach: "" },
      { name: "Markdown", id: uuidv4(), coach: "" },
    ],
    "day 05/08/2022": [
      { name: "welcome", id: uuidv4(), coach: "" },
      { name: "breather with a", id: uuidv4(), coach: "" },
      { name: "kennenlernen", id: uuidv4(), coach: "" },
      { name: "Markdown", id: uuidv4(), coach: "" },
    ],
    "day 08/08/2022": [
      { name: "welcome", id: uuidv4(), coach: "" },
      { name: "breather with a", id: uuidv4(), coach: "" },
      { name: "kennenlernen", id: uuidv4(), coach: "" },
      { name: "Markdown", id: uuidv4(), coach: "" },
    ],
  };

  return items;
};

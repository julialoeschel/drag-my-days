import styles from "../styles/Home.module.css";
import { data } from "../public/data-newsortet";
import { useEffect, useState } from "react";
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import ContainerWeek from "../public/Components/ContainerWeek";
import Container from "../public/Components/Container";
import { Item } from "../public/Components/SortableItem";

export default function Home() {
  const [items, setItems] = useState(data());
  const [activeId, setActiveId] = useState();
  const [showLecture, setShowLecture] = useState("session");
  const days = Object.keys(items).filter((key) => key.includes("day"));

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(
    () => setItems(JSON.parse(window.localStorage.getItem("items"))),
    []
  );

  return (
    <section className={styles.container}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className={styles.upperContainer}>
          {days.map((day) => (
            <ContainerWeek id={day} key={day} items={items[day]} date={day} />
          ))}
        </div>

        <div className={styles.lowerContainer}>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => setShowLecture("session")}
              className={showLecture === "session" ? styles.activeButton : null}
            >
              Sessions
            </button>
            <button
              onClick={() => setShowLecture("guestSession")}
              className={
                showLecture === "guestSession" ? styles.activeButton : null
              }
            >
              GuestSession
            </button>
            <button
              onClick={() => setShowLecture("breather")}
              className={
                showLecture === "breather" ? styles.activeButton : null
              }
            >
              Breather
            </button>
          </div>
          {showLecture === "session" ? (
            <Container id="sessions" items={items.sessions} />
          ) : showLecture === "guestSession" ? (
            <Container id="guestSessions" items={items.guestSessions} />
          ) : (
            <Container id="breather" items={items.breather} />
          )}
        </div>
        <DragOverlay>{activeId ? <Item id={activeId} /> : null}</DragOverlay>
      </DndContext>
    </section>
  );

  function findContainer(id) {
    if (id in items) {
      return id;
    }
    const foundContainer = Object.keys(items).find((key) =>
      items[key].map((x) => x.id).includes(id)
    );

    return foundContainer;
  }

  function handleDragStart(event) {
    const { active } = event;
    const { id } = active;

    setActiveId(id);
  }

  function handleDragOver(event) {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over;

    // Find the containers
    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);
    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setItems((prev) => {
      //container mit Inhalt [{},{}...]
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];
      // Find the indexes for the items
      const activeIndex = activeItems.map((x) => x.id).indexOf(id);
      const overIndex = overItems.map((x) => x.id).indexOf(overId);

      let newIndex;
      if (overId in prev) {
        // We're at the root droppable of a container
        newIndex = overItems.length + 1;
      } else {
        const isBelowLastItem = over && overIndex === overItems.length - 1;
        const modifier = isBelowLastItem ? 1 : 0;

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
      }
      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item.id !== active.id),
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length),
        ],
      };
    });
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    const { id } = active;
    const { id: overId } = over;

    const activeContainer = findContainer(id);
    const overContainer = findContainer(overId);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = items[activeContainer]
      .map((x) => x.id)
      .indexOf(active.id);
    const overIndex = items[overContainer].map((x) => x.id).indexOf(overId);

    if (activeIndex !== overIndex) {
      setItems((prev) => ({
        ...prev,
        [overContainer]: arrayMove(prev[overContainer], activeIndex, overIndex),
      }));
    }

    setActiveId(null);
    localStorage.setItem("items", JSON.stringify(items));
  }
}

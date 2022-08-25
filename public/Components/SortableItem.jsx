import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styles from "../../styles/Container.module.css";
import { useState } from "react";

export function Item(props) {
  const [isEditing, setIsEditing] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const { session, coach } = event.target.elements;
    props.onEdit({ name: session.value, id: props.id, coach: coach.value });
    setIsEditing(false);
  }

  return isEditing ? (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="session">Session: </label>
      <input
        type="text"
        name="session"
        id="session"
        defaultValue={props.name}
      />

      <label htmlFor="coach">Coach: </label>
      <input type="text" name="coach" id="coach" defaultValue={props.coach} />
      <button type="submit">save</button>
    </form>
  ) : (
    <div className={styles.item} onClick={() => setIsEditing(!isEditing)}>
      {props.name}
      {props.coach ? <span className={styles.name}>{props.coach}</span> : null}
    </div>
  );
}

export default function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Item
        id={props.id}
        name={props.item.name}
        coach={props.item.coach}
        onEdit={props.onEdit}
      />
    </div>
  );
}

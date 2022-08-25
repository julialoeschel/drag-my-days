import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import styles from "../../styles/Container.module.css";
import { useState } from "react";

export function Item(props) {
  const [isEditing, setIsEditing] = useState(false);
  isEditing === true ? console.log(props) : "";

  return (
    <div className={styles.item} onClick={() => setIsEditing(!isEditing)}>
      {props.name}
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
      <Item id={props.id} name={props.item.name} item={props.item} />
    </div>
  );
}

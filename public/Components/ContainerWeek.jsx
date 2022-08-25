import React from "react";
import styles from "../../styles/Container.module.css";

import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";

export default function ContainerWeek(props) {
  const { id, items } = props;

  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef} className={styles.containerweek}>
        <span>{props.date}</span>
        {items.map((item) => (
          <SortableItem key={item.id} id={item.id} item={item} />
        ))}
      </div>
    </SortableContext>
  );
}

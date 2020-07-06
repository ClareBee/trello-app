// same for TS as import * as React from 'react'
import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import { useAppState } from "../AppStateContext";
import { AddNewItem } from "./AddNewItem";
import { useItemDrag } from "../useDragItem";
import { DragItem } from "../dragItem";
import { isHidden } from "../utils/isHidden";
import { Card } from "./Card";
import { ColumnContainer, ColumnTitle } from "../styles";

interface ColumnProps {
  text: string;
  index: number;
  id: string;
}

/* type React.PropsWithChildren<P> = P & { 
    children?: React.ReactNode;
} // type intersection w P as generic type
*/
export const Column = ({ text, index, id }: ColumnProps) => {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({ type: "COLUMN", id, index, text });

  // hover callback triggered when over drop target
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover(item: DragItem) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      dispatch({ type: "MOVE_LIST", payload: { dragIndex, hoverIndex } });
      item.index = hoverIndex;
    },
  });
  drag(drop(ref));
  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(state.draggedItem, "COLUMN", id)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((task, i) => (
        <Card text={task.text} key={task.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) =>
          dispatch({ type: "ADD_TASK", payload: { text, listId: id } })
        }
        dark
      />
    </ColumnContainer>
  );
};

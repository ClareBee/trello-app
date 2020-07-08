import React, { useRef } from "react";
import { useDrop } from "react-dnd";
import { CardDragItem } from "./DragItem";
import { useAppState } from "../state/AppStateContext";
import { useItemDrag } from "../utils/useItemDrag";
import { isHidden } from "../utils/isHidden";

import { CardContainer } from "../styles";

interface CardProps {
  id: string;
  text: string;
  index: number;
  isPreview?: boolean;
  columnId: string;
}

export const Card = ({ text, id, index, columnId, isPreview }: CardProps) => {
  const { state, dispatch } = useAppState();
  console.log("state", state);
  const ref = useRef<HTMLDivElement>(null);

  const { drag } = useItemDrag({ type: "CARD", id, index, text, columnId });

  const [, drop] = useDrop({
    accept: "CARD",
    hover(item: CardDragItem) {
      if (item.id === id) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumn = item.columnId;
      const targetColumn = columnId;

      dispatch({
        type: "MOVE_TASK",
        payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
      });
      item.index = hoverIndex;
      item.columnId = targetColumn;
    },
  });
  drag(drop(ref));
  return (
    <CardContainer
      isHidden={isHidden(isPreview, state.draggedItem, "CARD", id)}
      isPreview={isPreview}
      ref={ref}
    >
      {text}
    </CardContainer>
  );
};

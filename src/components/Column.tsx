// same for TS as import * as React from 'react'
import React from "react";
import { useAppState } from "../AppStateContext";
import { AddNewItem } from "./AddNewItem";
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

  return (
    <ColumnContainer>
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

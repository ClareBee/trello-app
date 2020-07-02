// same for TS as import * as React from 'react'
import React from "react";
import { AddNewItem } from "./AddNewItem";
import { ColumnContainer, ColumnTitle } from "../styles";

interface ColumnProps {
  text: string;
}

/* type React.PropsWithChildren<P> = P & { 
    children?: React.ReactNode;
} // type intersection w P as generic type
*/
export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};

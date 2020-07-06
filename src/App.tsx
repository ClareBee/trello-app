import React from "react";
import { useAppState } from "./AppStateContext";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { CustomDragLayer } from "./components/CustomDragLayer";
import { AppContainer } from "./styles";

const App = () => {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => (
        <Column id={list.id} text={list.text} key={list.id} index={i} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
};

export default App;

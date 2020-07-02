import React from "react";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { Card } from "./components/Card";
import { AppContainer } from "./styles";

interface State {
  count: number;
}

type Action =
  | {
      type: "increment";
    }
  | {
      type: "decrement";
    };

const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Learn TypeScript" />
      </Column>
      <Column text="In Progress">
        <Card text="Read Sapiens" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
}

export default App;

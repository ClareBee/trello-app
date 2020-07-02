import React from "react";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { AppContainer } from "./styles";

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Learn TypeScript" />
      </Column>
      <Column text="In Progress">
        <Card text="Read Sapiens" />
      </Column>
    </AppContainer>
  );
}

export default App;

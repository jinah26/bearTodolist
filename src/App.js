import React from 'react';
import styled from 'styled-components';
import TodoList from "./component/TodoList";

function App() {
  return (
    <AppWrapper>
        <TodoList />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  min-width: 600px;
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border: 1px solid #ddd;
  padding: 10px;
`;

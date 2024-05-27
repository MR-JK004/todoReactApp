import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [list, setList] = useState([
    {
      id: 1,
      name: 'Zen Class',
      description: 'To Watch the Day 5 React Class',
      isStatus: 'Completed',
    },
    {
      id: 2,
      name: 'Day 5 Task',
      description: 'To do my react day 5 task of creating todo react app',
      isStatus: 'Completed',
    },
    {
      id: 3,
      name: 'Watch Anime',
      description: 'To Watch Anime for relaxation',
      isStatus: 'Not Completed',
    },
  ]);

  const [selectedTodo, setSelectedTodo] = useState(null);
  const [filterList,setFilteredList] = useState(list);

  return (
    <Container className="mt-5">
      <TodoForm
        list={list}
        setList={setList}
        setFilteredList={setFilteredList}
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
      />
      <TodoList
        originalList={list}
        filteredList={filterList}
        setList={setList}
        setFilteredList={setFilteredList}
        setEditTodo={setSelectedTodo}
      />
    </Container>
  );
};

export default App;

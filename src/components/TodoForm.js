import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function TodoForm({ list, setList, setFilteredList, selectedTodo, setSelectedTodo }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  

  useEffect(() => {
    if (selectedTodo) {
      setName(selectedTodo.name);
      setDescription(selectedTodo.description);
    }
  }, [selectedTodo]);

  const handleSubmit = () => {
    if (selectedTodo) {
      const updatedList = list.map(item => 
        item.id === selectedTodo.id ? { ...item, name, description } : item
      );
      setList(updatedList);
      setFilteredList(updatedList);
      setSelectedTodo(null);
    } else {
      
      const id = list.length ? list[list.length - 1].id + 1 : 1;
      const newTodo = { id, name, description, isStatus: 'Not Completed' };
      const newList = [...list, newTodo];
      setList(newList);
      setFilteredList(newList);
    }
    setName("");
    setDescription("");
  };

  return (
    <>
      <h1 className="h2 text-center mb-4">My todo</h1>
      
      <Row className="justify-content-center mb-5 form">
        <Col md={3}>
          <Form.Control type="text" placeholder="Todo Name" value={name} onChange={(e) => setName(e.target.value)} />
        </Col>
        <Col md={3}>
          <Form.Control type="text" placeholder="Todo Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </Col>
        <Col md={2}>
          <Button variant="success" onClick={handleSubmit}>{selectedTodo ? 'Update Todo' : 'Add Todo'}</Button>
        </Col>
      </Row>
    </>
  );
}

export default TodoForm;

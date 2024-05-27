import React, { useState } from 'react';
import { Row, Col, Dropdown, Button } from 'react-bootstrap';
import { findIndex } from './Function';

function TodoList({ originalList, filteredList, setList, setFilteredList, setEditTodo }) {

  let [statusFilter,setStatusFilter] = useState("All");

  const handleEdit = (id) => {
    let index = findIndex(originalList, id);
    if (index !== -1) {
      setEditTodo(originalList[index]);
    }
  };

  const handleDelete = (id) => {
    let index = findIndex(originalList, id);
    if (index !== -1) {
      let newList = [...originalList];
      newList.splice(index, 1);
      setList(newList);
      setFilteredList(newList);
    }
  };

  const handleStatus = (id, newStatus) => {
    let index = findIndex(originalList, id);
    if (index !== -1) {
      const newList = [...originalList];
      newList[index].isStatus = newStatus;
      setList(newList);
      setFilteredList(newList);
    }
  };

  const handleStatusFilter = (filterStatus) => {
    setStatusFilter(filterStatus);
    if (filterStatus === 'All') {
      setFilteredList(originalList);
    } else {
      let newList = originalList.filter((item) => item.isStatus === filterStatus);
      setFilteredList(newList);
    }
  };

  return (
    <>
      <Row className="mb-4">
        <Col>
          <h2>My Todos</h2>
        </Col>
        <Col className="text-end">
          <h2>Status Filter:
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                {statusFilter}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleStatusFilter('All')}>All</Dropdown.Item>
                <Dropdown.Item onClick={() => handleStatusFilter('Completed')}>Completed</Dropdown.Item>
                <Dropdown.Item onClick={() => handleStatusFilter('Not Completed')}>Not Completed</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </h2>
        </Col>
      </Row>

      <Row>
        {filteredList.length ? filteredList.map((e) => (
          <Col key={e.id} md={4} className="mb-4 custom-card">
            <div className='card-container'>
              <div>
                <div>Name: {e.name}</div><br />
                <div>Description: {e.description}</div><br />
                <h4>Status:
                  <Dropdown className="d-inline mx-2">
                    <Dropdown.Toggle style={{ width: '40%', borderRadius: 0, backgroundColor: 'rgb(251,130,129)' }} variant="secondary" id="dropdown-basic">
                      {e.isStatus}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleStatus(e.id, 'Completed')}>Completed</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleStatus(e.id, 'Not Completed')}>Not Completed</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </h4>
                <br /><br />
                <div className='d-flex mt-3 justify-content-end'>
                  <Button style={{ backgroundColor: 'rgb(251,130,129)' }} onClick={() => handleEdit(e.id)}>Edit</Button>&nbsp;
                  <Button onClick={() => handleDelete(e.id)} variant="danger">Delete</Button>
                </div>
              </div>
            </div>
          </Col>
        )) : <h2 className='d-flex justify-content-center' style={{ marginTop: '10%' }}>List is Empty</h2>}
      </Row>
    </>
  );
}

export default TodoList;

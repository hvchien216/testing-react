import React from 'react';
import { Col, Form } from 'react-bootstrap';

function ScoopOption({ name, imagePath, updateItemCount }) {
  const handleChange = (e) => {
    updateItemCount(name, e.target.value); 
  };
  return (
    <Col xs={12} sm={6} md={4} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} scoop`}
      />
      <Form.Group controlId={`${name}-count`}>
        <Form.Label column xs='6' style={{ textAlign: 'right' }}>
          {name}
        </Form.Label>
        <Col xs='5' style={{ textAlgin: 'left' }}>
          <Form.Control
            type='number'
            onChange={handleChange}
            defaultValue={0}
          />
        </Col>
      </Form.Group>
    </Col>
  );
}

export default ScoopOption;

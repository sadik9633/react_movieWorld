import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Footer() {
  return (
    <div id='footer'>
      <Row>
        <Col className='text-center bg-dark'>
          <h6 className='mt-3 p-3'>All rights are reserved to Movie World & reg:2023</h6>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
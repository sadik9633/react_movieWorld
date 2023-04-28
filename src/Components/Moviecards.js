import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function Moviecards({moviedata}) {
  return (
    <>
    <Link to={`/view-movie/${moviedata.id}`} style={{textDecoration:'none',color:'white'}}>
       <Card id='ca'  bg='dark'  style={{ width: '18rem',}}>
        <Card.Img id='im' variant="top" style={{ width: '18rem', height:'330px'}} src={moviedata.photograph}/>
        <Card.Body>
          <Card.Title className='text-center text-warning'><strong>{moviedata.name}</strong></Card.Title>
          <Card.Text style={{fontFamily:'-moz-initial'}}>
          {moviedata.Synopsis}
          </Card.Text>
          <ListGroup style={{fontFamily:'-moz-initial'}} className="list-group-flush">
          <ListGroup.Item>Director : <strong>{moviedata.Director}</strong></ListGroup.Item>
          <ListGroup.Item>Stars : <strong>{moviedata.actor}</strong>
          </ListGroup.Item>
        </ListGroup>
        </Card.Body>
      </Card>
    </Link>
    </>
  )
}

export default Moviecards
import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';


function Movieview() {
  var [movieList, setMovie] = useState([])

  const fetchData = async () => {
    const result = await fetch('/movie.json')
    result.json().then(data => {
      setMovie(data.movies)
    })
  }
  const params = useParams()
  const movie = movieList.find(item => item.id == params.id)


  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      {movie ? (
         <Row>
           <Col lg={6} md={6} className='p-5 text-center'>
            <img alt='' className='rounded border border-info' style={{ height: '400px', width:'75%',}} src={movie.photograph}></img>
          </Col>

           <Col lg={6} md={6} className='p-5'>
           <Card bg='dark'>
             <Card.Body >
               <Card.Title><h3 className='text-warning'><strong>{movie.name}</strong></h3></Card.Title>
               <p className='fs-8'>{movie.date}</p>
               <Card.Text>
                 {movie.Synopsis}
               </Card.Text>
               <Card.Text>
               Director : {movie.Director}
               </Card.Text>
               <Card.Text>
                Stars : {movie.actor}
               </Card.Text>
               <Card.Text className='text-warning'>
                Rating : {movie.rating}
               </Card.Text>
               <Button href={movie.trailer} id='Button' variant="success">Movie Trailer</Button>{' '}
             </Card.Body>
           </Card>
           <Accordion bg-dark defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header className='text-center'>Movie Review</Accordion.Header>
        <Accordion.Body>
        { 
                       movie.reviews.map(item=>(
                        <Accordion.Body body style={{ width: '100%' }}>
                        <h5><strong>{item.head}</strong></h5>
                        <h6 style={{fontFamily:'Courier New'}}>{item.comments}</h6>  
                        <p className='text-warning'>Comments {item.Source}</p> 
                        </Accordion.Body>
                       ))
                       }
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
         </Col>
       </Row>) : ""
      }
    </div>
  )
}

export default Movieview
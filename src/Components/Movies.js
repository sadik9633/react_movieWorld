import { React, useEffect, useState } from 'react'
import Moviecards from './Moviecards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Movies() {
  var [moviesList, setMovies] = useState([])

  const fetchData = async () => {
    const result = await fetch('/movie.json')
    result.json().then(
      data => {
        setMovies(data.movies)
      }
    )
  }
  console.log(moviesList);
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Row>
      {

        moviesList.map(item => (

          <Col className='p-5' lg={4} md={6}>
            <Moviecards moviedata={item}></Moviecards>
          </Col>


        ))

      }
    </Row>
  )
}

export default Movies
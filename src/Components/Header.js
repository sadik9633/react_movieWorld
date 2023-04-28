import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import { NavLink } from 'react-router-dom';


function Header() {
  return (
    <>
<Navbar collapseOnSelect expand='sm' bg="dark">
        <Container>
          <Navbar.Toggle aria-controls='reaponsive-navbar-nav' />
          <Navbar.Collapse id='reaponsive-navbar-nav' href="/">
      
                  <img id='log'
                    alt=""
                    src="https://i.postimg.cc/zXtrqK7c/film-roll-29.png"
                    width="60"
                    height="50"
                    className="d-inline-block align-top"
                  />
               {''}
          
                  <h2 className="d-inline-block align-top mt-1 ms-3 text-warning sm-6"><strong>Movie World</strong></h2>
                         
             
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
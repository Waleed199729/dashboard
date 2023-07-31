import { Container, Navbar } from "react-bootstrap";
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <footer className="footer px-0 px-lg-3">
        <Container className="fluid">
          <Navbar>
            <NavLink className="footer-menu">
              <li>
                <Link to="/" onClick={(e) => e.preventDefault()}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" onClick={(e) => e.preventDefault()}>
                  Company
                </Link>
              </li>
              <li>
                <Link to="/" onClick={(e) => e.preventDefault()}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/" onClick={(e) => e.preventDefault()}>
                  Blog
                </Link>
              </li>
            </NavLink>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <Link to="http://www.creative-tim.com">Creative Tim</Link>, made with
              love for a better web
            </p>
          </Navbar>
        </Container>
      </footer>
    </>
  )
}

export default Footer
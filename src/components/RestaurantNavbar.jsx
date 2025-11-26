import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const RestaurantNavbar = () => {
  // props è un OGGETTO, conterrà TUTTE le prop ricevute da questo
  // componente (nel nostro caso c'è solo 1 prop chiamata "illuminaLink")

  // se props.illuminaLink vale "Home", "Prenota" o "Admin" come personalizzo
  // questo componente nel JSX?
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid={true}>
        <Navbar.Brand href="#home">Epistaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className="nav-link"
              // active={props.illuminaLink === 'Home' ? true : false}
              // se il valore della prop "illuminaLink" è proprio "Home",
              // devo illuminare il link Home, dando come valore della sua
              // prop "active" TRUE. Altrimenti, darà a active il valore di FALSE
            >
              Home
            </Link>
            <Link
              to="/prenota"
              className="nav-link"
              // active={props.illuminaLink === 'Prenota' ? true : false}
            >
              Prenota
            </Link>
            <Link
              to="/admin"
              className="nav-link"
              // active={props.illuminaLink === 'Admin' ? true : false}
            >
              Admin
            </Link>
            <Link to="/contact" className="nav-link">
              Contatti
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default RestaurantNavbar

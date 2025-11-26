import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, useLocation } from 'react-router-dom'

const RestaurantNavbar = () => {
  // props è un OGGETTO, conterrà TUTTE le prop ricevute da questo
  // componente (nel nostro caso c'è solo 1 prop chiamata "illuminaLink")

  // se props.illuminaLink vale "Home", "Prenota" o "Admin" come personalizzo
  // questo componente nel JSX?

  // La navbar si trova all'interno di <BrowserRouter>, e quindi può
  // prendere coscienza di QUALE rotta sia stata colpita in qualsiasi momento
  // grazie a questa informazione potremmo assegnare la classe CSS "active"
  // (che in bootstrap illumina in modo speciale uno dei link della navbar)
  // in modo condizionale, andando ad accendere sempre il link relativo
  // alla pagina in cui ci troviamo

  const location = useLocation()
  // location è un oggetto pieno di informazioni relative a DOVE ci si
  // trova a livello di rotte

  console.log('LOCATION', location)

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid={true}>
        <Navbar.Brand href="#home">Epistaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className={
                location.pathname === '/' ? 'nav-link active' : 'nav-link'
              }
              // modo alternativo
              // className={`nav-link${
              //   location.pathname === '/' ? ' active' : ''
              // }`}
              // active={props.illuminaLink === 'Home' ? true : false}
              // se il valore della prop "illuminaLink" è proprio "Home",
              // devo illuminare il link Home, dando come valore della sua
              // prop "active" TRUE. Altrimenti, darà a active il valore di FALSE
            >
              Home
            </Link>
            <Link
              to="/prenota"
              className={
                location.pathname === '/prenota'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              // active={props.illuminaLink === 'Prenota' ? true : false}
            >
              Prenota
            </Link>
            <Link
              to="/menu"
              className={
                location.pathname === '/menu' ? 'nav-link active' : 'nav-link'
              }
            >
              Menu
            </Link>
            <Link
              to="/admin"
              className={
                location.pathname === '/admin' ? 'nav-link active' : 'nav-link'
              }
              // active={props.illuminaLink === 'Admin' ? true : false}
            >
              Admin
            </Link>
            <Link
              to="/contact"
              className={
                location.pathname === '/contact'
                  ? 'nav-link active'
                  : 'nav-link'
              }
            >
              Contatti
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default RestaurantNavbar

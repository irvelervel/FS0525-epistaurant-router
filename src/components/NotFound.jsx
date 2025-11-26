import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
// l'hook "useNavigate" di react-router-dom, se invocato, vi restituisce
// la funzione "navigate" che vi permetterà di trasportare l'utente
// da pagina A a pagina B tramite JS senza il ricaricamento della pagina

const NotFound = function () {
  const navigate = useNavigate()

  return (
    <Container>
      <Row className="justify-content-center my-5">
        <Col xs={12} md={6} className="text-center">
          <div>
            <h3>404 - Not Found</h3>
            <h5>Ci dispiace, non abbiamo trovato quello che cercavi.</h5>

            <Button
              variant="info"
              onClick={() => {
                // tradizionalmente, in JS per portare un utente
                // da pagina A a pagina B si utilizza location.assign()
                // location.assign('/') // <-- metodo tradizionale JS
                navigate('/') // <-- maniera di react-router-dom
              }}
            >
              Torna in home
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound

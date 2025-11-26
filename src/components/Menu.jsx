import { Col, Container, Row, Card, Button, Badge } from 'react-bootstrap'
import paste from '../data/menu.json'
import { useNavigate } from 'react-router-dom'

const Menu = function () {
  const navigate = useNavigate()

  return (
    <Container>
      <title>Menu</title>
      <Row className="justify-content-center">
        <Col xs={12} md={4} className="text-center">
          <h2 className="text-center">Sfoglia il nostro delizioso menu</h2>
          {paste.map((p) => {
            return (
              <Card key={p.id} className="my-3">
                <Card.Img variant="top" src={p.image} />
                <Card.Body>
                  <Card.Title>{p.name}</Card.Title>
                  <Card.Text>{p.description}</Card.Text>
                  <Card.Text>
                    <Badge pill bg="info">
                      {p.price}€
                    </Badge>
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={
                      // porto l'utente nella pagina dettaglio
                      () => navigate('/details/' + p.id)
                      //   il link di destinazione è qualcosa tipo:
                      // /details/1
                    }
                  >
                    Vai ai dettagli
                  </Button>
                </Card.Body>
              </Card>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default Menu

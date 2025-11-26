import { useNavigate, useParams } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Spinner,
} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import paste from '../data/menu.json'
import PastaReviews from './PastaReviews'

const PastaDetails = function () {
  const navigate = useNavigate()
  const params = useParams()
  console.log('PARAMETRI ROTTA', params)

  const [pastaToShow, setPastaToShow] = useState(null)
  const [loading, setLoading] = useState(true)

  // ora da PastaDetails dovremmo recuperare il valore di quel "placeholder",
  // "parametro" che di fatto differenzia il percorso nella barra degli indirizzi
  // ed utilizzarlo per capire QUALE delle paste caricare i dettagli

  // dentro l'oggetto params troveremo tutti i parametri passati tramite URL
  // i parametri sono le parole definite dopo i : nella dichiarazione della <Route />

  // "componentDidMount"
  useEffect(() => {
    // ora possiamo recuperare quel '0', quel '2' (quel pastaID) etc. e capire
    // di quale pasta mostrare i dettagli
    // params.pastaID
    const pasta = paste.find((p) => {
      return p.id.toString() === params.pastaID
    })

    if (!pasta) {
      // portiamo l'utente alla pagina NotFound o in home
      navigate('/404')
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPastaToShow(pasta) // metto nello stato quello che mi ha trovato il find
    setLoading(false)

    console.log('PASTA TROVATA', pasta)
  }, [])

  return (
    <Container>
      <title>Dettagli piatto</title>
      <Row className="justify-content-center my-3">
        <Col xs={12} md={6} className="text-center">
          <h2 className="text-center">Dettagli del piatto</h2>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="success" />
            </div>
          ) : (
            <>
              <Card className="my-3">
                <Card.Img variant="top" src={pastaToShow.image} />
                <Card.Body>
                  <Card.Title>{pastaToShow.name}</Card.Title>
                  <Card.Text>{pastaToShow.description}</Card.Text>
                  <Card.Text>
                    <Badge pill bg="info">
                      {pastaToShow.price}€
                    </Badge>
                  </Card.Text>
                  <Button
                    variant="primary"
                    onClick={
                      // riporto l'utente nella pagina menu
                      () => navigate('/menu')
                    }
                  >
                    Torna al menu
                  </Button>
                </Card.Body>
              </Card>
              <PastaReviews pasta={pastaToShow} />
            </>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default PastaDetails

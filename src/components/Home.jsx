import React from 'react'
import { Col, Container, Row ,Card ,Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import {Link} from 'react-router-dom'

const Home = () => {

let navigate = useNavigate();

const routeChange = () =>{
  let path = "/details"
  navigate(path)

}

  return (
    <Container>
      <Row>

        <Col className='mt-3' md={3}>
        <Card>
          <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" />
            <Card.Body>
              <Card.Title>My Restaurant 1</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </Card.Text>
                <Button variant="primary" onClick={routeChange}>More Details</Button>
            </Card.Body>
        </Card>
        
        </Col>
        <Col className='mt-3' md={3}>
        <Card>
          <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" />
            <Card.Body>
              <Card.Title>My Restaurant 1</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </Card.Text>
                <Button variant="primary" as={Link} to='/about'>More Details</Button>
            </Card.Body>
        </Card>
        
        </Col>
        <Col className='mt-3' md={3}>
        <Card>
          <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" />
            <Card.Body>
              <Card.Title>My Restaurant 1</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </Card.Text>
                <Button variant="primary">More Details</Button>
            </Card.Body>
        </Card>
        
        </Col>
        <Col className='mt-3' md={3}>
        <Card>
          <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" />
            <Card.Body>
              <Card.Title>My Restaurant 1</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </Card.Text>
                <Button variant="primary">More Details</Button>
            </Card.Body>
        </Card>
        
        </Col>
        <Col className='mt-3' md={3}>
        <Card>
          <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" />
            <Card.Body>
              <Card.Title>My Restaurant 1</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </Card.Text>
                <Button variant="primary">More Details</Button>
            </Card.Body>
        </Card>
        
        </Col>
        <Col className='mt-3' md={3}>
        <Card>
          <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" />
            <Card.Body>
              <Card.Title>My Restaurant 1</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </Card.Text>
                <Button variant="primary">More Details</Button>
            </Card.Body>
        </Card>
        
        </Col>
        <Col className='mt-3' md={3}>
        <Card>
          <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" />
            <Card.Body>
              <Card.Title>My Restaurant 1</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </Card.Text>
                <Button variant="primary">More Details</Button>
            </Card.Body>
        </Card>
        
        </Col>
        <Col className='mt-3' md={3}>
        <Card>
          <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" />
            <Card.Body>
              <Card.Title>My Restaurant 1</Card.Title>
                <Card.Text>
                   Some quick example text to build on the card title and make up the
                   bulk of the card's content.
                </Card.Text>
                <Button variant="primary">More Details</Button>
            </Card.Body>
        </Card>
        
        </Col>
        
      </Row>

    </Container>
  )
}

export default Home
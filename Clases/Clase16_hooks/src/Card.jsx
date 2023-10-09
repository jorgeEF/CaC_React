import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Tarjeta = () => {
    return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="" /> */}
      <Card.Body>
        <Card.Title>Titulo de tarjeta</Card.Title>
        <Card.Text>
          Texto tarjeta
        </Card.Text>
        <Button variant="primary">Accion Tarjeta</Button>
      </Card.Body>
    </Card>
    );
}
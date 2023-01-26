import React from 'react';
import { ListGroup, Card } from 'react-bootstrap';

const PeliculaItem = (props) => {
    return (

        <ListGroup.Item className='sinborde'>

            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.pelicula.nombre}</Card.Title>
                    <Card.Text>
                    {props.pelicula.desc}
                    </Card.Text>
                    <Card.Text>
                    {`Género: ${props.pelicula.genero}`}
                    </Card.Text>
                </Card.Body>
            </Card>
        </ListGroup.Item>

    );
};

export default PeliculaItem;
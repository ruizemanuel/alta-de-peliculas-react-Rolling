import React from 'react';
import { ListGroup } from 'react-bootstrap';
import PeliculaItem from './PeliculaItem';

const ListaPeliculas = (props) => {
    return (

        <div className='mt-4'>

            {props.arregloPeliculas.length !== 0 ? <ListGroup horizontal variant="flush">
                {props.arregloPeliculas.map((item, posicion) => <PeliculaItem key={posicion} pelicula={item} />)}
            </ListGroup>
            :
            <p className='fw-bold text-center'>No hay peliculas</p>}
        </div>
    );
};

export default ListaPeliculas;
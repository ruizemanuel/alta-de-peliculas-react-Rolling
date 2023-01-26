import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Pelicula } from '../helpers/peliculaClass';
import '../styles.css'
import ListaPeliculas from './ListaPeliculas';

const Formulario = () => {

    let peliculasLocalStorage = JSON.parse(localStorage.getItem('listaPeliculas')) || [];
    const [peliculas, setPeliculas] = useState(peliculasLocalStorage);
    const [nombre, setNombre] = useState('');
    const [desc, setDesc] = useState('');
    const [genero, setGenero] = useState('');

    useEffect(() => {
        localStorage.setItem('listaPeliculas', JSON.stringify(peliculas));
    }, [peliculas]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let peliculaNueva = new Pelicula(
            nombre,
            desc,
            genero,
        );

        setPeliculas([...peliculas, peliculaNueva]);
        setNombre('');
        setDesc('')
        setGenero('Comedia')

    }


    return (
        <div>
            <div className='mt-5 d-flex justify-content-center'>

                <Form className='ms-5 formWidth2' onSubmit={handleSubmit}>

                    <Form.Group className="mb-3 d-flex align-items-center row">
                        <Form.Label className='col-4 fw-bold'>Titulo de pelicula</Form.Label>
                        <Form.Control className='col formWidth ms-4' type="text" placeholder="Titulo de pelicula"
                            maxLength={20}
                            required
                            onChange={(e) => setNombre(e.target.value)}
                            value={nombre}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center row">
                        <Form.Label className='col-4 fw-bold' >Descripcion</Form.Label>
                        <textarea className='col formWidth ms-4 form-control' style={{ height: 100 }} type="text" placeholder="Descripcion"
                            maxLength={200}
                            required
                            onChange={(e) => setDesc(e.target.value)}
                            value={desc}
                        />
                    </Form.Group>



                    <Form.Group className="mb-3 d-flex align-items-center row">
                        <Form.Label className='col-4 fw-bold' >Género</Form.Label>
                        <Form.Select className='col formWidth ms-4'
                        onChange={(e) => setGenero(e.target.value)}
                        value={genero}
                        >
                            <option value="Comedia">Comedia</option>
                            <option value="Drama">Drama</option>
                            <option value="Infantil">Infantil</option>
                        </Form.Select>
                    </Form.Group>



                    <div className='text-center mt-4'>
                        <Button className='mb-3 centrar' variant="primary" type="submit">
                            Agregar pelicula
                        </Button>
                    </div>

                </Form>

            </div>
            <ListaPeliculas arregloPeliculas={peliculas} ></ListaPeliculas>
        </div>

    );
};

export default Formulario;
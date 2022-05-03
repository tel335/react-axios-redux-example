import { Container, Row, Col, Button } from "react-bootstrap"

function MoviesList (props) {
    return (
        <section id='moviesList'>
            <Container>
                <Row>
                    <div className="col-12 text-left">
                        <ul className="arrow-styled">
                            {
                                props.movies.map((movie, index) => (
                                    <div key={index} className='row'>
                                        <Row>
                                            <Col><h2>{movie.Title}</h2></Col>
                                            <Col><Button variant="danger" size="sm" onClick={() => props.onAdd(movie)}>Agregar</Button></Col>
                                        </Row>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default MoviesList
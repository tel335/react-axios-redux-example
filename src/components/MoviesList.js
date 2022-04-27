import { Container, Row } from "react-bootstrap"

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
                                        <h2>{movie.Title}</h2>
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
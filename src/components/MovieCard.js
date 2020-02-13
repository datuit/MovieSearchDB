import React from 'react'
import { Col, Card, CardBody, CardImg, CardTitle } from 'reactstrap'

const MovieCard = ({ item }) => {
  return (
    <Col xs="6" sm="4" lg="3" className="p-3">
      <Card className="text-center h-100 p-3 bg-dark text-light ">
        <CardImg
          top
          width="100%"
          src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
          alt="Movie Cover"
        />
        <CardBody>
          <CardTitle className="h5">{item.title}</CardTitle>
          <a
            className="btn btn-primary"
            href={`https://themoviedb.org/movie/${item.id}`}
          >
            Movie Details
            <i className="fas fa-chevron-right" />
          </a>
        </CardBody>
      </Card>
      {/* <div className="card card-body bg-dark text-center h-100">
        <img className="w-100 mb-2" src="/sss" alt="Movie Cover" />
        <h5 className="text-light card-title">3000 - 3000</h5>
        <Link className="btn btn-primary" to={'/movie/'}>
          Movie Details
          <i className="fas fa-chevron-right" />
        </Link>
      </div> */}
    </Col>
  )
}

export default MovieCard

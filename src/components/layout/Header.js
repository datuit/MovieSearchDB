import React from 'react'
import { Row, Col } from 'reactstrap'
import { LOGO } from '../../constants/images'

const Header = () => {
  return (
    <header className="p-4">
      <Row>
        <Col>
          <a className="logo" href="/">
            <img className="mr-2" src={LOGO} alt="logo" /> Thành Đạt
          </a>
        </Col>
        <Col className="text-right">
          <i
            className="fab fa-imdb mr-4"
            style={{ fontSize: '50px', color: 'yellow' }}
          ></i>
          <i
            className="fab fa-react"
            style={{ fontSize: '50px', color: '#00D9FF' }}
          ></i>
        </Col>
      </Row>
    </header>
  )
}

export default Header

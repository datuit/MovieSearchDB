import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'reactstrap'
import APIkey from '../constants/APIkey'
import MovieCard from '../components/MovieCard'
import { Spinner } from '../components/layout'

const Home = () => {
  const [searchText, setSearchText] = useState('')
  const [listItem, setListItem] = useState(null)
  useEffect(() => {
    if (searchText) {
      axios({
        method: 'get',
        url: `https://api.themoviedb.org/4/search/movie?api_key=${APIkey}${
          searchText ? `&query=${searchText}` : `&query="ant man`
        }`
      })
        .then(res => setListItem(res.data.results))
        .catch(err =>
          err ? alert('Có lỗi sảy ra liên hệ : 09xx.xxx.xxx :)') : ''
        )
    } else {
      axios({
        method: 'get',
        url: `https://api.themoviedb.org/4/discover/movie?api_key=${APIkey}&query=${searchText}`
      })
        .then(res => setListItem(res.data.results))
        .catch(err =>
          err ? alert('Có lỗi sảy ra liên hệ : 09xx.xxx.xxx :)') : ''
        )
    }
  }, [searchText])
  return (
    <div className="home">
      <input
        value={searchText}
        className="search"
        placeholder="Enter search term"
        onChange={e => {
          setListItem(null)
          setSearchText(e.target.value)
        }}
      />
      <Row>
        {listItem ? (
          listItem.map((item, i) => <MovieCard item={item} key={i} />)
        ) : (
          <Col>
            <Spinner />
          </Col>
        )}
      </Row>
    </div>
  )
}

export default Home

import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

function Home() {
  return (
    <div>
      <Main></Main>
      <Row title="Upcoming" fetchURL={requests.requestUpcoming}></Row>
      <Row title="Popular" fetchURL={requests.requestPopular}></Row>
      <Row title="Trending" fetchURL={requests.requestTrending}></Row>
      <Row title="Top Rated" fetchURL={requests.requestTopRated}></Row>
      <Row title="Horror" fetchURL={requests.requestHorror}></Row>
    </div>
  ) 
}

export default Home
import React from 'react'
import { Container } from 'reactstrap'
import { Layout, Banner, PizzaList } from 'containers'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <Layout>
      <Helmet>
        <title>{process.env.REACT_APP_NAME}</title>
      </Helmet>
      <Banner />
      <Container>
        <PizzaList />
      </Container>
    </Layout>
  )
}

export default Home

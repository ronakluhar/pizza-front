import React from 'react'
import { Container } from 'reactstrap'
import { Layout, Banner, PizzaList } from 'containers'

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Container>
        <PizzaList />
      </Container>
    </Layout>
  )
}

export default Home

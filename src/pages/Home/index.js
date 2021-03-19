import React from 'react'
import { Container } from 'react-bootstrap'
import { AboutHome, Footer, Header, JumbotronContent, PorfolioHome } from '../../components'
import { Gap } from '../../components/atoms'


const Home = () => {
    return (
        <div>
          <Container>
            <Header/>
            <JumbotronContent/>
          </Container>
          <AboutHome/>
          <Gap height={100}/>
          <PorfolioHome/>
          <Gap height={100}/>
          <Footer/>
        </div>
    )
}

export default Home

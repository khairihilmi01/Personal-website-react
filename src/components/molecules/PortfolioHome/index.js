import React from 'react'
import { Carousel, CarouselItem, Container } from 'react-bootstrap'
import { CatBg, CatBg1, CatBg2 } from '../../../assets'
import './portfoliohome.scss'

const PortfolioHome = () => {
  return (
    <Container className="portfolio-container">
      <div className="portfolio-wrapper">
        <Carousel className="wrapper">
          <CarouselItem>
            <img className="d-block w-100" src={CatBg} alt="First slide"/>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </CarouselItem>

          <CarouselItem>
            <img className="d-block w-100" src={CatBg1} alt="second slide"/>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </CarouselItem>

          <CarouselItem>
            <img className="d-block w-100" src={CatBg2} alt="second slide"/>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </CarouselItem>
        </Carousel>
      </div>
      <div className="title"><h1>Portfolio</h1></div>
      </Container>
  )
}

export default PortfolioHome

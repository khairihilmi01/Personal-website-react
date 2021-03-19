import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { People } from '../../../assets'
import { Gap } from '../../atoms'
import './AboutHome.scss'

const AboutHome = () => {
  return (
    <div className="about-wrapper">
      <Container>
        <div className="about-container">

          <div className="about-text">
          <Gap height={40}/>
            <div className="title">
              About <br/> Me
              </div>
              <Gap height={50}/>
            <div className="text-detail">
              Hardworking <br/>
              Leadership <br/>
              Enthusiast <br/>
              Analytical thingking
            </div>
            <Gap height={50}/>
            <Button className="button">Read More</Button>
          </div>
          <div className="about-img">
            <img className="People" src={People} alt="people"/>
          </div>
        </div>
        </Container>
    </div>
  )
}

export default AboutHome

import React from 'react'
import { Container } from 'react-bootstrap';
import { IcFacebook, IcGithub, IcInstagram, IcLinkedin, IcMedium, IcTwitter } from '../../../assets';
import './footer.scss'

const Icon = ({ img }) => {
    return (
      <div className="icon-wrapper">
        <img className="icon-medsos" src={img} alt="icon" />
      </div>
    );
  };


const Footer = () => {
    return (
        <div className="footer">
            <Container className="footer-wrapper">
                <div className="footer-contact">
                    <p>Khairihilmi01@gmail.com</p>
                    <p>+6285356378362</p>
                </div>
                <div className="footer-icon">
                    <Icon img={IcFacebook} />
                    <Icon img={IcLinkedin} />
                    <Icon img={IcGithub} />
                    <Icon img={IcInstagram} />
                    <Icon img={IcTwitter} />
                    <Icon img={IcMedium} />
                </div>
                <div className="footer-address">
                    <p>Perumahan Batan Indah Blok O 54</p>
                    <p>Serpong, Tangerang Selatan</p>
                </div>
            </Container>
        </div>
    )
}

export default Footer
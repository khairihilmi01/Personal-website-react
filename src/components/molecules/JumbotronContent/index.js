import React from 'react'
import { Khairi } from '../../../assets'
import './JumbotronContent.scss'

const JumbotronContent = () => {
  return (
    <div className="profile">
      <div className="content-jumbo">
        <h1 className="name">
            Hi There, <br/>
            I'm Khairi Hilmi Saputra
        </h1>
        <h3 className="quotes1">
            Data, Science and Art Enthusiast
        </h3>
        <h5 className="quotes">
            Learn All you Want, Expand your Insigths, Share with Love
        </h5>

        <button className="resume">Resume</button>
      </div>

    </div>
  )
}

export default JumbotronContent

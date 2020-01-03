import React from 'react'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './SocialNetworks.css'

const SocialNetworks = () => {
  return (
    <div className="socialNetworksContainer">
      <div className="blockContent">
        <div>Intervention du lundi au samedi <br />9h-19h</div>
        <Link to='/Contact'><Button outline color="success">Réservez !</Button></Link>
      </div>
    </div>
  )
}

export default SocialNetworks
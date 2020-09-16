import React from 'react'

import './Presentation.css'
import image from './images/velo_au_soleil.jpg'

const Presentation = () => {
  return (
    <div className='presentationContainer'>

      <img className='presentationImage' src={image} alt="Présentation" />

      {/* Images container */}
      <div className='subPresentationContainer'>
        <div className='leftContainer'>
          <h1 className='titrePresentation'>LE MEC A VELO : MECANICIEN CYCLE AMBULANT</h1>
          <p className='presentation'>Le mec à vélo est le premier rennais à proposer un service ambulant de réparation de cycles. Chez vous, au bureau, il intervient sur l'ensemble de la ville de Rennes le plus rapidement possible.</p>
        </div>
        <div className='rightContainer'>
          <div className='carre'>
            <p className='tarifsForfait'>Forfait révision : 30€</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Presentation
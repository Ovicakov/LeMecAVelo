import React from 'react'

import Presentation from './Presentation'
import Carousel from './Carousel'
import SocialNetworks from './SocialNetworks'

const Home = () => {
  return(
    <div>
      <Presentation />
      <SocialNetworks />
      <Carousel />
    </div>
  )
}

export default Home
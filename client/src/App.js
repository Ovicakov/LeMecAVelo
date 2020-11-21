import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Tarifs from './components/Tarifs'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Boutique from './components/Boutique'
import Admin from './components/Admin'

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Tarifs' component={Tarifs} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Boutique' component={Boutique} />
        <Route path='/Admin' component={Admin} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

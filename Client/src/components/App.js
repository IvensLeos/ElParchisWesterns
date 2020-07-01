import React from 'react'
import { useAppContext } from '../context/Context'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import LandingPage from '../pages/LandingPage'
import DashboardPage from '../pages/DashboardPage'
import PlayzonePage from '../pages/PlayzonePage'

import { TitleWarning } from './App.module.css'

const App = () => {

  const { User } = useAppContext()

  if (User.Username) return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        <Route exact path="/dashboard" render={() => <DashboardPage />} />
        <Route exact path="/playzone" render={() => <PlayzonePage />} />

        <Route render={() => <h2 className={TitleWarning}>Uuups... No Hemos Encontrado La Pagina.</h2>} />
      </Switch>
    </BrowserRouter>
  )

  return (
     <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        
        <Route exact path="/playzone" render={() => <PlayzonePage />} />
        
        <Route render={() => <h2 className={TitleWarning}>Uuups... No Hemos Encontrado La Pagina.</h2>} />
      </Switch>
     </BrowserRouter>
  )
}

export default App
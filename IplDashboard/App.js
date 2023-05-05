import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="ipl-app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App

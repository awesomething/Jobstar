import React, {Component} from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SearchPage from './components/SearchPage'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'


class App extends Component {

  render(){
    return (
      <div>
    <Router>
    <Header />
    
    <Switch>
    <Route path="/search">
          <SearchPage />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    
    <Footer />
    </ Router>
    </div>
    )
    }
  
  
}

export default App
/*<Router>
<Route path="/">
<Route exact path='/' component={Home}/>
<Route path={"card"} component={Card} />
<Route path={"home"} component={Home} />
</Route>
<Route path={"home-single"} component={Home}/>

</Router>*/



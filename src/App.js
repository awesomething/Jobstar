import React, {Component} from 'react'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SearchPage from './components/SearchPage'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
//import { Provider } from 'react-redux'
//import AppRouter from './routers/AppRouter'
//import configureStore from './store/configureStore'
//import { addJob } from './actions/jobs'


/*const store = configureStore()
const now = moment.now()

store.dispatch(addJob({
  title: 'Down the Rabbit Hole',
  entry: 'Alice sits drowsily by a riverbank, bored by the book her older sister reads to her. Out of nowhere, a White Rabbit runs past her, fretting that he will be late. The Rabbit pulls a watch out of his waistcoat pocket and runs across the field and down a hole. Alice impulsively follows the Rabbit and tumbles down the deep hole that resembles a well, falling slowly for a long time. As she floats down, she notices that the sides of the well are covered with cupboards and shelves.',
  weeklyHours: 7,
  jobType: 'normal',
  createdAt: moment(now), 
  experienceLevel: 4
}))

    
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))*/

//const abouts = [];

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



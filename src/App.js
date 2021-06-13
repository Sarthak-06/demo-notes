import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignIn from './SignIn'
import Home from './pages';

function App() {
  return (
   
    <Router>
      <Switch>
        <Route exact path='/'component={Home}/>
  
      <Route path='/signin' component={SignIn}/>
 
    </Switch>
    </Router>
   
  );
}

export default App;

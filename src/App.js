import {Route, Switch} from 'react-router-dom' 
import './App.css';
import NavBar from './Navbar/Navbar'
import Welcome from './Welcome/Welcome'
import Rolled from './Rolled/Rolled'

function App() {
  return (
    <div className="App">
      <NavBar/ >
      <Switch>
          <Route path="/rolled" component={Rolled} />
          <Route path="/" component={Welcome} />
      </Switch>
    </div>
  );
}

export default App;

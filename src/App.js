import {Route, Switch} from 'react-router-dom'
import './App.css';
import NavBar from './Navbar/Navbar'
//import Welcome from './Welcome/Welcome'
import Start from './Act_0/Map_1'
import Rolled from './Rolled/Rolled'
import TrackA_Router from './Track_A/TrackA_Router'


function App() {
  return (
    <div className="App">
      <NavBar/ >
      <Switch>
          <Route path="/rolled" component={Rolled} />
          <Route path="/Track_A" component={TrackA_Router} />

          <Route path="/" component={Start} />


      </Switch>
    </div>
  );
}

export default App;

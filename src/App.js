import {Route, Switch} from 'react-router-dom'
import './App.css';
import NavBar from './Navbar/Navbar'
//import Welcome from './Welcome/Welcome'
import Start from './Act_0/Map_1'
import Rolled from './Rolled/Rolled'
import TrackA_Router from './Track_A/TrackA_Router'
import TrackB_Router from './Track_B/TrackB_Router'
import TrackC_Router from './Track_C/TrackC_Router'
import TrackD_Router from './Track_D/TrackD_Router'
import TrackE_Router from './Track_E/TrackE_Router'


function App() {
  return (
    <div className="App">
      <NavBar/ >
      <Switch>
          <Route path="/rolled" component={Rolled} />
          <Route path="/Track_A" component={TrackA_Router} />
          <Route path="/Track_B" component={TrackB_Router} />
          <Route path="/Track_C" component={TrackC_Router} />
          <Route path="/Track_D" component={TrackD_Router} />
          <Route path="/Track_E" component={TrackE_Router} />

          <Route path="/" component={Start} />


      </Switch>
    </div>
  );
}

export default App;

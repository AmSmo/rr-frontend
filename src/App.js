import {Route, Switch} from 'react-router-dom'
import './App.css';
import NavBar from './Navbar/Navbar'
//import Welcome from './Welcome/Welcome'
import Start from './Act0/Map1'
import Rolled from './Rolled/Rolled'
import TrackARouter from './TrackA/TrackARouter'
import TrackBRouter from './TrackB/TrackBRouter'
import TrackCRouter from './TrackC/TrackCRouter'
import TrackDRouter from './TrackD/TrackDRouter'
import TrackERouter from './TrackE/TrackERouter'


function App() {
  return (
    <div className="App">
      <NavBar/ >
      <Switch>
          <Route path="/rolled" component={Rolled} />
          <Route path="/TrackA" component={TrackARouter} />
          <Route path="/TrackB" component={TrackBRouter} />
          <Route path="/TrackC" component={TrackCRouter} />
          <Route path="/TrackD" component={TrackDRouter} />
          <Route path="/TrackE" component={TrackERouter} />

          <Route path="/" component={Start} />


      </Switch>
    </div>
  );
}

export default App;

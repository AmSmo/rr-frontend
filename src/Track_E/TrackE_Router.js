import {Route, Switch} from 'react-router-dom'
import Track_E_1 from './Track_E_1'



function TrackE_Router() {
  return (

      <Switch>
          <Route path="/Track_E" component={Track_E_1} />
      </Switch>

  );
}

export default TrackE_Router;

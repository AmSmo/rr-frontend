import {Route, Switch} from 'react-router-dom'
import Track_A_1 from './Track_A_1'



function TrackA_Router() {
  return (

      <Switch>
          <Route path="/Track_A" component={Track_A_1} />
      </Switch>

  );
}

export default TrackA_Router;

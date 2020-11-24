import {Route, Switch} from 'react-router-dom'
import Track_B_1 from './Track_B_1'



function TrackB_Router() {
  return (

      <Switch>
          <Route path="/Track_B" component={Track_B_1} />
      </Switch>

  );
}

export default TrackB_Router;

import {Route, Switch} from 'react-router-dom'
import Track_D_1 from './Track_D_1'



function TrackD_Router() {
  return (

      <Switch>
          <Route path="/Track_D" component={Track_D_1} />
      </Switch>

  );
}

export default TrackD_Router;

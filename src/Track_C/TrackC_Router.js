import {Route, Switch} from 'react-router-dom'
import Track_C_1 from './Track_C_1'



function TrackC_Router() {
  return (

      <Switch>
          <Route path="/Track_C" component={Track_C_1} />
      </Switch>

  );
}

export default TrackC_Router;

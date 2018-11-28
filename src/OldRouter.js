import React, {
  Component
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';



import Home        from './views/Home/Home';
import Profile     from './views/Profile/Profile';
import New         from './views/New/New';
import List        from './screens/List/List';
import DisplayList from './screens/DisplayList/DisplayList';
import Departments from './screens/Departments/Departments';
import Ingredients from './screens/Ingredients/Ingredients';
import Examples    from './views/Examples/Examples';





class OldRouter extends Component {

  render() {
    return (
        <Switch>
          <Route path='/'            component={Home} exact />
          <Route path='/profile'     component={Profile} />
          <Route path='/new'         component={New} />
          <Route path='/list'        component={List} />
          <Route path='/departments' component={Departments} />
          {/* Are we reallly can have exact for a few routes? */}
          <Route path='/display'     component={DisplayList} exact />
          <Route path='/ingredients' component={Ingredients} exact />

          <Route path='/examples'    component={Examples} exact />
        </Switch>
    );
  }

}



export default OldRouter;

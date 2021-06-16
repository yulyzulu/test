import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Init from './components/Init';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Init} />
      </Switch>
    </Router>
  );
}

export default App;

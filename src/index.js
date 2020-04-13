import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavigationBar from './NavigationBar';
import * as serviceWorker from './serviceWorker';
import SearchHitachi from './SearchHitachi';
import Hitachivantara from './Hitachivantara';
import home from './home';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <NavigationBar/>
   <Router>
   <Route path="/home">
          <App />
        </Route>
        <Route path="/searchHitachi">
          <SearchHitachi/>
        </Route>
        <Route path="/hitachivantara">
          <Hitachivantara/>
        </Route>
        {/* <Route path="/condition">
          <condition />
        </Route>
        <Route path="/IBM">
          <IBM />
        </Route> */}
     </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

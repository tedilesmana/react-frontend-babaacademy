import React, { Component } from 'react';
import VHome from './view/VHome';
import { Switch, Route } from "react-router-dom";
import Navbar from './component/template/Navbar';

class App extends Component {

    render() {
        return (
            <div>
              <Navbar />
              <Switch>
                <Route path="/" exact ><VHome /></Route>
              </Switch>
            </div>
        )
    }
}

export default App;
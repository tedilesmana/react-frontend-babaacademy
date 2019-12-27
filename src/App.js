import React, { Component } from 'react';
import VHome from './view/VHome';
import VListCourse from './view/VListCourse';
import VEditCourse from './view/VEditCourse';
import VAddCourse from './view/VAddCourse';
import { Switch, Route } from "react-router-dom";
import Navbar from './component/template/Navbar';

class App extends Component {

    render() {
        return (
            <div>
              <Navbar />
              <Switch>
                <Route path="/" exact ><VHome /></Route>
                <Route path="/list_course" ><VListCourse /></Route>
                <Route path="/edit_course/:id" ><VEditCourse /></Route>
                <Route path="/add_course" ><VAddCourse /></Route>
              </Switch>
            </div>
        )
    }
}

export default App;
// Rendering layer control - React Router
// 'react-router-dom' enables app to navigate around the browser DOM
// 'BrowserRouter'
//    is the brains of react-router
//    tells react-router how to behave
//    looks at the current URL and changes the components that are visible on the screen
// 'Route'
//    is a react component
//    is used to set up a rule between a certain route and a set of components


import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';


import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>



// BrowserRouter can only take one child so we embed everything in a container div
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={ Landing } />
            <Route exact path="/surveys" component={ Dashboard } />
            <Route exact path="/surveys/new" component={ SurveyNew } />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);

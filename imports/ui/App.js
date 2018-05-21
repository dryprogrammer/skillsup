import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

import Colors from '@material-ui/core/colors';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Routes
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProjectList from './ProjectList';
import ProjectPage from './ProjectPage';
import AppSelection from './AppSelection';

import FilterForm from './FilterForm';
// import AppBar from './AppBar';
import AppBar2 from './AppBar2';

import SkillsDashboard from './SkillsDashboard';
import LandingPage from './LandingPage2';
import SkillsChart from './SkillsChart';

import CurrentProjects from './CurrentProjects';
import ProjectDashboard from './ProjectDashboard';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
};

// import { AppMUI as Root } from './Root';

// All the following keys are optional.
// We try our best to provide a great default value.
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: Colors.pink,
    secondary: Colors.lightGreen,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});


// rgb(55, 197, 250)
// rgb(249, 128, 171);
// rgb(87, 86, 96);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

          // <ul>
          //   <li>
          //     <Link to="/">Home</Link>
          //   </li>
          //   <li>
          //     <Link to="/app_selection">About</Link>
          //   </li>
          //   <li>
          //     <Link to="/project">Topics</Link>
          //   </li>
          // </ul>
export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <AppBar2 />
          <Route exact path="/" component={LandingPage} />
          <Route path="/app_selection" component={FilterForm} />
          <Route path="/filter_form" component={FilterForm} />

          <Route path="/skills_dashboard" component={SkillsDashboard} />

          <Route exact path="/project" component={ProjectList} />
          <Route path="/project/:id" component={ProjectPage} />

          <Route exact path="/current_projects" component={CurrentProjects} />
          <Route exact path="/project_dashboard/:id" component={ProjectDashboard} />

          <Route path="/skills_chart" component={SkillsChart} />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}
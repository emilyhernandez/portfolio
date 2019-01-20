import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Home from '../home/index';
import Work from '../work/index';
import Header from '../../components/Header/index';
import CV from '../cv/index';
import NotFound from './../notfound/index';
import Footer from '../../components/Footer/index';

const styles = theme => ({
  app: { padding: theme.spacing.unit * 2 },
});

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="app" className={classes.app}>
        <Header />
        <div id="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/cv" component={CV} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles))(App);

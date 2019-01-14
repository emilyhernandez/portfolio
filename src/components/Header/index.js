/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './style.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: 'auto',
    backgroundColor: 'transparent'
  },
  grow: {
    flexGrow: 1
  },
  logo: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
    paddingLeft: theme.spacing.unit * 1,
    [theme.breakpoints.up('sm')]: {
      
      paddingLeft: theme.spacing.unit * 2,

    }
  },
  menuButton: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    transform: 'rotate(0deg)',
    transition: '.5s ease-in -out'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  navButton: {
    '&:hover': {},
    background: 'transparent',
    borderRadius: '0',
    color: theme.palette.primary.contrastText
  },
  title: {
    textTransform: 'uppercase'
  }
});

/* eslint-disable react/prefer-stateless-function */
export class Header extends React.Component {
  state = {};

  toggleNav() {
    if (document.getElementById('myNav').style.height == '0%') {
      document.getElementById('myNav').style.height = '100%';

      document.getElementById('top').classList.toggle('open');
      document.getElementById('middle').classList.toggle('open');
      document.getElementById('bottom').classList.toggle('open');
    } else {
      document.getElementById('myNav').style.height = '0%';

      document.getElementById('top').classList.toggle('open');
      document.getElementById('middle').classList.toggle('open');
      document.getElementById('bottom').classList.toggle('open');
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Typography className={classes.title}>Emily Hernandez</Typography>
            <div className={classes.grow} />

            <div className={classes.sectionDesktop}>
              <Button className={classes.navButton} component={Link} to="/work">
                Work
              </Button>
              <Button className={classes.navButton} component={Link} to="/CV">
                CV
              </Button>
            </div>

            <div className={classes.menu}>
              <IconButton className={classes.menuButton}>
                <div className="con" onClick={this.toggleNav}>
                  <div id="top" className="bar" />
                  <div id="middle" className="bar" />
                  <div id="bottom" className="bar" />
                </div>
              </IconButton>
              <div id="myNav" className="overlay" style={{ height: '0%' }}>
                <div className="overlay-content">
                  <Link to="/work" onClick={this.toggleNav}>
                    <Typography variant="h1">Work</Typography>
                  </Link>
                  <br/><br/>
                  <Link to="/cv" onClick={this.toggleNav}>
                    <Typography variant="h1">CV</Typography>
                  </Link>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Header);

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
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: 'auto',
    backgroundColor: 'transparent',
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
  toolBar: {
    backgroundColor: 'transparent',
  },
  appBar: {
    backgroundColor: 'transparent',
    marginTop: theme.spacing.unit * 2,
  },
  menuButton: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
  loginButton: {
    background: theme.palette.secondary
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block'
    }
  }
});

/* eslint-disable react/prefer-stateless-function */
export class Header extends React.Component {
  state = {
    auth: true
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Button component={Link} to="/">
              Emily Hernandez
            </Button>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button component={Link} to="/work">
                Work
              </Button>
              <Button component={Link} to="/CV">
                CV
              </Button>
              <Button component={Link} to="/about">
                About me
              </Button>
            </div>
            <IconButton className={classes.menuButton} aria-label="Menu">
              <MenuIcon />
            </IconButton>
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

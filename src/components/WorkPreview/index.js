/**
 *
 * WorkPreview
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '44vw'
    },
    [theme.breakpoints.up('xl')]: {
      width: '30vw'
    },
    paddingBottom: theme.spacing.unit * 5,
  },
  imageDiv: {
    position:'relative',
    paddingBottom: '100%',
  },
  image: {
    position: 'absolute',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  textContent: {
    marginTop: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 1,
    paddingRight: theme.spacing.unit * 1,
  },
});

/* eslint-disable react/prefer-stateless-function */
export class WorkPreview extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.imageDiv}>
          <img
            src={this.props.img}
            alt=""
            className={classes.image}
          />
        </div>
        <div className={classes.textContent}>
        <Typography variant="h5">{this.props.company}</Typography>
        <Typography paragraph>{this.props.description}</Typography>
        <Typography variant="h6">{this.props.technology}</Typography>
        </div>
      </div>
    );
  }
}

WorkPreview.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(WorkPreview);

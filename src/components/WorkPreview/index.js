/**
 *
 * WorkPreview
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100vw',
    [theme.breakpoints.up('md')]: {
      width: '44vw'
    },
    [theme.breakpoints.up('xl')]: {
      width: '30vw'
    },
    paddingLeft: theme.spacing.unit * 2,
  },
  imageDiv: {
    position: 'relative',
    paddingTop: '100%'
  },
  image: {
    position: 'absolute',
    left: '0',
    top: '0',
    width: '100%',
    height: 'auto'
  }
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
      </div>
    );
  }
}

WorkPreview.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(WorkPreview);

/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    cursor: 'pointer',
    border: '5px solid pink',
    display: 'inline-block',
    textTransform: 'uppercase',
    borderImage: 'linear-gradient(to left, #2e98bc 0%, #c66262 100%)',
    borderImageSlice: '1',
    borderWidth: '2px',
    padding: theme.spacing.unit * 2,
  }
});

/* eslint-disable react/prefer-stateless-function */
export class CustomButton extends React.Component {
  render() {
    const { classes } = this.props;

    return <div className={classes.root}>{this.props.children}</div>;
  }
}

CustomButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(CustomButton);

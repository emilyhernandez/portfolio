/**
 *
 * Skill
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  skillDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rating: {
    paddingLeft: theme.spacing.unit * 7,
  },
});

export class Skill extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.skillDiv}>
        <Typography className={classes.title}>{this.props.title}</Typography>
        <Typography className={classes.rating}>{this.props.rating}</Typography>
      </div>
    );
  }
}

Skill.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skill);

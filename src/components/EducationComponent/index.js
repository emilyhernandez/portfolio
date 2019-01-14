/**
 *
 * Skill
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  container: {
    margin: theme.spacing.unit * 2,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
  },
  date: {
    display: 'inline',
    fontWeight: 'bold',
  },
  padding: {
    paddingLeft: theme.spacing.unit * 2,
  },
  title: {
    fontWeight: 'bold',
  },
});

export class EducationComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.header}>
          <Typography variant="h5" className={classes.title}>
            {this.props.name}
          </Typography>
          <div className={classes.dates}>
            <Typography variant="h5" className={classes.date}>
              {this.props.startYear}
            </Typography>{' '}
            <Typography variant="h5" className={classes.date}>—</Typography>{' '}
            <Typography variant="h5" className={classes.date}>
              {this.props.endYear}
            </Typography>
          </div>
        </div>
        <Typography className={classes.padding}>{this.props.title}</Typography>
        <Typography className={classes.padding}>
          {this.props.description}
        </Typography>
      </div>
    );
  }
}

EducationComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EducationComponent);

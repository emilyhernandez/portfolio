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
    justifyContent: 'space-between',
  },
  rating: {
    marginLeft: theme.spacing.unit * 7,
  },
  star: {
    marginLeft: '2px',
    display: 'inline',
  },
});

export class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.getStars = this.getStars.bind(this);
  }

  getStars(stars) {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= stars) {
        starsArray.push(true);
      } else {
        starsArray.push(false);
      }
    }

    return starsArray;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.skillDiv}>
        <Typography className={classes.title}>{this.props.title}</Typography>
        <Typography className={classes.rating}>
          {this.getStars(this.props.rating).map(filled => {
            if (filled === true) {
              return (
                <div className={classes.star}>
                  <i class="fas fa-star" />
                </div>
              );
            } else {
              return (
                <div className={classes.star}>
                  <i class="far fa-star" />
                </div>
              );
            }
          })}
        </Typography>
      </div>
    );
  }
}

Skill.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Skill);

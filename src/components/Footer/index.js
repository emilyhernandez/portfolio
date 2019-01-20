/**
 *
 * Footer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 5,
  },

  flex: {
    maxWidth: '700px',
    margin: '0 auto',
    display: 'flex',
    paddingTop: theme.spacing.unit * 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
    },
  },
  texts: {
    textAlign: 'center',
  },
  center: {
    textAlign: 'center',
  },
});

export class Footer extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="footer" className={classes.root}>
        <Typography variant="h5" gutterBottom className={classes.center}>
          Contact me via
        </Typography>
        <div className={classes.flex}>
          <div className={classes.texts}>
            <Typography>
              <a
                href="https://www.linkedin.com/in/emily-hernandez"
              >
                LinkedIn
              </a>
            </Typography>
          </div>
          <div className={classes.texts}>
            <Typography>
              <a href="mailto:emily.hernandez@live.fi">
                emily.hernandez@live.fi
              </a>
            </Typography>
          </div>
          <div className={classes.texts}>
            <Typography>
              <a href="https://github.com/emilyhernandez">GitHub</a>
            </Typography>
          </div>
          <div className={classes.texts}>
            <Typography>
              <a href="https://www.instagram.com/emilyhrndez/">Instagram</a>
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles))(Footer);

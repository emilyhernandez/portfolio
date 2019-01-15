import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';

const styles = theme => ({
  page: {
    paddingTop: theme.spacing.unit * 8,
    margin: '0 auto',
    maxWidth: '900px' 
  },
});

export class NotFound extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.page}>
        <Typography variant="h1" gutterBottom>404 - Not Found</Typography>
        <Typography paragraph>
          Looks like this page doesn't exist. If you think this is a mistake,
          please contact emily.hernandez[at]live.fi. Thank you!
        </Typography>
      </div>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);

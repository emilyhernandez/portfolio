import React from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import WorkPreview from '../../components/WorkPreview/index';
import { workExperience } from './content';

const styles = theme => ({
  page: {
    marginTop: theme.spacing.unit * 3,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 8,
    },
  },
  introDiv: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  buttonDiv: {
    textAlign: 'center',
  },
  workList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
});

export class Work extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.page}>
        <div className={classes.introDiv}>
          <Typography variant="h1" gutterBottom>
            My work
          </Typography>
          <Typography paragraph>
            Being still a student, there isn't many projects I can share, and
            one of the few projects of my own are this website. However, as time
            goes on, I will add more projects here. There are already a few demo
            projects planned, and one (Ultrahack) already in the making but not
            yet published :) Stay tuned!
          </Typography>

          <br />
          <br />
          <br />
        </div>

        <div className={classes.workList}>
          {workExperience.map(preview => {
            return <WorkPreview {...preview} />;
          })}
        </div>

        <br />
        <br />
      </div>
    );
  }
}

Work.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles))(Work);

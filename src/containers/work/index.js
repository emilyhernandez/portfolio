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
      <div id="work" className={classes.page}>
        <div className={classes.introDiv}>
          <Typography variant="h1" gutterBottom>
            My work
          </Typography>
          <Typography paragraph>
            Being a student, I've mostly been engaged with school projects. If
            you are interested the work I've done in them or this website, you
            can head over to{' '}
            <a href="https://github.com/emilyhernandez">GitHub</a>.
          </Typography>
          <Typography paragraph>
            Outside of school I'm currently also working on a project with Ultrahack's
            platform and have some own personal projects under work, all listed
            below!
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

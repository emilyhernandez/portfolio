import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import Skill from './../../components/Skill/index';

import {
  programmingSkills,
  languageSkills,
  education,
  experience,
} from './content';
import Education from './../../components/EducationComponent/index';

const styles = theme => ({
  page: {
    height: '100%',
    width: '100%',
  },
  pictureSection: {
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,

    maxWidth: '1000px',
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto',
      paddingTop: theme.spacing.unit * 16,
      paddingBottom: theme.spacing.unit * 12,
    },
  },
  section: {
    paddingTop: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 8,
    maxWidth: '1000px',
    [theme.breakpoints.up('sm')]: {
      margin: '0 auto',
      paddingTop: theme.spacing.unit * 14,
      paddingBottom: theme.spacing.unit * 12,
    },
  },
  experienceImg: {
    background:
      "linear-gradient(rgba(245, 177, 201, 0.7), rgba(245, 177, 201, 0.7)), url('/img/camera2.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  educationImg: {
    background:
      "linear-gradient(rgba(33, 201, 243, 0.7), rgba(33, 201, 243, 0.7)), url('/img/gym.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  imageDiv: {
    position: 'relative',
    paddingBottom: '100%',
  },
  image: {
    position: 'absolute',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  skillsDiv: {
    marginBottom: theme.spacing.unit * 3,
  },
  bolded: {
    fontWeight: 'bold',
  },
  padding: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
  },
});

export class CV extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="cv" className={classes.page}>
        <div className={classes.section}>
          <Typography variant="h3" gutterBottom>
            My CV
          </Typography>
          <Typography paragraph>
            In case you want to download my CV as a PDF file, <a href="/public/documents/CV.pdf" target="_blank">click here!</a> :)
          </Typography>
          </div>
        <div className={classes.experienceImg}>
          <div className={classes.filter}>
            <div className={classes.pictureSection}>
              <Typography variant="h3" gutterBottom>
                Experience
              </Typography>
              <div className={classes.experienceDiv}>
                {experience.map(school => {
                  return <Education {...school} />;
                })}
              </div>
            </div>
          </div>
        </div>

        <div className={classes.section}>
          <Typography variant="h3" gutterBottom>
            Skills
          </Typography>

          <div className={classes.skillsContainer}>
            <div className={classes.skillsDiv}>
              <Typography variant="h5" className={classes.bolded} gutterBottom>
                Programming
              </Typography>
              {programmingSkills.map(language => {
                return (
                  <Skill title={language.title} rating={language.rating} />
                );
              })}
            </div>

            <div>
              <Typography variant="h5" className={classes.bolded} gutterBottom>
                Languages
              </Typography>
              {languageSkills.map(language => {
                return (
                  <Skill title={language.title} rating={language.rating} />
                );
              })}
            </div>
          </div>
        </div>

        <div className={classes.educationImg}>
          <div className={classes.pictureSection}>
            <Typography variant="h3" gutterBottom>
              Education
            </Typography>
            <div className={classes.educationDiv}>
              <div className={classes.informationDiv}>
                {education.map(school => {
                  return <Education {...school} />;
                })}

               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CV.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles))(CV);

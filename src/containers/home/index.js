import React from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Typography } from '@material-ui/core';
import CustomButton from './../../components/CustomButton/index';

/*
const contentful = require('contentful');

const client = contentful.createClient({
  space: 'mmfzlajfgr0g',
  accessToken:
    '4d6df67ab746b1877a1eee63da74946ce10dec59335ac47bd6f2233c2d4a02fe'
});
*/

const styles = theme => ({
  homePage: {
    height: '100%',
    width: '100%',
  },
  backgroundImg: {
    backgroundImage: "url('/img/aeroplane-aircraft-airplane-1465904.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  quoteContainer: {
    paddingTop: theme.spacing.unit * 15,
    paddingBottom: theme.spacing.unit * 15,
    margin: theme.spacing.unit * 2,
  },
  quote: {
    fontStyle: 'italic',
  },
  quoteDiv: {
    background: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7))',
    maxWidth: '450px',
    margin: '0 auto',
    textAlign: 'center',
    padding: theme.spacing.unit * 4,
  },
  textBoxDiv: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  textDiv: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 10,
  },
  buttonDiv: {
    textAlign: 'center',
  },
});

export class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div id="homepageDiv" className={classes.homePage}>
        <div className={classes.backgroundImg}>
          <div className={classes.quoteContainer}>
            <div className={classes.quoteDiv}>
              <Typography paragraph className={classes.quote}>
                "Energy flows where attention goes."
              </Typography>
              <Typography paragraph>- Serge Kahili King</Typography>
            </div>
          </div>
        </div>
        <div className={classes.textBoxDiv}>
          <div className={classes.textDiv}>
            <Typography variant="h1" gutterBottom>
              Hi there!
            </Typography>
            <Typography paragraph>
              I'm Emily Hernandez, a 22-year-old software engineering student
              currently on her third year of studies, while also working
              part-time as a front-end developer.
            </Typography>
            <Typography paragraph>
              I'm a fun-loving, energetic gal who is always
              ready to help others and try something new. (This comes from a
              friend, so it has to be be true.) I aim
              to work smart, but I don't mind getting my hands dirty, because I
              thrive from learning through trial and error.
            </Typography>
            <Typography paragraph>
              If you are a seeking for a new employee and are in a hurry, you can <a href="/documents/CV.pdf" target="_blank">download my CV</a> right now. 
              If you are just a visitor, then: Hi, how are you? In any case, 
              feel free to look around if you've got a bit more time in your hands.
            </Typography>
            <br />
            <br />
            <div className={classes.buttonDiv}>
              <CustomButton>
                <Link to="/cv">
                  <Typography>Read more</Typography>
                </Link>
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles))(Home);

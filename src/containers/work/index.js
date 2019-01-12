import React from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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
    page: {
        marginTop: theme.spacing.unit * 5,
    },
    introDiv: {
        maxWidth: '900px',
        margin: '0 auto',
    },
    buttonDiv: {
        textAlign: 'center',
    }
});

export class Home extends React.Component {
  render() {
      const { classes } = this.props;
      return (
        <div className={classes.page}>
          <div className={classes.introDiv}>
            <Typography variant="h1" gutterBottom>My work</Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos tempore odit est illo. Culpa cumque sed ratione
                        reprehenderit blanditiis, dolor sit amet consectetur adipisicing
                        elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem provident, odit id quae culpa odio natus dolorum
                        labore, ullam blanditiis saepe reiciendis expedita fugiat eligendi
          aspernatur alias dignissimos.
            </Typography>
          </div>
          <br />
          <br />
          <div className={classes.buttonDiv}>
            <CustomButton>
              <Typography>Read more</Typography>
            </CustomButton>
          </div>
        </div>
      );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Home);

import React from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import CustomButton from './../../components/CustomButton/index';

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

export class Work extends React.Component {
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

Work.propTypes = {
    classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Work);

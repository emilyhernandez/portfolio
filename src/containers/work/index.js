import React from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';
import WorkPreview from '../../components/WorkPreview/index';

const styles = theme => ({
  page: {
    marginTop: theme.spacing.unit * 3,
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing.unit * 8
    }
  },
  introDiv: {
    maxWidth: '900px',
    margin: '0 auto'
  },
  buttonDiv: {
    textAlign: 'center'
  },
  workList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
  }
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            tempore odit est illo. Culpa cumque sed ratione reprehenderit
            blanditiis, dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Exercitationem
            provident, odit id quae culpa odio natus dolorum labore, ullam
            blanditiis saepe reiciendis expedita fugiat eligendi aspernatur
            alias dignissimos.
          </Typography>

          <br />
          <br />
          <br />
        </div>

        <div className={classes.workList}>
          <WorkPreview
            img="/img/ultrahack2.jpg"
            company="Ultrahack"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellendus culpa libero suscipit praesentium quas."
            technology="React.js, Redux, MaterialUI, Contentful"
          />
          <WorkPreview
            img="/img/coffee_shop.jpeg"
            company="Coffee Shop"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nam?"
            technology="React.js, Contentful"
          />
          <WorkPreview
            img="/img/spa.jpeg"
            company="Beauty Spa"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quam in nihil minus blanditiis."
            technology="WordPress"
          />
          <WorkPreview
            img="/img/art.jpeg"
            company="Artist Portfolio"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, a! Facilis expedita eaque laudantium possimus, temporibus ex porro labore sit."
            technology="React.js, Contentful"
          />
        </div>

        <br />
        <br />
      </div>
    );
  }
}

Work.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Work);

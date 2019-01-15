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
    height: '100%',
    backgroundImage: "url('/img/aeroplane-aircraft-airplane-1465904.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
        <div className={classes.backgroundImg} />
        <div className={classes.textBoxDiv}>
          <div className={classes.textDiv}>
            <Typography variant="h1" gutterBottom>
              Hello, I'm Emily.
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos tempore odit est illo. Culpa cumque sed ratione
              reprehenderit blanditiis, dolor sit amet consectetur adipisicing
              elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem provident, odit id quae culpa odio natus dolorum
              labore, ullam blanditiis saepe reiciendis expedita fugiat eligendi
              aspernatur alias dignissimos.
            </Typography>
            <Typography paragraph>
              Magnam omnis earum quibusdam quo itaque at vitae, nihil veniam
              totam tempora, quas quia similique fuga delectus aspernatur!
              Adipisci voluptatibus sequi quaerat libero id et magnam eveniet
              obcaecati quisquam, blanditiis sit.{' '}
              <a href="/">Animi, fuga labore</a>. Cum voluptatum enim sed dolor
              ipsum, odio eaque?
            </Typography>
            <Typography paragraph>
              Id provident maiores optio nobis eius minima esse ea officiis
              obcaecati culpa a, delectus fugiat ducimus molestias perspiciatis
              nesciunt saepe eveniet harum. Illum commodi molestiae omnis ipsam
              et ad eum ut, ea provident ducimus fugiat obcaecati veritatis
              adipisci exercitationem quo porro quam tempora natus ipsum, magnam
              corporis explicabo doloremque vel voluptate. Vel nisi veniam
              accusamus?
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

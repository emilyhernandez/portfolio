import React from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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
    padding: theme.spacing.unit * 2,
    width: '100%',
  },
  backgroundImg: {
    height: '100%',
    backgroundImage: "url('/img/aeroplane-aircraft-airplane-1465904.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
});

export class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.homePage}>
        <div className={classes.backgroundImg} />
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Home);

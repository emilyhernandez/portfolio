import React from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const contentful = require('contentful');

const client = contentful.createClient({
  space: 'mmfzlajfgr0g',
  accessToken:
    '4d6df67ab746b1877a1eee63da74946ce10dec59335ac47bd6f2233c2d4a02fe'
});

const styles = theme => ({
  backgroundImg: {
    height: '100%',
    backgroundImg: 'http://www.emilyhrndez.com/img/aeroplane-aircraft-airplane-1465904.jpg',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
})

export class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <div className={classes.backgroundImg} />
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default compose(withStyles(styles))(Home)

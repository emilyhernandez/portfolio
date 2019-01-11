import React from 'react'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const contentful = require('contentful')

const client = contentful.createClient({
  space: 'mmfzlajfgr0g',
  accessToken:
    '4d6df67ab746b1877a1eee63da74946ce10dec59335ac47bd6f2233c2d4a02fe'
})

const styles = theme => ({
  backgroundImg: {
    width: '100%',
  }
})

export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      img: ''
    }
    this.updateImage = this.updateImage.bind(this)
  }

  asset = client
    .getAsset('5wDIFSGWkwA2KG2Q6Ogk2i')
    .then(asset => this.updateImage(asset.fields.file.url))

  updateImage(url) {
    this.setState(() => {
      return { img: url }
    })
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <img src={this.state.img} alt="" className={classes.backgroundImg} />
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default compose(withStyles(styles))(Home)

import React from 'react';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { Typography } from '@material-ui/core';

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
    width: '100%'
  },
  backgroundImg: {
    height: '100%',
    backgroundImage: "url('/img/aeroplane-aircraft-airplane-1465904.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  textBoxDiv: {
    maxWidth: '900px',
    margin: '0 auto'
  },
  textDiv: {
    marginTop: theme.spacing.unit * 10,
  marginBottom: theme.spacing.unit * 10,
  },
});

export class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.homePage}>
        <div className={classes.backgroundImg} />
        <div className={classes.textBoxDiv}>
          <div className={classes.textDiv}>
            <Typography variant="h1" gutterBottom>Hello, I'm Emily.</Typography>
            <Typography paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
              tempore odit est illo. Culpa cumque sed ratione reprehenderit
              blanditiis Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem provident, odit id quae culpa odio natus dolorum
              labore, ullam blanditiis saepe reiciendis expedita fugiat eligendi
              aspernatur alias dignissimos. Eius, consequuntur suscipit ipsa quos
              libero odit repudiandae eaque unde nam recusandae. Magnam omnis
              earum quibusdam quo itaque at vitae, nihil veniam totam tempora,
              fugiat error nam, quas quia similique fuga delectus aspernatur!
              Adipisci voluptatibus sequi quaerat libero id et magnam eveniet
              obcaecati quisquam, blanditiis sit, tenetur totam sapiente
              molestias, repellat perspiciatis. <a href="/">Animi, fuga labore</a>. Cum voluptatum
              enim sed dolor ipsum, molestiae quaerat odit dolorem alias rerum
              impedit illo voluptates eligendi libero, odio eaque? Id provident
              maiores optio nobis eius minima esse ea officiis obcaecati culpa a,
              quos illum incidunt, nam officia, delectus fugiat ducimus molestias
              perspiciatis nesciunt saepe eveniet harum. Illum commodi molestiae
              omnis ipsam et ad eum ut, ea provident ducimus fugiat obcaecati
              veritatis adipisci exercitationem quo porro quam tempora natus
              ipsum, magnam corporis explicabo doloremque vel voluptate. Odio
              nesciunt quas dicta, possimus laudantium ipsam nulla dolores cumque
              numquam quos. Vel nisi veniam accusamus? Vitae voluptatibus corrupti
              laudantium dolor totam nobis similique, animi alias error. Ab soluta
              laborum beatae sunt quae dolorem tenetur aspernatur totam voluptate
              reprehenderit itaque, expedita illum? Soluta nisi sit a voluptas
            eveniet quisquam ut tempora sequi officiis perspiciatis?</Typography>
            
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Home);

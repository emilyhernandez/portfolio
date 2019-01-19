/**
 *
 * Footer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
});

export class Footer extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Footer);

import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// const styles = {
//
// }

class MewBar extends Component {
    // static propTypes = {
    //     classes: PropTypes.object.isRequired
    // }
    // static defaultProps = {
    //
    // }
    render(){
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit">
                            Title
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default MewBar

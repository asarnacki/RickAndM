import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

export class Welcome extends Component {

    render() {
        return (
        <div>
            <Button variant='contained' color='primary'>
                Whaddup
            </Button>
        </div>
    )
    }

}

export default Welcome;
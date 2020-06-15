import React, { Component } from 'react';
import { Input } from '@material-ui/core';

export class Welcome extends Component {

    render() {
        return (
        <form>
            <Input placeholder='Search' inputProps={{'aria-label': 'description'}}></Input>
        </form>
    )
    }
}

export default Welcome;
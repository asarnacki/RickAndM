import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'
import ".././App.css";

class Character extends Component {
    render() {
        const { id, name, species, image, isLoading } = this.props;

        const charDetails = (

            <CardContent>
                <Typography color='textSecondary' gutterBottom>
                    {id}
                </Typography>
                <Typography variant='h5' component='h2'>
                    {name}
                </Typography>
                <CardMedia image={image} component="img" />
                <Typography variant='body2' component='p'>
                    {species}
                </Typography>
            </CardContent>
        );

        const loadingMessage = <Typography variant='body1' component='p'>Loading...</Typography>;

        return (
            <Card className='img'>
                {isLoading ? loadingMessage : charDetails}
            </Card>
        );
    }
}

Character.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    image: PropTypes.string,
    isLoading: PropTypes.bool,
};

export default Character;
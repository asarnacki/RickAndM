import React, { Component } from "react";
// import { hot } from 'react-hot-loader/root';
import Welcome from './components/welcome.jsx';
import Character from './components/character.jsx';
import Api from './api/api.jsx';
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            // isLoading: true,
            // id: null,
            // name: null,
            // image: null,
            // species: null
            data: []
        }
    }

    render() {

        return (
            <Character id={this.state.data.id} name={this.state.data.name} image={this.state.data.image} species={this.state.data.species} />
        );
    }

    componentDidMount() {
        Api.get('/1').then(res => {
            const char = res.data;
            // console.log(char.name);
            this.setState({
                // id: char.id,
                // name: char.name,
                // image: char.image,
                // species: char.species
                data: char
            });
        });
    }
}

export default App;
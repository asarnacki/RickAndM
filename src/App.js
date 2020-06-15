import React, { Component } from "react";
// import { hot } from 'react-hot-loader/root';
import Welcome from './components/welcome.jsx';
import Character from './components/character.jsx';
import Api from './api/api.jsx';
import "./App.css";
import { GridList } from "@material-ui/core";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    render() {
        const list = Object.keys(this.state.data).map((v) => (
            <Character key={this.state.data[v].id}
                id={this.state.data[v].id}
                name={this.state.data[v].name}
                image={this.state.data[v].image}
                species={this.state.data[v].species}
            />),
        );
        return (
            // <Character id={this.state.data.id} name={this.state.data.name} image={this.state.data.image} species={this.state.data.species} />
            <div>
                <Welcome></Welcome>
                <GridList>{list}</GridList>
            </div>

        );
    }

    componentDidMount() {
        Api.get('/1,2,3,4,5,6,7').then(res => {
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
import React, { Component } from 'react';
import axios from 'axios';

class MovieTest extends Component {
    
    componentDidMount(){
        // fetch('/api/movies')
        // .then(response => response.json())
        // .then(json => console.log(json))
        // .catch(error => console.log(error))
        axios.get('/api/movies')
        .then(response => console.log("response : ", response.data))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                Hello world
            </div>
        )
    }
}
export default MovieTest;
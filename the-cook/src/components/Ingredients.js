import React, { Component } from 'react'
import axios from 'axios'

const foody = "http://www.recipepuppy.com/api/"

// axios.defaults.headers.common['Origin'] = 'http://localhost:3000'

class Ingredients extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: [],
        }
    }
    

    componentDidMount() {
        axios.get("foody")
        .then(responce => {
            this.setState({info: responce.data.results});
            // console.log(this.state.info)
        })
        .catch(error => {console.log(error)})
    }

    render() {
        console.log(this.state.info)
        return (
            <div>
                
                Can you see this?


            </div>
        )
    }
}

export default Ingredients
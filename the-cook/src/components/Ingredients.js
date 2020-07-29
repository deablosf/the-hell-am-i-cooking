import React, { Component } from 'react'
import axios from 'axios'

const foody = "http://www.recipepuppy.com/api/?i="

// axios.defaults.headers.common['Origin'] = 'http://localhost:3000'

class Ingredients extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: [],
            searchBar: "",
            formCompleted: false,
        }

    }
    

    componentDidMount() {
        axios.get(foody)
        .then(response => {
            this.setState({info: response.data.results});
            // console.log(this.state.info)
        })
        .catch(error => {console.log(error)})
    }

    onSearchChange = (event) => {
        this.setState({searchBar: event.target.value});
    }

    render() {
        let a = this.state.searchBar.split(" ").join("") + "&p=2"
        let b = "http://www.recipepuppy.com/api/?i=" + a
        console.log(this.state.info)
        return (
            <div>
                <h3>Lets see what we have to work with</h3>
                <form>
                    <input type="text" placeholder="onion,pepper,tomato" onChange={this.onSearchChange}  />
                    <div> {a} </div>
                    <div> {b} </div>

                    <button>Enter</button>
                </form>

                {
                    this.state.info.map(foods => {
                        return (
                            <div>
                                <h2> {foods.title} </h2>
                                <img src={foods.thumbnail}/>
                                <h3> Ingredents: {foods.ingredients} </h3>
                                <h4> {foods.href} </h4>
                            </div>
                        )
                    })
                }


            </div>
        )
    }
}

export default Ingredients
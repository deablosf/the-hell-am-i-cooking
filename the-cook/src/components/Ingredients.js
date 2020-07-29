import React, { Component } from 'react'
import axios from 'axios'

let foody = "http://www.recipepuppy.com/api/?i="
let searching = ""
// axios.defaults.headers.common['Origin'] = 'http://localhost:3000'

class Ingredients extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: [],
            searchBar: "",
            newSearch: "",
            formCompleted: false,
        }

    }
    

    // componentDidMount() {
    //     axios.get(foody)
    //     .then(response => {
    //         this.setState({info: response.data.results});
    //         // console.log(this.state.info)
    //     })
    //     .catch(error => {console.log(error)})
    // }

    onSearchChange = (event) => {
        this.setState({searchBar: event.target.value});
    }

    searchForRecipes = (event) =>{
        event.preventDefault()
        foody = searching
        axios.get(foody)
        .then(response => {
            this.setState({info: response.data.results});
        })
        .catch(error => {console.log(error)})
    } 

    render() {
        let seaching = "http://www.recipepuppy.com/api/?i=" + this.state.searchBar.split(" ").join("") + "&p=2"
        return (
            <div>
                <h3>Lets see what we have to work with</h3>
                <form>
                    <input type="text" placeholder="onion,pepper,tomato" onChange={this.onSearchChange}  />
                    <div> {seaching} </div>
                    

                    <button onClick={this.searchForRecipes}>Enter</button>
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
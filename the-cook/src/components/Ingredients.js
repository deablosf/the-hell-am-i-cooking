import React, { Component } from 'react'
import axios from 'axios'

let foody = "http://www.recipepuppy.com/api/?i="

class Ingredients extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: [],
            searchBar: "",
            searchHistory: [],
            formCompleted: false,
        }

    }

    onSearchChange = (event) => {
        this.setState({searchBar: "http://www.recipepuppy.com/api/?i=" + event.target.value.split(" ").join("") + "&p=2"});
    }

    searchForRecipes = (event) =>{
        event.preventDefault()
        axios.get(this.state.searchBar)
        .then(response => {
            this.setState({info: response.data.results});
        })
        .catch(error => {console.log(error)})
    } 

    render() {
        let seaching = this.state.searchBar.split(" ").join("") + "&p=2"
        return (
            <div className="mainSearch">
                <h2>So ... What are we working with?</h2>
                <form>
                    <label> By Ingredents: </label>
                    <input className="searchBar" type="text" placeholder="onion, pepper, tomato, no plurals" onChange={this.onSearchChange}  />
                    <div> Commas, between, items {seaching} </div>
                    

                    <button onClick={this.searchForRecipes}>Spin the Wheel Raggedy Man</button>
                </form>

                {
                    this.state.info.map(foods => {
                        return (
                            <div>
                                <a href={foods.href}> <img src={foods.thumbnail}/> </a>
                                
                                <h2> <a href={foods.href}>{foods.title}</a> </h2>
                                
                                <h3> Ingredents: {foods.ingredients} </h3>
                            </div>
                        )
                    })
                }


            </div>
        )
    }
}

export default Ingredients
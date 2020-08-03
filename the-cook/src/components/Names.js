import React, { Component } from 'react'
import axios from 'axios'

let foody = "http://www.recipepuppy.com/api/?q="

class Names extends Component {
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
        this.setState({searchBar: "http://www.recipepuppy.com/api/?q=" + event.target.value.split(" ").join("") + "&p=2"});
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
                <h2>What's NOODLING around the old Grey Matter?!</h2>
                <form>
                    <label>By Dish: </label>
                    <input className="searchBar" type="text" placeholder="Omelet, pancake or stew even!" onChange={this.onSearchChange}  />
                    <div> One Name at a time Please</div>
                    

                    <button onClick={this.searchForRecipes}>Give me Somehting Tasty</button>
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

export default Names
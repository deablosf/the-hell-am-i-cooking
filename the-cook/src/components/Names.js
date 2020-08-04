import React, { Component } from 'react'
import axios from 'axios'


class Names extends Component {
    constructor(props) {
        super(props)

        this.state = {
            info: [],
            info2: [],
            info3: [],
            searchBar: "",
            searchBar2: "",
            searchBar3: "",
            searchHistory: [],
            formCompleted: false,
        }

    }

    onSearchChange = (event) => {
        this.setState({searchBar: "http://www.recipepuppy.com/api/?q=" + event.target.value.split(" ").join("") + "&p=2"});
        this.setState({searchBar2: "http://www.recipepuppy.com/api/?q=" + event.target.value.split(" ").join("") + "&p=3"});
        this.setState({searchBar3: "http://www.recipepuppy.com/api/?q=" + event.target.value.split(" ").join("") + "&p=4"});
    }

    searchForRecipes = (event) =>{
        event.preventDefault()
        axios.get(this.state.searchBar)
        .then(response => {
            this.setState({info: response.data.results});
        })
        axios.get(this.state.searchBar2)
        .then(response => {
            this.setState({info2: response.data.results});
        })
        axios.get(this.state.searchBar3)
        .then(response => {
            this.setState({info3: response.data.results});
        })
        .catch(error => {console.log(error)})
    } 

    // nextPage(event) {
    //     this.setState({page: this.state.page +1});
    //   }
      
    //   previousPage(event) {
    //     this.setState({page: this.state.page -1});
    //   }

    render() {
        return (
            <div className="mainSearch">
                <h2>What's NOODLING around the old Grey Matter?!</h2>
                <form>
                    <label>By Dish: </label>
                    <input className="searchBar" type="text" placeholder="Omelet, pancake or stew even!" onChange={this.onSearchChange}  />
                    <div> One Name at a time Please </div>
                    

                    <button onClick={this.searchForRecipes}>Give me Somehting Tasty</button>
                </form>

                {
                    this.state.info.map(foods => {
                        return (
                            <div className="fullReadOut">
                                <a href={foods.href}> <img src={foods.thumbnail}/> </a>
                                
                                <div className="details">
                                    <h2 className="foodTitles"> <a className="foodNames" href={foods.href}>{foods.title}</a> </h2>
                                    
                                    <h3 className="ingred"> Ingredents: {foods.ingredients} </h3>
                                </div>

                            </div>
                        )
                    })
                }
                
                {
                    this.state.info2.map(foods => {
                        return (
                            <div className="fullReadOut">
                                <a href={foods.href}> <img src={foods.thumbnail}/> </a>
                                
                                <div className="details">
                                    <h2 className="foodTitles"> <a className="foodNames" href={foods.href}>{foods.title}</a> </h2>
                                    
                                    <h3 className="ingred"> Ingredents: {foods.ingredients} </h3>
                                </div>

                            </div>
                        )
                    })
                }

                {
                    this.state.info3.map(foods => {
                        return (
                            <div className="fullReadOut">
                                <a href={foods.href}> <img src={foods.thumbnail}/> </a>
                                
                                <div className="details">
                                    <h2 className="foodTitles"> <a className="foodNames" href={foods.href}>{foods.title}</a> </h2>
                                    
                                    <h3 className="ingred"> Ingredents: {foods.ingredients} </h3>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Names
import React, { Component } from 'react'
import axios from 'axios'

let foody = "http://www.recipepuppy.com/api/?i="

class Buttons extends Component {
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
                <h2>Pick Your Poisons</h2>
                <form>
                    <label> By Commity: </label>
                    <div className="meats">
                        <input type="checkbox" value="chicken," onChange={this.onSearchChange}/>
                        <input type="checkbox" value="beef," onChange={this.onSearchChange}/>
                        <input type="checkbox" value="rib," onChange={this.onSearchChange}/>
                        <input type="checkbox" value="ham," onChange={this.onSearchChange}/>
                    </div>

                    <div className="veg1">
                        <input type="checkbox" value="lettuce," onChange={this.onSearchChange}/>
                        <input type="checkbox" value="tomato," onChange={this.onSearchChange}/>
                        <input type="checkbox" value="pepper," onChange={this.onSearchChange}/>
                        <input type="checkbox" value="onion," onChange={this.onSearchChange}/>
                    </div>

                    <div className="veg2">
                        <input type="checkbox" value="jalapeno," onChange={this.onSearchChange}/>
                        <input type="checkbox" value="broccoli," onChange={this.onSearchChange}/>
                        <input type="checkbox" value="corn," onChange={this.onSearchChange}/>
                        <input type="checkbox" value="spinach," onChange={this.onSearchChange}/>
                    </div>
                        
                    
                    <div> Commas, between, items {seaching} </div>
                    

                    <button onClick={this.searchForRecipes}>Yummy Yummy Yummy</button>
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

export default Buttons
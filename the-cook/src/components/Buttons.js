import React, { Component, useState } from 'react'
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
        this.setState({searchBar: "http://www.recipepuppy.com/api/?i=" + event.target.value + "&p=2"});

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
        return (
            <div className="mainSearch">
                <h2>Pick Your Poisons</h2>
                <form className="form">
                    <div className="meats">
                        <h4>Meat</h4>
                        <input id="chicken" type="checkbox" value="chicken," onChange={this.onSearchChange}/>
                        <label for="chicken"> Chicken</label>
                        <input id="beef" type="checkbox" value="beef," onChange={this.onSearchChange}/>
                        <label for="beef"> Beef</label>
                        <input id="rib" type="checkbox" value="rib," onChange={this.onSearchChange}/>
                        <label for="rib"> Ribs</label>
                        <input id="ham" type="checkbox" value="ham," onChange={this.onSearchChange}/>
                        <label for="ham">Ham</label>
                    </div>

                    <div className="veg1">
                        <h4>Veg</h4>
                        <input id="lettuce" type="checkbox" value="lettuce," onChange={this.onSearchChange}/>
                        <label for="lettuce"> Lettuce</label>
                        <input id="tomato" type="checkbox" value="tomato," onChange={this.onSearchChange}/>
                        <label for="tomato"> Tomato</label>
                        <input id="pepper" type="checkbox" value="pepper," onChange={this.onSearchChange}/>
                        <label for="pepper"> Pepper</label>
                        <input id="onion" type="checkbox" value="onion," onChange={this.onSearchChange}/>
                        <label for="onion"> Onion</label>
                    </div>

                    <div className="veg2">
                    
                        <input id="jalapeno" type="checkbox" value="jalapeno," onChange={this.onSearchChange}/>
                        <label for="jalapeno"> Jalapeno</label>
                        <input id="broccoli" type="checkbox" value="broccoli," onChange={this.onSearchChange}/>
                        <label for="broccoli"> Broccoli</label>
                        <input id="corn" type="checkbox" value="corn," onChange={this.onSearchChange}/>
                        <label for="corn"> Corn</label>
                        <input id="spinach" type="checkbox" value="spinach," onChange={this.onSearchChange}/>
                        <label for="spinach"> Spinach</label>
                    </div>
                        
                    <div className="fruit1">
                        <h4>Fruit</h4>
                        <input id="grape" type="checkbox" value="grape," onChange={this.onSearchChange}/>
                        <label for="grape"> Grape</label>
                        <input id="apple" type="checkbox" value="apple," onChange={this.onSearchChange}/>
                        <label for="apple"> Apple</label>
                        <input id="banana" type="checkbox" value="banana," onChange={this.onSearchChange}/>
                        <label for="banana"> Banana</label>
                        <input id="peach" type="checkbox" value="peach," onChange={this.onSearchChange}/>
                        <label for="peach"> Peach</label>
                    </div>

                    <div className="fruit2">
                       
                        <input id="pear" type="checkbox" value="pear," onChange={this.onSearchChange}/>
                        <label for="pear"> Pear</label>
                        <input id="orange" type="checkbox" value="orange," onChange={this.onSearchChange}/>
                        <label for="orange"> Orange</label>
                        <input id="kiwi" type="checkbox" value="kiwi," onChange={this.onSearchChange}/>
                        <label for="kiwi"> Kiwi</label>
                        <input id="pinapple" type="checkbox" value="pinapple," onChange={this.onSearchChange}/>
                        <label for="pinapple"> Pinapple</label>
                    </div>
                    

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
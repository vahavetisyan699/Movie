import React, { Component } from 'react'

export default class SearchInput extends Component {
    constructor (props){
        super(props)

        this.state = {
            movieName: ''
        }

        this.changeInputValue = this.changeInputValue.bind(this)
    }
    changeInputValue( e ){
        this.setState({
            movieName: e.target.value
        })
    }
    render() {
        return (
            <div className = 'searchBar'>
                <input className = 'searchInput' onInput = {this.changeInputValue} type="search" />
                <button className = 'searchBtn' onClick = {()=>this.props.searchMovie(this.state.movieName)}>Search</button>
            </div> 
        )
    }
}

import React,{ Component } from "react";
import "./Search.scss"

import Poisk from '../images/poisk.svg'
import Vector from '../images/vector.png'

class Search extends Component{
    render(){
        return(
            <div className="search container">
                <div className="search-flag">
                    <div><img src={Poisk} alt="poisk" /></div>
                    <p>Search for a country…</p>
                </div>
                <div className="parent">
                    <div className="deded">Filter by Region</div>
                    <div><img src={Vector} alt="vector" /></div>
                </div>
            </div>
        )
    }
}
export default Search
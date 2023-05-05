import React,{ Component } from "react";
import "./Search.scss"

import Poisk from '../images/poisk.svg'
import Vector from '../images/vector.png'

class Search extends Component{

    constructor(props){
        super(props)
        this.state = {
            input:'',
        }
    }

    onInput = e => {
		this.setState(() => {
			return {
				input: e.target.value,
			}
		})
		this.props.getName(this.state.input)
	}


    render(){
        return(
            <div className="search container">
                <div className="search-flag">
                    <div className="image"><img src={Poisk} alt="poisk" /></div>
                    <input className="inp" 
                    type="text"
                      placeholder="Search  for  a  country"
                      onInput={this.onInput}
                      />
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
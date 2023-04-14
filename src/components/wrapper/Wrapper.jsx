import { Component } from "react";
import moons from '../images/moon.png'

import "./Wrapper.scss"

class wrapper extends Component{
    render(){
        return(
            <div className="wrapper container">
                <div className="world">Where in the world?</div>
                <div className="left">
                    <div className="icon"><img src={moons} alt="" /></div>
                    <div className="color">Dark node</div>
                </div>
            </div>
        )
    }
}

export default wrapper
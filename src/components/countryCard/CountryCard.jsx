import { Component } from "react";
import styles from './CountryCard.module.scss'


class CountryCard extends Component{
    render(){
        return(
            <div className={styles.country}>
                <img src={this.props.flagImg} alt="flag"/>
                <h1>{this.props.country}</h1>
                <p>Population:<span>{this.props.population}</span></p>
                <p>Region:<span>{this.props.region}</span></p>
                <p>Capital:<span>{this.props.capital}</span></p>
            </div>
        )
    }
}

export default CountryCard
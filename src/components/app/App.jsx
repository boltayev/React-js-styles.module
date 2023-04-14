import React,{ Component } from "react";
import styles from './App.module.scss'

import Wrapper from "../wrapper/Wrapper";
import Search from "../search/Search";
import CountryCard from "../countryCard/CountryCard";

import flagGr from '../images/Germany.png'
import flagUsa from '../images/America.png'
import flagBr from '../images/brazil.png'
import flagEuro from '../images/europe.png'
import flagAzia from '../images/azia.png'
import flagEuro2 from '../images/europe.png'
import flagAlbaniy from '../images/albaniya.png'
import flagAfrica from '../images/africa.png'

class App extends Component{
    render(){
        return(
            <div>
                <Wrapper></Wrapper>
                <Search></Search>
                <div className={styles.container}>
                    <CountryCard
                    country={"Germany"}
                    flagImg={flagGr}
                    population={"81.770.900"}
                    region={'Evropa'}
                    capital={"Berlin"} 
                 />
                 <CountryCard
                    country={"United States of America"}
                    flagImg={flagUsa}
                    population={"323.947.000"}
                    capital={"Washington.D.C"} 
                    region={'Americas'}
                 />
                 <CountryCard
                    country={"Brazil"}
                    flagImg={flagBr}
                    population={"206.135.843"}
                    capital={"Brasila"} 
                    region={'Americas'}
                 />
                 <CountryCard
                    country={"Iceland"}
                    flagImg={flagEuro}
                    population={"334.300"}
                    capital={"Reikyavik"} 
                    region={'Evropa'}
                 />
                 <CountryCard
                    country={"Afghanistan"}
                    flagImg={flagAzia}
                    population={"245.736.900"}
                    capital={"Kabul"} 
                    region={'Asiya'}
                 />
                 <CountryCard
                    country={"Åland Islands"}
                    flagImg={flagEuro2}
                    population={"28.875"}
                    capital={"Merihham"} 
                    region={'Evropa'}
                 />
                 
                 <CountryCard
                    country={"Albania"}
                    flagImg={flagAlbaniy}
                    population={"2.637.979"}
                    capital={"Tirana"} 
                    region={'Evropa'}
                 />
                 <CountryCard
                    country={"Algeria"}
                    flagImg={flagAfrica}
                    population={"400,300.982"}
                    capital={"Berlin"} 
                    region={'Africa'}
                 />
                </div>
            </div>
        )
    }
}

export default App
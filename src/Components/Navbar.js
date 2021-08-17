import React, {useState} from 'react'
import Searchbar from './Searchbar'
import './general.css'

function Navbar(props){
    const [f, setF] = useState(false)

    return(
        <div>
            <nav className = 'navbar'>
                <h1 className = 'h1'>Weather App</h1>
                <Searchbar f = {f} changeData = {props.changeData} changeLocation = {props.changeLocation}/>
                <button className = 'changeF' onClick = {() => {setF(!f)}}>
                {f ? 'Celsius' : 'Fahrenheit'}
                </button>
            </nav>
        </div>
    )
}

export default Navbar
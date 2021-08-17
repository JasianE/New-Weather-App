import React, {useState} from 'react'
import receiveData from '../Logic/receiveData'

function Searchbar(props){
    const [city, setCity] = useState('')

    function handleChange(e){
        const {name,value} = e.target
        setCity(value)
    }
    //Receives weather data from openweathermap using receiveData and then passes it back to navbar, which passes it back to overlay, which gives it to
    //Weather display
    async function handleSubmit(){
        //Regex that checks if every character is a character 
        let reg = /^[a-zA-Z]+$/;
        if(!city || !reg.test(city)){
            alert('Please Put In An Actual Value.')
            return false
        }
        //DataC is data with celsius measurements
        const DataC = await receiveData(city)
        
        //'bah' is an abritrary code to denote failure because idk
        if(DataC === 'bah'){
            return false
        }
        props.changeLocation(city.charAt(0).toUpperCase() + city.slice(1))
        setCity('')
        //DataF is made by mapping through DataC and changing celsius to fahrenheit
        const DataF = DataC.map((key) => {
            let newKey = Object.assign({}, key)
            newKey.min = key.min * 9/5 + 32;
            newKey.max = key.max * 9/5 + 32;
            return newKey
        })
        //Determiens which value to return dependent on the mode given by navbar which is determined by a booutin
        const Data = props.f ? DataF : DataC

        props.changeData(Data)
    }

    return(
        <div className = 'easyFit'>
            <form>
                <input 
                type = 'text'
                name = 'cityName'
                className = 'input'
                value = {city}
                placeholder = 'Enter a city'
                onChange = {handleChange}
                />
            </form>
            <button className = 'borgir' onClick = {handleSubmit}>Search</button>
        </div>
    )
}

export default Searchbar
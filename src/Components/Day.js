import React from 'react'
import findCode from '../Logic/findCode'

function Day(props){
    //Easy fix very stupid
    const DayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',][new Date().getDay() + props.number]
    return(
        <div className = 'center'>
            <h2 className = 'dayName'>{DayName}</h2>
            <img className = 'img'src = {`http://openweathermap.org/img/wn/${findCode(props.data.weather)}@2x.png`} alt= {props.weather}></img>
            <div className = 'flex'>
                <h2 className = 'text'>{props.data.max}</h2>
                <h2 className = 'text grey'>{props.data.min}</h2>
            </div>
        </div>
    )
}

export default Day
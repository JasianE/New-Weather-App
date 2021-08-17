import React from 'react'

function Main(props){
    const Weather = props.data ? props.data.weather : false;
    
    return(
        <div>
            <div className = 'left'>
                <h1 className = 'big'>{props.location}</h1>
                <h2 className = 'sub'>{Weather}</h2>
                <h1 className = 'weather'>{Weather ? props.data.max : 'wait'}°</h1>
            </div>
        </div>
    )
}

export default Main
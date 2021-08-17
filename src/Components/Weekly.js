import React from 'react'
import Main from './Main'
import Day from './Day'

function Weekly(props){
    let i = 0;
    let week = [...props.data]
    week.shift()

    return(
        <div>
            <Main data = {props.data[0]} location = {props.location}/>
            <div className = 'weekly'>
                {week.map((key) => {
                    i++
                    return(<Day data = {key} key = {i} number = {i}/>)
                })
                }
            </div>
        </div>
    )
}

export default Weekly
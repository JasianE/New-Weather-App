async function receiveData(location){
    const PREresponseRAW = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${location}&cnt=1&appid=1bd5688c3ad352b06b2fc5307e361f80`,{mode: 'cors',})
    const PREresponse = await PREresponseRAW.json()
    let cont = await PREresponse.cod === '400' || PREresponse.list.length === 0 ? false : true;
    if(cont){
        let cords = PREresponse.list[0].coord
    
        const responseRAW = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${cords.lat}&lon=${cords.lon}&exclude=minutely,alerts,hourly,current&appid=1bd5688c3ad352b06b2fc5307e361f80`, {mode: 'cors',})
        const response = await responseRAW.json()
        
        const relaventData = response.daily.map((key) => { 
            return {min: Math.floor(key.temp.min - 273.5), max: Math.floor(key.temp.max - 273.5), weather: key.weather[0].main}
        })
        return relaventData
    }
    
    return 'bah'
}

export default receiveData
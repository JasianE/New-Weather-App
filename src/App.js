import './App.css';
import Navbar from './Components/Navbar'
import Weekly from './Components/Weekly'
import ReceiveData from './Logic/receiveData'
import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([])
  const [location, setLocation] = useState('Toronto')

  useEffect(() => {
    ReceiveData('Toronto').then((result) => {setData(result)})
  }, [])

  function changeData(newData){
    setData(newData)
  }
  function changeLocation(e){
    setLocation(e)
  }
  return (
    <div className="App">
      <Navbar changeData = {changeData} changeLocation = {changeLocation}/>
      <Weekly data = {data} location = {location}/>
      <footer className = 'footer'> h</footer>
    </div>
  );
}

export default App;

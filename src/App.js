import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const TemperatureColor = {
  Hot: '#d92808',
  Warm: '#f5d3285',
  Tepid: '#70bf40',
  Chilly: '#50a7f9',
  Cold: '#0432ff',
}
function App() {

  const [temperature, setTemperature] = useState(15);
  const [backgroundColor, setBackgroundColor] = useState(TemperatureColor.Tepid);


  useEffect (() => {
    setBackgroundColor(getTemperatureColor(temperature)); 
      document.body.style.background = backgroundColor;
    }, [temperature, backgroundColor])

  function getTemperatureColor(temp){
    return  temp >= 35 ? TemperatureColor.Hot
           : temp >= 25 ? TemperatureColor.Warm
           : temp >= 15 ? TemperatureColor.Tepid
           : temp >= 8 ? TemperatureColor.Chilly
           : TemperatureColor.Cold;
  }

  function increaseTemperature() {
    setTemperature(temperature + 7);
  }
  
  function decreaseTemperature() {
    setTemperature(temperature - 7);
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        You will build a temperature control app where users can increment/decrement temperature and the background color changes based on temperature.
        </p>

        <p>
          Temperature is now {temperature} degree celcius
        </p>

        <button onClick={increaseTemperature}>Increase</button>
        <button onClick={decreaseTemperature}>Decrease</button>

      </header>

    </div>

  );



  
}

export default App;

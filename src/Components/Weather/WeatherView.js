import { useState } from "react";

function CelciusView(props)
{
    function onChange(e)
    {
        //e.target.value;
        props.updateTemperature(e.target.value);
        console.log(e.target.value);
    }
    const element = 
    (
        <div> 
            Enter temp in Celsius
            <input onChange={onChange} />

        </div>
    )
    
    return element;
}
function BoilingVerdit(props)
{
    console.log("boiling..." + props.temperature)
    
    const element = 
    (   
        <div>
            {
                props.temperature>100 
                    ? <div style={{color:'red'}}> boil </div>
                    : <div style={{color:'blue'}}> cool </div>
            }            
        </div>
    )
    return element;
}

function TemperatureInput(props)
{
    function onChange(e)
    {
        //e.target.value;
        props.updateTemperature(e.target.value);
        console.log(e.target.value);
    }
    const element = 
    (
        <div>
            <label> Input Temperature in {props.temperatureType == 'c' ? 'Celcicus' : 'Faharenhit'} : </label>
            <input onChange={onChange} />
        </div>
    )
    return (element);

}

function coverrtToCelcius(number, type)
{
    if (type == 'c') { return number }
    else { return ((number * 1.8) + 32) }
}

function WeatherView()
{
    const[temperature, setTemperature] = useState();
    const[temperatureType, setTemperatureType] = useState('c');
    const element = (
        <div> 
            <h1> Weather App </h1>
            {/* <CelciusView updateTemperature={setTemperature}  /> */}
            <TemperatureInput temperatureType='c'  />
            <TemperatureInput temperatureType='f' />
            <BoilingVerdit temperature={temperature} />
        </div>
    )
    
    return (element)

}
export default WeatherView;
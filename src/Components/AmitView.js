import React, { useEffect, useState } from "react";
import TickingClock from "./TickingClock";

function AmitView()
{
    let textInput = React.createRef();

    function handleSubmit(e) 
    {
        SetColor(textInput.current.value);
        console.log('You clicked submit.' + textInput.current.value);
    }
    const [color,SetColor] = useState('orange');   
    
    const element =  
    (
        <div>
            <h1> hello amit view</h1>
            <label> Pick color for clock: </label>
            <input type="text" ref={textInput}   />
            <button onClick={() => handleSubmit()}> ChangeColor</button>

            <TickingClock color={color} /> 
            <TickingClock color="blue" />            
            <TickingClock />
        </div>        
    )   

    return( element )
}
export default AmitView;


// *************************
// import { useEffect, useState } from "react";

// function AmitView()
// {
//     const [time, setTime] = useState(new Date().toLocaleTimeString());
//     const element =  
//     (
//         <div>
//             <h1> hello amit view</h1>
//             <p> time is: <b style={{color:'red'}}> {time} </b></p>  
//             {console.log(time)}         
//         </div>        
//     )
    
//     let interval;
//     useEffect(() => 
//     {
//         interval = setInterval(() => 
//         {
//             setTime(new Date().toLocaleTimeString());
//         }, 1000);
//         return () => 
//         {
//             if (interval)
//             {
//                 clearInterval(interval);
//             }
//         }
//     },[])

//     return( element )
// }
// export default AmitView;
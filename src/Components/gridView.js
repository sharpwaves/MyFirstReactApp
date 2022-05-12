import React, { useEffect, useState } from "react";

function GridView () {

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const element = () => ( 
        <div>
            <h1>Hello, world!aa</h1>
            <p> test <b style={{color:'red'}}> {time} </b>  test </p>
        </div>    
    );
    let interval;
    useEffect(() => {
        interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => {
            if (interval){
                clearInterval(interval);
            }

        }


    },[])

return (
    element()
);
}
export default GridView;
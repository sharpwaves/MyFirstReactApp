import { useEffect, useState } from "react";

function TickingClock(props) 
{
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    let customColor = 'brown';
    if (props.color) 
    {
        customColor = props.color;
    }

    const element =
        (
            <div>
                <div style={{ color: customColor }}> clock: {time}</div>
                {console.log(time)}
            </div>
        )
    let interval;
    useEffect(() => 
    {
        interval = setInterval(() => 
        {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => 
        {
            if (interval) 
            {
                clearInterval(interval);
            }
        }

    }, [])
    return (element);

}
export default TickingClock;
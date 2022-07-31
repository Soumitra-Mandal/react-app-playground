import {useState, useEffect} from 'react';
export const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    useEffect(()=>{
        setTimeout(()=>{
            setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'}));
        },1000);
    }
    );
    return ( 
    <div id = 'time'>
    {time}
    </div>
    )
}
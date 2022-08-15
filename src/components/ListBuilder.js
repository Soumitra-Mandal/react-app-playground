import React from 'react';

export const ListBuilder = (props) =>{
    let data  = props.data;
    const list = data.map(item => <li key={Math.floor(10*Math.random())}>{item}</li>);
    return (<ul>
        {list}
    </ul>);
}

import React from 'react';


function Wrapper(props){
    const divstyle ={
        border : '2px solid black',
        padding : 16,
        width : 500
  
    }
    console.log(props.name);
    return <div style = {divstyle}></div>;
}

export default Wrapper;
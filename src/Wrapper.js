import React from 'react';


function Wrapper({children}){
    const divstyle ={
        border : '2px solid black',
        padding : 16,
        width : 500
  
    }
    //console.log(props.name);
    return <div style = {divstyle}>{children}</div>;
}

export default Wrapper;
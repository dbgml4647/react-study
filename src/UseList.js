import React from 'react';

function User(props){
    return (
    <div>
        <b>{user.name}</b>
        <span>{user.email}</span>    
    </div>
    )
}



function UserList(){

   

    return (
        <div>
            <User user = {users[0]}/>
            <User user = {users[1]}/>
            <User user = {users[2]}/>
        </div>
    )
}





export default UserList;


import React from 'react';

function User({ user}){
    return (
    <div>
        <b>{user.name}</b>
        <span>{user.email}</span>    
    </div>
    )
}



function UserList(){

    const users = [
        {
            id :1,
            name : "Yuhee", 
            email : "dbml4647@naver.com"
        },

        {
            id : 2, 
            name : "tester",
            email : "tester@example.com"
        },

        {
            id : 3, 
            name : "tester2",
            email : 'tester2@example.com'
        }

    ];


    return (
        <div>
            <User user = {users[0]}/>
            <User user = {users[1]}/>
            <User user = {users[2]}/>
        </div>
    )
}





export default UserList;


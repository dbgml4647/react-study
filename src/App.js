import React, { useRef, useState } from 'react';
//여러개의 인 풋 값을 관리할 떄는 useState을 사용한다
import Hello from './Hello';
import InputSample from './InputSample';
import Wrapper from './Wrapper';
import Counter from './Counter';
import UserList from './UseList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
      username : '',
      email : '',
    
  });

  const {username, email } = input;
  const onChange = e => {
    const {name, value} = e.target;

    setInputs({
      ...inputs,
      [name] : value

    });


  }


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

  const nextId = useRef(4); //이 값이 바뀐다고 해서 rerendering 할 필요가 없다, 그래서 그냥 변수로 관리한다
  const onCreate = () =>
  {

    console.log(nextId.current);//띠용

    nextId.current += 1;

  }


  return ( 
    <>
   <CreateUser/>
    <UserList users={users}/>
  
    </>
  );
}

export default App;

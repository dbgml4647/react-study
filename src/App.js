import React from 'react';
import Hello from './Hello';
import InputSample from './InputSample';
import Wrapper from './Wrapper';


function App() {
 
  return (
    <Wrapper name = "너는 누구냐">
      <Hello name="유희짱" isSpecial= {true}/>
      <Hello name="나는 거짓말이지롱"/>
    </Wrapper>
  );
}
//안녕
export default App;

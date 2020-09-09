import React from 'react';
import Hello from './Hello';
import InputSample from './InputSample';
import Wrapper from './Wrapper';


function App() {
 
  return (
    <Wrapper name = "너는 누구냐">
      <Hello name="유희짱"/>
      <Hello name="새로운 손님분, 안녕하세요"/>
    </Wrapper>
  );
}
//안녕
export default App;

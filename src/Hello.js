import React from 'react';
function Hello({name, isSpecial}){

    //조건부 렌더링 하는 법 1. 삼항연산자 사용하기 2. && 연산자 사용하기
    return <div>안녕하세요! {isSpecial ? <b>******</b> : name}</div>;

}

Hello.defaultProps = {

    name : '아무도업음 '


};



export default Hello;
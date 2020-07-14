import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
background: #9bc9c0;

>.output{
display: flex;
flex-direction: row-reverse;
font-size: 20px;
background: #ffffff;
border-radius: 5px;
line-height: 24px;
width: 80vw;
padding: 10px 10px;
margin: 20px 34px;
box-shadow: inset 0 0 3px rgba(0,0,0,0.25);
}
>.numberList{
width: 80vw;
margin: 10px 20px;
max-width: 310px;
min-height: 202px;
>button{
font-size: 20px;
border: none;
margin: 10px 10px;
width: 50px;
height: 30px;
border-radius: 5px;
background: #ffffff;
outline: none;

}
>.success{
background: rgb(255, 199, 0);
}
}
`;


const NumberSection: React.FC = () => {
  const [output, setOutput] = useState("0");
  const onUpdate = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    switch (text) {
      case"0":
      case"1":
      case"2":
      case"3":
      case"4":
      case"5":
      case"6":
      case"7":
      case"8":
      case"9":
        if (output === "0") {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case".":
        if (output.indexOf(".") >= 0) {
          return;
        } else {
          setOutput(output + ".");
        }
        break;
      case"+":
        setOutput(output+text)
        break;
      case"-":
        setOutput(output+text)
        break;
      case"今日":
        const timeAt = new Date()
        console.log(timeAt);
        break;
      case"清零":
        setOutput("0");
        break;
      case"完成":
        console.log(output);
        const x = (new Function('return ' + output))()
        console.log(x);
        setOutput('0')
        break;
      default:
        return '0'
    }
  };
  return (
    <Wrapper>
      <div className='output'>{output}</div>
      <div className='numberList' onClick={onUpdate}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>今日</button>
        <button>.</button>
        <button>0</button>
        <button>清零</button>
        <button className='success'>完成</button>
      </div>
    </Wrapper>);
};
export {NumberSection};
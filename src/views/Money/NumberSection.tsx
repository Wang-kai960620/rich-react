import styled from "styled-components";
import React, {useState} from "react";
import {generateOutput} from "./generateOutput";

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

type Props = {
  value: number
  onChange: (amount: number) => void
  onSave?: () => void
}

const NumberSection: React.FC<Props> = (props) => {
  const [output,setOutput] = useState(props.value.toString())
  const _setOutput = (output: string) => {
      let value: string;
      if (output.length > 16) {
        value = output.slice(0, 16);
      } else if (output.length === 0) {
        value = '0';
      } else if(output.indexOf('+')>0){
        value = '0'
      }else{
        value =output;
      }
      setOutput(value)
      props.onChange(parseFloat(value) );
    };
    const onUpdate = (e: React.MouseEvent) => {
      const text = (e.target as HTMLButtonElement).textContent;
      if (text === null) {return;}
      if (text === "完成") {
        setOutput('0');
        return;
      }
      if ("0123456789.".split("").concat(["删除", "清零"]).indexOf(text) >= 0) {
        _setOutput(generateOutput(text, output));
      }
      if (text === "+") {
        _setOutput(output+'+')
      }
      if(text==='-'){
        _setOutput(output+'-')
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
          <button>删除</button>
          <button>.</button>
          <button>0</button>
          <button>清零</button>
          <button className='success' onClick={props.onSave}>完成</button>
        </div>
      </Wrapper>);
  }
;
export {NumberSection};
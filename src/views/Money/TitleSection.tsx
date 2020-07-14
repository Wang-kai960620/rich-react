import styled from "styled-components";
import React from "react";
import Icon from "../../components/Icons";

const Wrapper = styled.div`
display: flex;
text-align: center;
justify-content: space-between;
align-items: center;
padding: 8px 0;
line-height: 22px;
background: #fff;
>.icon{
width: 20px ;
height: 20px;
margin: 0 10px;
}
>div{
padding: 5px;
text-align: center;
background: #eeeef1;
border-radius: 5px;
margin: 0 5px;
>span{
padding: 0 5px ;
}
>.selected{
background: #c4c4c4;
border-radius: 5px;
}
}
`;

const TitleSection:React.FC = ()=>{
  return (
    <Wrapper>
      <Icon name='close'/>
      <span>记一笔</span>
      <div>
        <span className='selected'>收入</span>
        <span>支出</span>
      </div>
    </Wrapper>
  )
}
export {TitleSection}
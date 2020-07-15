import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Icon from "../components/Icons";

const Title = styled.div`
display: flex;
justify-content: center;
align-items: center;
line-height: 20px;
font-size: 26px;
padding: 25px 0;
margin: 0 auto;
background: #fff;
`;
const Wrapper = styled.div`
background: #fff;
`;
const Middle = styled.div`
height: 60vh;
display: flex;
flex-wrap: wrap;
text-align: center;
align-content: center;
>div{
width: 100%;
display: flex;
flex-wrap: wrap;
>.text{
font-size:16px ;
}>.dollar{
font-size: 30px;
}
>.input{
font-size: 15px ;
}
>span{
color: #b3d4cb;
margin: 2px auto;
width: 100%;
}
}
>button{
border: 3px solid #a3c4be;
font-size: 15px;
padding: 10px 40px;
background: #b8dbd3;
outline: none;
border-radius: 10px 10px 10px 10px;
margin: 10px auto;
}
`;
const List = styled.div`
color: #CECECE;
display: flex;
justify-content: space-between;
padding: 5px 5px;
margin: 5px 10px;
font-size: 15px;
>.time{
color: #9AC7BC;
}
>div{
>span{
margin: 0 4px;
}
}
`;
const TextList = styled.ol`
overflow: hidden;
height: 17vh;
>li{
margin: 5px 10px;
background: #faf9f7;
border-radius: 10px ;
display: flex;
justify-content: space-between;
padding: 5px 5px;
color: #CECECE;
>.rightList{
width: 80px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
>.money{
text-align: center;
font-size: 20px;
color: #A5CCC1 ;
}
}
>.leftList{
display: flex;
align-items: center;
color: #000;
>.icon{
margin: 0 5px ;
width: 40px ;
height: 40px;
}
}
}
`;

function Home() {
  return (
      <Layout>
        <Wrapper>
        <Title>
          <div>Panda</div>
        </Title>
        <Middle>
          <div>
            <span className='text'>今日支出</span>
            <span className='dollar'>￥300</span>
            <span className='input'>收入￥300</span>
          </div>
          <button>记一笔</button>
        </Middle>
        <List>
          <span className='time'>今天7月14号</span>
          <div>
            <span>收入400</span>
            <span>支出400</span>
          </div>
        </List>
        <TextList>
          <li>
            <div className='leftList'>
              <Icon name='lions'/>
              <span>宠物</span>
            </div>
            <div className='rightList'>
              <span className='money'>+￥300</span>
              <span>23:00</span>
            </div>
          </li>
        </TextList>
        </Wrapper>
      </Layout>
  );
}

export {Home};
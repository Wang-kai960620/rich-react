import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";
import Icon from "../components/Icons";

const Title = styled.div`
 display: flex;
 justify-content: center;
 background: #fff;
 >ol{
   display: flex;
   margin: 10px 0;
   text-align: center;
   background: #c4c4c4;
   border-radius: 10px;
   >li{
     font-size: 15px;
      margin: 2px;
     width: 20vw;
     padding: 5px 0;
     &.selected{
      background: #eeeef1;
      border-radius: 10px;
     }
   }
 }
`;
const Chart = styled.div`
height: 30vh;
margin: 20px ;
display: flex;
flex-wrap: wrap;
background: #fff;
>div{
border: 1px solid black;
flex-grow: 1;
}
`;
const List = styled.div`
margin: 10px 20px ;
background: #fff;
box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 0 0 15px 15px;
position:relative;
::before{
content: '';
left: -6px;
display: block;
width: 100%;
border: 6px solid #9bc9c0;
position: absolute;
margin: auto;
}
>.window{
height: 40vh;
::-webkit-scrollbar { width: 0 !important }
overflow: scroll;
>ol{
margin: 20px 0;
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
}
}
`;

function Statistics() {
  return (
    <Layout>
      <Title>
        <ol>
          <li>日</li>
          <li className='selected'>月</li>
          <li>年</li>
        </ol>
      </Title>
      <Chart/>
      <List>
        <div className='window'>
          <ol>
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
          </ol>
        </div>
      </List>
    </Layout>
  );
}

export default Statistics;
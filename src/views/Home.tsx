import React from "react";
import Layout from "components/Layout";
import styled from "styled-components";
import Icon from "../components/Icons";
import {Link} from "react-router-dom";
import {useRecords} from "../Hooks/useRecords";
import dayjs from "dayjs";
import {useTagMap} from "./Tags/tagsHub";


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
>a{
margin: 10px auto;

>button{
border: 3px solid #a3c4be;
font-size: 15px;
padding: 10px 40px;
background: #b8dbd3;
outline: none;
border-radius: 10px 10px 10px 10px;
}
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
display: flex;
flex-wrap: wrap;
align-items: center;
margin-left: auto;
text-align: right;
>div{
width: 100%;
}
>.money{
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
  const {records} = useRecords();
  const {getValue} = useTagMap();
  const today = dayjs(new Date());
  const output = records.filter(t => t.type === "-").filter(t => dayjs(t.timeAt).isSame(today, "day")).reduce((sum, items) => {return (sum + items.amount);}, 0);
  const input = records.filter(t => t.type === "+").filter(t => dayjs(t.timeAt).isSame(today, "day")).reduce((sum, items) => {return sum + items.amount;}, 0);
  const newList = records.sort((a, b) => { return dayjs(a.timeAt).valueOf() - dayjs(b.timeAt).valueOf();}).slice(records.length - 2, 999);
  return (
    <Layout>
      <Wrapper>
        <Title>
          <div>Panda</div>
        </Title>
        <Middle>
          <div>
            <span className='text'>今日支出</span>
            <span className='dollar'>￥{output}</span>
            <span className='input'>收入￥{input}</span>
          </div>
          <Link to={"/money"}>
            <button>记一笔</button>
          </Link>
        </Middle>
        <List>
          <span className='time'>{dayjs(new Date()).format("YYYY年MM月DD日")}</span>
          <div>
            <span>收入￥{input}</span>
            <span>支出￥{output}</span>
          </div>
        </List>
        <TextList>
          {
            newList.map(t => {
              return (
                <li key={t.timeAt}>
                  <div className='leftList'>
                    <Icon name={getValue((t.tags).toString() ) || 'lions'}/>
                    <span>{t.tags}</span>
                  </div>
                  <div className='rightList'>
                    <div className='money'>{t.type}￥{t.amount}</div>
                    <div>{dayjs(t.timeAt).format("HH时hh分")}</div>
                  </div>
                </li>
              );
            })
          }

        </TextList>
      </Wrapper>
    </Layout>
  );
}

export {Home};
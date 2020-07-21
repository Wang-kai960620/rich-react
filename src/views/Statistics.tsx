import Layout from "components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import Icon from "../components/Icons";
import {useRecords} from "../Hooks/useRecords";
import {Title} from "./Statistics/Title";
import {useTagMap} from "./Tags/tagsHub";
import dayjs from "dayjs";
import {Echart} from "./Statistics/Echarts";

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
display: flex;
flex-wrap: wrap;
align-items: center;
margin-left: auto ;
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
}
}
`;

type Type = '-' | '+'

function Statistics() {
  const {records} = useRecords();
  const [type,setType] =useState<Type>('-')
  const {getValue} = useTagMap()
  const newList = records.filter(i=>i.type===type).sort((a, b) => dayjs(b.timeAt).valueOf()-dayjs(a.timeAt).valueOf())


  return (
    <Layout>
      <Title choose={type} onChange={(item)=>{setType(item)}}/>
      <Echart/>
      <List>
        <div className='window'>
          <ol>
            {
              newList.map(r => {
                return (
                  <li key={r.timeAt}>
                    <div className='leftList'>
                      <Icon name={getValue((r.tags).toString()) || 'lions'}/>
                      <span>{r.tags.map(t => <span key={t}>{t}</span>)}</span>
                    </div>
                    <div className='rightList'>
                      <span className='money'>{r.type}￥{r.amount}</span>
                    </div>
                  </li>
                );
              })
            }
          </ol>
        </div>
      </List>
    </Layout>
  );
}

export default Statistics;
import styled from "styled-components";
import React, {useState} from "react";
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
>ol{
padding: 5px;
display: flex;
text-align: center;
background: #eeeef2;
border-radius: 5px;
margin: 0 5px;
>li{
padding: 0 5px ;
}
>.selected{
background: #ffffff;
border-radius: 5px;
}
}
`;

const TitleSection: React.FC = () => {
  const typeMap = {"-": "支出", "+": "收入"};
  const [type, setType] = useState("-");
  const [typeList] = useState<("-" | "+")[]>(["-", "+"]);
  return (
    <Wrapper>
      <Icon name='close'/>
      <span>记一笔</span>
      <ol>
        {typeList.map(t =>
          <li key={t}
              className={type === t ? "selected" : ""}
              onClick={()=>{setType(t)}}
          >{typeMap[t]}</li>
        )}
      </ol>
    </Wrapper>
  );
};
export {TitleSection};
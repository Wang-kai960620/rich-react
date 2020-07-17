import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.div`
display: flex;
text-align: center;
justify-content: space-between;
align-items: center;
padding: 8px 0;
line-height: 22px;
background: #fff;
>span{
margin: 0 30px;
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
type Props={
  value:'-'|'+',
  onChange:(selected:'-'|'+' )=>void
}
const TitleSection: React.FC<Props> = (props) => {
  const typeMap = {"-": "支出", "+": "收入"};
  const type = props.value
  const [typeList] = useState<("-" | "+")[]>(["-", "+"]);
  return (
    <Wrapper>
      <span>记一笔</span>
      <ol>
        {typeList.map(t =>
          <li key={t}
              className={type === t ? "selected" : ""}
              onClick={()=>{props.onChange(t)}}
          >{typeMap[t]}</li>
        )}
      </ol>
    </Wrapper>
  );
};
export {TitleSection};
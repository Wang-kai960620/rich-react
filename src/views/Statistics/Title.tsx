import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 background: #fff;
 >ol{
   display: flex;
   margin: 20px 0;
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
type Props = {
  choose: "Y" | "M" | "D",
  onChange: (selected: "Y" | "M" | "D") => void
}
const Title: React.FC<Props> = (props) => {
  const switchMap = {"Y": "年", "M": "月", "D": "日"};
  const choose = props.choose;
  const [switchList] = useState<("Y" | "M" | "D")[]>(["D", "M", "Y"]);
  return (
    <Wrapper>
      <ol>{
        switchList.map(item => {
          return (
            <li key={item}
              className={choose === item ? "selected" : ""}
              onClick={()=>props.onChange(item)}
              >{switchMap[item]}</li>
          );
        })
      }
      </ol>
    </Wrapper>
  );
};
export {Title};
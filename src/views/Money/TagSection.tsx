import styled from "styled-components";
import React  from "react";
import Icon from "components/Icons";
import {Link} from "react-router-dom";
import {useTagMap} from "../Tags/tagsHub";

const Wrapper = styled.ol`
margin: 16px 0;
display: flex;
overflow-x: scroll;
overflow-y: hidden;
flex-direction: column; 
flex-wrap: wrap;
flex-grow: 1;
height: 35vh;
>li{
background: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 70px;
height: 50px;
border-radius: 10px;
margin: 10px 12px;
font-size: 15px;

&.selected{
background: #cae2dd;
border: 2px solid #a3c5bd;
}
>.icon{
width: 30px ;
height: 30px ;
}
}
>a{
display: flex;
justify-content: center;
align-items: center;
background: #fff;
width: 70px;
height: 50px;
margin: 10px 12px;
border-radius: 10px;
}
`;
type Props = {
  value: string[],
  onChange: (selected: string[]) => void
}

const TagSection: React.FC<Props> = (props) => {
  const { findKey,getValue} = useTagMap();
  const tag = Array.from(findKey())
  const selectedTag = props.value;
  const onCheck = (tag: string) => {
    const index = selectedTag.indexOf(tag);
    if (index < 0) {
      props.onChange(selectedTag.splice(0, 1));
      props.onChange([...selectedTag, tag]);
    } else {
      props.onChange(selectedTag.filter(item => item !== tag));
    }
  };
  const onClick = () => { };
  return (
    <Wrapper>
      {
        tag.map(tag =>
          <li className={selectedTag.indexOf(tag) >= 0 ? "selected" : ""} key={tag}
              onClick={() => onCheck(tag)}
          >
            <Icon name={getValue(tag) || 'lions'}/>
            {tag}
          </li>)
      }
      {/*<Link to={"/money/tags"}>*/}
      {/*  <li onClick={onClick}>新增标签</li>*/}
      {/*</Link>*/}
    </Wrapper>
  );
};

export {TagSection};
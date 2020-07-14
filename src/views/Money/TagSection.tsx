import styled from "styled-components";
import React, {useState} from "react";
import Icon from "../../components/Icons";

const Wrapper = styled.ol`
margin: 16px 0;
display: flex;
overflow-x: scroll;
overflow-y: hidden;
flex-direction: column; 
flex-wrap: wrap;
max-height: 350px;
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
`;
const TagSection: React.FC = () => {
  //TODO
  // const tagMap = {
  //   "日用", "美容", "数码", "汽车", "医疗", "餐饮","书籍", "社交", "房贷", "长辈", "交通", "果蔬", "旅行", "通讯", "娱乐", "零食", "宠物", "烟酒", "服饰", "母婴","住房", "彩票"
  // }
  const [tag] = useState<string[]>(["日用", "美容", "数码", "汽车", "医疗", "餐饮", "书籍", "社交", "房贷", "长辈", "交通", "果蔬", "旅行", "通讯", "娱乐", "零食", "宠物", "烟酒", "服饰", "母婴", "住房", "彩票"
  ]);
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const onCheck = (tag: string) => {
    const index = selectedTag.indexOf(tag);
    if (index < 0) {
      setSelectedTag(selectedTag.splice(0, 1));
      setSelectedTag([...selectedTag, tag]);
    } else {
      setSelectedTag(selectedTag.filter(item => item !== tag));
    }
  };
  return (
    <Wrapper>
      {
        tag.map(tag =>
          <li className={selectedTag.indexOf(tag) >= 0 ? "selected" : ""} key={tag}
              onClick={() => onCheck(tag)}
          >
            <Icon name='lions'/>
            {tag}
          </li>)
      }
      <li>新增标签</li>
    </Wrapper>
  );
};

export {TagSection};
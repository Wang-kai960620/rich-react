import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import {useTagMap} from "./Tags/tagsHub";


const List = styled.ol`
border: 1px solid red;
display: flex;
flex-wrap: wrap;
>li{
width: 100px;
border: 1px solid green;
}
`
function Tags() {
  const {tagsList,findName} =  useTagMap()
  return (
    <Layout>
     <List >
       {/*{tagsList.map(item=><li >{item}</li>)}*/}
     </List>
    </Layout>
  );
}
export default Tags;
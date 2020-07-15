import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";


const List = styled.ol`
border: 1px solid red;
>li{
border: 1px solid green;
}
`
function Tags() {
  return (
    <Layout>
     <List>
       <li>1</li>
       <li>2</li>
       <li>3</li>
       <li>4</li>
     </List>
    </Layout>
  );
}
export default Tags;
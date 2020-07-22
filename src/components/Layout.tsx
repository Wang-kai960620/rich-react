import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

const Wrapper = styled.div`
height: 100vh;  
display: flex;
flex-direction: column-reverse;
background: #ffffff;
`;
const Main = styled.div`
flex-grow: 1;
display: flex;
flex-direction: column-reverse;
`;

const  Layout = (props: any)=> {
  return (
    <Wrapper>
      <Nav/>
      <Main>
        {props.children}
      </Main>
    </Wrapper>
  );
}

export default Layout;
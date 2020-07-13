import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Icon from "./icons";


const NavWrapper = styled.div`
>ul{
  background: #f7f9f3;
  display: flex;
  text-align: center;
   >li{
    width: 33.333%;
    padding: 10px 0;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon{
      width: 30px;
      height: 30px;
    }
  }
 }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name='home'/>
          <Link to="/money">money</Link>
        </li>
        <li>
          <Icon name='tags'/>
          <Link to="/tags">tags</Link>
        </li>
        <li>
          <Icon name='statistics'/>
          <Link to="/statistics">statistics</Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
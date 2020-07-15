import {NavLink} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Icon from "components/Icons";


const NavWrapper = styled.div`
>ul{
  background: #f7f9f3;
  display: flex;
  text-align: center;
   >li{
    line-height: 20px;
    text-align: center;
    width: 33.333%;
   >a{
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon{
      width: 30px;
      height: 30px;
    }
    &.selected{
    color: #9dc8c0;
    >.icon{
    fill: #9dc8c0;
    }
    }   
   }
  }
 }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/home" activeClassName='selected'>
            <Icon name='home'/>
            首页
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName='selected'>
            <Icon name='money'/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName='selected'>
            <Icon name='statistics'/>
            统计
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
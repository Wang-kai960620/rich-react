import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import x from 'icons/home.svg'

console.log(x)
const NavWrapper = styled.div`
>ul{
  background: #f7f9f3;
  display: flex;
  text-align: center;
   >li{
    width: 33.333%;
    padding: 20px;
    font-size: 15px;
  }
 }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Link to="/money">money</Link>
        </li>
        <li>
          <Link to="/tags">tags</Link>
        </li>
        <li>
          <Link to="/statistics">statistics</Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
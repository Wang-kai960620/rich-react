import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";
require('icons/home.svg')
require('icons/tags.svg')
require('icons/statistics.svg')


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
          <svg className='icon'>
            <use xlinkHref='#home' />
          </svg>
          <Link to="/money">money</Link>
        </li>
        <li>
          <svg className='icon' >
            <use xlinkHref='#tags' />
          </svg>
          <Link to="/tags">tags</Link>
        </li>
        <li>
          <svg className='icon' fill='red' >
            <use xlinkHref='#statistics' />
          </svg>
          <Link to="/statistics">statistics</Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
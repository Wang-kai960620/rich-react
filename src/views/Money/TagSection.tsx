import styled from "styled-components";
import React from "react";
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
font-size: 10px;
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
const TagSection :React.FC = ()=>{
  return (
    <Wrapper>
      <li className='selected'>
        <Icon name='lions'/>
        老虎
      </li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
    </Wrapper>
  )
}


export {TagSection}
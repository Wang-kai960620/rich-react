import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import Icon from "../components/Icons";

const TitleSection = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 8px 0;
line-height: 22px;
background: #fff;
>.icon{
width: 20px ;
height: 20px;
}
>div{
padding: 5px;
text-align: center;
background: #eeeef1;
border-radius: 5px;
>.input{
background: #c4c4c4;
border-radius: 5px;
}
}
`;
const TagsSection = styled.ol`
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
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 5px;
margin: 10px 12px;
}

`;
const NumberSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
background: #9bc9c0;

>.output{
display: flex;
flex-direction: row-reverse;
font-size: 20px;
background: #ffffff;
border-radius: 5px;
line-height: 24px;
width: 80vw;
padding: 10px 10px;
margin: 20px 34px;
}
>.numberList{
width: 80vw;
margin: 10px 20px;
max-width: 310px;
min-height: 202px;
>button{
font-size: 20px;
border: none;
margin: 10px 10px;
width: 50px;
height: 30px;
border-radius: 5px;
background: #ffffff;
}
}


`;

function Money() {
  return (
    <Layout>
      <TitleSection>
        <Icon name='close'/>
        <span>记一笔</span>
        <div>
          <span className='input'>收入</span>
          <span>支出</span>
        </div>
      </TitleSection>
      <TagsSection>
        <li>1</li>
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
      </TagsSection>
      <NumberSection>
        <div className='output'>100</div>
        <div className='numberList'>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>今日</button>
          <button>.</button>
          <button>0</button>
          <button>清零</button>
          <button>完成</button>
        </div>

      </NumberSection>
    </Layout>
  );
}

export default Money;
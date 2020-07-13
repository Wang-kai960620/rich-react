import React from "react";
import styled from "styled-components";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Nav from "./components/Nav";


const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`;
const Main = styled.div`
flex-grow: 1;
`;



function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/money">
              <Money/>
            </Route>
            <Route path="/tags">
              <Tags/>
            </Route>
            <Route path="/statistics">
              <Statistics/>
            </Route>
            <Route exact path="/">
              <Redirect to="/money"/>
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>

        <div>
         <Nav/>
        </div>
      </Wrapper>
    </Router>
  );
}

function Money() {
  return <h2>这里是记账页面</h2>;
}

function Tags() {
  return <h2>这里是标签页面</h2>;
}

function Statistics() {
  return <h2>这里是统计页面</h2>;
}

function NoMatch() {
return <h2>你输入的路径不对，</h2>
}

export default App;

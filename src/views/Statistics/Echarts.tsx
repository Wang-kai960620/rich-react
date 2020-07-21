import styled from "styled-components";
import React from "react";
// import ReactEcharts from "echarts-for-react";

const Wrapper = styled.div`
height: 30vh;
margin: 20px ;
display: flex;
flex-wrap: wrap;
background: #fff;
>div{
border: 1px solid black;
flex-grow: 1;
}
`;

const Echart = () => {

  return (
    <Wrapper>
      {/*<ReactEcharts option={this.getOption()}*/}
      {/*              notMerge={true}*/}
      {/*              lazyUpdate={true}*/}
      {/*              theme={"theme_name"}*/}
      {/*              onChartReady={this.onChartReadyCallback}*/}
      {/*              onEvents={EventsDict}*/}
      {/*              opts={}/>*/}
    </Wrapper>
  );
};
export {Echart};
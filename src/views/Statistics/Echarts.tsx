import styled from "styled-components";
import React, {useEffect, useRef} from "react";
import {EChartOption} from "echarts";
import echarts from "echarts";

const Wrapper = styled.div`
height: 30vh;
margin: 10px ;
background: #fff;
overflow: auto;
overflow-x: scroll;
overflow-y: hidden;
&::-webkit-scrollbar{
display: none ;
}


>.charts{
width: 400%;
height: 200px;

}
`;
type Props = {
  option: EChartOption
}

const Echart: React.FC<Props> = (props) => {
  const {option} = props;
  const container = useRef(null);
  const chart = useRef(null);
  useEffect(() => {
    // @ts-ignore
    container.current.scrollLeft = 9999
     // @ts-ignore
     chart.current = echarts.init(container.current);
  }, []);
  useEffect(() => {
    // @ts-ignore
    chart.current.setOption(option);
  }, [props.option]);

  return (
    <Wrapper>
      <div ref={container} className='charts'/>
    </Wrapper>

  );
};
export {Echart};
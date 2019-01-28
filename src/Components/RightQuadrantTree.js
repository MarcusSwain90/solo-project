import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import {withFauxDOM} from 'react-faux-dom'
import styled from 'styled-components';
import { svg, select } from 'd3';

const TrafficFlowTitle = styled.h4`
    @import url('https://fonts.googleapis.com/css?family=Quicksand:300');
    font-family: 'Quicksand', sans-serif;
    margin-left: 30px;
    margin-top: 30px;
    font-size: 40px;
    display: inline-block;
`

const SubTitles = styled.p`
   @import url('https://fonts.googleapis.com/css?family=Quicksand:300');
   font-family: 'Quicksand', sans-serif; 
   display: inline-block;
   margin-left: 660px;
   bottom: 80px;
  `

  

const debugData = [
  {
    name: 'MRI',
    nodeSvgShape: {
      shape: 'rect',
      shapeProps: {
        width: 300,
            height: 240,
            x: -270,
            y: -115,
            fill: 'steelblue', 
      }
    },
    textLayout: {
      textAnchor: 'start',
      x: -999, 
      y:55
    },
    children: [
      {
        name: '',
        nodeSvgShape: {
          shape: 'rect',
          shapeProps: {
           width: "170px",
           height: "60px",
           x: -1,
           y: -10,
           fill: "purple"
          },
        }
      },
      {
        name: '',
        nodeSvgShape: {
          shape: 'rect',
          shapeProps: {
           width: "170px",
           height: "60px",
           x: -1,
           y: -10,
           fill: "green"
          }
        }
      },
      {
      name: '',
        nodeSvgShape: {
          shape: 'rect',
          shapeProps: {
           width: "170px",
           height: "60px",
           x: -1,
           y: -10,
           fill: "yellow"
          }
        }
      },
      {
        name: '',
      },
      {
        name: '',
          nodeSvgShape: {
            shape: 'rect',
            shapeProps: {
             width: "170px",
             height: "60px",
             x: -1,
             y: -10,
             fill: "beige"
            }
          }
        },
    ],
  },
];
  
  const svgSquare = {
    shape: 'rect',
    shapeProps: {
      width: "170px",
      height: "60px",
      x: -1,
      y: -10,
      fill: 'grey'
    }
  }
  
  // const containerStyles = {
  //   width: '100%',
  //   height: '100vh',
  // }
  
  class RightQuandrantTree extends Component {
    state = {}
  
    componentDidMount() {
      const dimensions = this.treeContainer.getBoundingClientRect();
      this.setState({
        translate: {
          x: dimensions.width / 4,
          y: dimensions.height / 3
        }
      });
    }
  
    render() {

      const strokeWidthFunction = () => {
        return 7;
      };

      const svgStyleObject = {
        stroke: 'black',
        strokeWidth: 1,
      }

      const customStyle = {
        links: svgStyleObject
      }

      const myPathFunc = function (linkData, orientation) {
        const straight = svg
          .line()
          .interpolate('basis')
          .x(d => d.x)
          .y(d => d.y);

        let data = [
          { x: linkData.source.x, y: linkData.source.y },
          { x: linkData.target.x, y: linkData.target.y },
        ];

        if (orientation === 'horizontal') {
          data = [
            { x: linkData.source.y, y: linkData.source.x },
            { x: linkData.target.y, y: linkData.target.x },
          ];
        }

        return straight(data);
      }
      
      return (
        <div id="tree-container" style={{borderLeft:"3px solid whitesmoke",borderTop:'3px solid whitesmoke', marginLeft:'550px', borderRight:'55px'}}>
        <TrafficFlowTitle>Traffic Flow</TrafficFlowTitle>
        <SubTitles>classifications</SubTitles>
        <div style={{width: '100%',height: '100vh', marginLeft:"-2px" }}ref={tc => (this.treeContainer = tc)}>
          <Tree 
            data={debugData} 
            translate={this.state.translate} 
            orientation={'horizontal'}
            nodeSvgShape={svgSquare}
            zoomable={false}
            depthFactor={600}
            styles={customStyle}
          />
        </div>
        </div>
      );
    }
  }

  export default withFauxDOM(RightQuandrantTree)
  


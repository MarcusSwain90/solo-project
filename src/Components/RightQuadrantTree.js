import React, { Component } from 'react';
import Tree from 'react-d3-tree';
import {withFauxDOM} from 'react-faux-dom'
import styled from 'styled-components';
import { selectAll, transition, duration } from 'd3';



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
   margin-left: 680px;
   bottom: 80px;
  `
const debugData = [
  {
    name: 'Workstation',
    color: "red",
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
    children: [
      {
        name: 'Fedora-Workstation',
        attributes: {
          numOfDevices: 17,
        },
        nodeSvgShape: {
          shape: 'rect',
          shapeProps: {
           width: "200px",
           height: "80px",
           x: -1,
           y: -21,
           fill: "whitesmoke"
          },
        }
      },
      {
        name: 'Unknown',
        attributes: {
          numOfDevices: 13,
        },
        nodeSvgShape: {
          shape: 'rect',
          shapeProps: {
           width: "200px",
           height: "80px",
           x: -1,
           y: -21,
           fill: "green"
          }
        }
      },
      {
      name: 'Ubuntu-Workstation',
      attributes: {
        numOfDevices: 12,
      },
        nodeSvgShape: {
          shape: 'rect',
          shapeProps: {
           width: "200px",
           height: "80px",
           x: -1,
           y: -23,
           fill: "yellow"
          }
        }
      },
      {
        name: 'Windows10-Workstation',
        attributes: {
          numOfDevices: 11,
        },
      },
      {
        name: 'RedHat-Workstation',
        attributes: {
          numOfDevices: 7,
        },
          nodeSvgShape: {
            shape: 'rect',
            shapeProps: {
             width: "200px",
             height: "80px",
             x: -1,
             y: -21,
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
      width: "200px",
      height: "80px",
      x: -1,
      y: -21,
      fill: 'grey'
    }
  }

  const svgStyleObject = {
    stroke: 'steelblue',
    border: '1px solid transparent'
  }

  const customStyle = {
    links: svgStyleObject,
    nodes: svgStyleObject
  }
  
  class RightQuandrantTree extends Component {
    state = {}

    componentDidMount() {
      const dimensions = this.treeContainer.getBoundingClientRect();
      this.setState({
        translate: {
          x: dimensions.width / 4,
          y: dimensions.height / 2.8
        }
      });
    }

    componentDidUpdate() {
      selectAll("path").select(function(d, index ) {
        if (debugData[0].children[index]){
          this.style["strokeWidth"] = debugData[0].children[index].attributes.numOfDevices
        }
        return this;
      });
    }
  
    render() {
      
      return (
        <div id="tree-container" style={{borderLeft:"3px solid whitesmoke",borderTop:'3px solid whitesmoke', marginLeft:'550px', borderRight:'55px'}}>
        <TrafficFlowTitle>Traffic Flow</TrafficFlowTitle>
        <SubTitles>classifications</SubTitles>
        <div style={{width: '100%',height: '190vh', marginLeft:"-2px" }}ref={tc => (this.treeContainer = tc)}>
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
  


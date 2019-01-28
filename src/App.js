import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import Tree from 'react-d3-tree';
import RightQuadrantTree from './Components/RightQuadrantTree';
import Table from './Components/Table'

const CompleteBorder = styled.div`
    margin: 55px -1px;
    border-top: solid grey 2px;
    padding-top: 400px;
    width: 100%;
`
const RightQuadrant = styled.div`
    margin: -401px 450px;
    border-left: solid grey 2px;
    padding-top: 400px;
    width: 10%;
    height: 100px;
`
const LeftTitle = styled.h2`
    @import url('https://fonts.googleapis.com/css?family=Quicksand:300');
    font-family: 'Quicksand', sans-serif;
    margin-left: 4px;
    /* margin-top: 1px; */
`
const MoveToMiddle = styled.p`
    margin: -250px -500px 0 170px;
    /* align-content: center; */

`




class App extends Component {
  
    render() {
      return (
        <div style={{height: '90%', borderBottomColor:"whitesmoke"}}>
        <div className="Header">
        <div className='LeftContent'>
         <LeftTitle>Classification: Workstation</LeftTitle>
         <div className='subContent'>
         <div className='data'><span>Classification Source: ISE Profile</span></div>
         <div className='data'><span>Subclassification: <span className='blue-text'>10</span></span></div>
         <div className='data'LeftTitle><span>Endpoint Members: <span className='blue-text'>35</span></span></div>
         </div>
         </div>
         <div className="RightContent"><span>Date from: <span className='blue-text'><i class="far fa-clock"></i> 1 Hour: Feb 23 10:18am - Feb 23, 11:18 am </span></span></div>
          </div>
          <Table />
          <RightQuadrantTree />
        </div>    
      );
    }
  }

export default App;

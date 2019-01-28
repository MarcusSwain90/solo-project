import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import RightQuadrantTree from './Components/RightQuadrantTree';
import Table from './Components/Table'


const LeftTitle = styled.h2`
    @import url('https://fonts.googleapis.com/css?family=Quicksand:300');
    font-family: 'Quicksand', sans-serif;
    margin-left: 4px;
    /* margin-top: 1px; */
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
         <div className="RightContent"><span>Date from: <span className='blue-text'><i className="far fa-clock"></i> 1 Hour: Feb 23 10:18am - Feb 23, 11:18 am </span></span></div>
          </div>
          <Table />
          <RightQuadrantTree />
        </div>    
      );
    }
  }

export default App;

import React, { Component } from 'react'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../tabledata.json'

const TableHeader = styled.th`
  @import url('https://fonts.googleapis.com/css?family=Quicksand:300');
  border-bottom: 2px solid whitesmoke;
  padding-bottom: 6px;
  font-size: 17px;
  font-family: 'Quicksand', sans-serif;
  align-items: left;
  font-weight: bolder;
  justify-items:left;
`

const TableRows = styled.tr`
  @import url('https://fonts.googleapis.com/css?family=Quicksand:300');
  font-family: 'Quicksand', sans-serif;
  align-content: left;
  :nth-child(even) {
    background-color: whitesmoke;
    };
`
const TableSpace = styled.td`
  padding: 5px;
`

const TableStyle = styled.table`
  border-collapse: collapse;
  border-spacing: 5;
  width: 30%;
  border-top: 2px solid whitesmoke;
  position: absolute;
  top: 350px;
  left: 10px;
  bottom: 90px;
  `
const ActivitiesHeader = styled.h3`
  @import url('https://fonts.googleapis.com/css?family=Quicksand:300');
  font-family: 'Quicksand', sans-serif;
  margin-right:90px;
`

export default class Table extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: data
    }

  }
  mapFunction = (activity, index) => {

    return (
      <TableRows key={index}>
      <TableSpace><label className='checkbox-btn'><input type='checkbox'/><span></span></label>{activity.protocol}</TableSpace>
      <TableSpace>{activity.port}</TableSpace>
      <TableSpace>{activity.hits}</TableSpace>   
      </TableRows>
    )
  
  }
  renderTable = () => {
    return (
      data.activitiesDetails.activitiesList.map(this.mapFunction)
    )
  }
  render() {
    const { activitiesList } = data.activitiesDetails;
    if(activitiesList){
    return (
      <div>
          <TableStyle>
            <thead>
        <caption><div className="container">
        <label class="switch"><ActivitiesHeader>Activities(12)</ActivitiesHeader>
        <input type="checkbox"/>
        <span class="slider"></span>
        </label>
        </div></caption>
              <tr>
            <TableHeader><label className='checkbox-btn'><input type='checkbox'/><span></span></label>Protocol</TableHeader>
            <TableHeader>Port</TableHeader>
            <TableHeader>Hits</TableHeader>
              </tr>
            </thead>
            <tbody>
            {this.renderTable()}
            </tbody>
        </TableStyle>
        </div>
    )
  } else {
    return <div>loading</div>
  }
} 
}

import React, { Component } from 'react';
import ListItem from './ListItem'



export default class List extends Component {
  render() {
    return (
      <div id="listDiv">
        <h2>My Entries:</h2>
        <ul>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </div>
    )
  }
}
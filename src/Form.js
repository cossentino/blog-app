import React, { Component } from 'react';



export default class Form extends Component {
  render() {
    return (
      <div id="formDiv">
        <h2>Enter title and content</h2>
        <form id="form">
          <input type="text" name="title" />
          <input type="text" name="content" />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term : ''};
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  render() {
    console.log(this.props)
    return (
      <div style={{ "textAlign": "center", "background": "#123456", "padding": "35px" }}>
      <input
          size={"large"}
          style={{ width: 400 }}
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
          placeholder="Search Video"
      />
     
    
      <Button style={{ "marginLeft":"5px" }} className="bg-dark"><i class="fab fa-searchengin"></i></Button>
  </div>
    )
  }
}

import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    this.props.functionUpdate(this.props.id);
  };
  render() {
    const scr = `https://media1.giphy.com/media/${this.props.id}/200.gif`;
    return <img src={scr} className="gif" onClick={this.handleClick} />;
  }
}

export default Gif;

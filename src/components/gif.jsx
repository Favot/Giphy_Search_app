import React, { Component } from "react";

class Gif extends Component {
  handleClick = () => {
    const { selecGif, id } = this.props;
    selecGif(id);
  };

  render() {
    const { id } = this.props;
    const scr = `https://media1.giphy.com/media/${id}/200.gif`;

    if (!id) {
      return null;
    }

    return (
      <img
        src={scr}
        className="gif"
        alt="gif selection"
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;

import React, { Component } from "react";
import giphy from "giphy-api";

import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId:
        "https://media1.giphy.com/media/JHLXLgxbxyN5osy81d/200.gif",
    };
    this.search();
  }

  search = (query) => {
    giphy("4nESk4eKxJ0Lm8etAV3U52asiT8f4X8h").search(
      {
        q: query,
        rating: "g",
        limit: 10,
      },
      (err, result) => {
        this.setState({ gifs: result.data });
      }
    );
  };

  updateMainGif = (result) => {
    this.setState({ selectedGifId: result });
  };

  render() {
    const { selectedGifId, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} updateMainGifFunction={this.updateMainGif} />
        </div>
      </div>
    );
  }
}

export default App;

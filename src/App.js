import React from "react";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetail, VideoList } from "./Components/index";
import Youtube from "./Api/Youtube";

class App extends React.Component {
  state = {
    videos: [],
    SelectedVideo: null
  };
  componentDidMount() {
    this.handleSubmit('justin beiber');
  }
  handleSubmit = async searchTerm => {
    const response = await Youtube.get("search", {
      params: {
        part: "snippet",
        maxresults: 5,
        key: "AIzaSyCAkRLupY3LlofKqaWm5lSW5W2CZAIAIv0",
        q: searchTerm,
      }
    });
    console.log(response.config.params);
    this.setState({ videos: response.data.items, SelectedVideo: response.data.items[0] });
    console.log(this.state.SelectedVideo);
    console.log(this.state.videos);
  };

  onVideoSelect = (videos) => {
    this.setState({ SelectedVideo: videos });
    
  }

  render() {
    const { SelectedVideo, videos } = this.state;
    return (
      <Grid style={{ justifyContent: "center" }} container spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={SelectedVideo}/>
            </Grid>
            <Grid item xs={4}>
              <VideoList Videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;

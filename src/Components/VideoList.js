import React from "react";
import VideoItem from './VideoItem';
import { Grid } from '@material-ui/core';
const VideoList = ({ Videos , onVideoSelect }) => {
  if(!Videos) return <h1>Loading....</h1>
  const listOfVideos = Videos.map((video, id) =>
    <VideoItem key={id} onVideoSelect={onVideoSelect} video={video} />);
  return (
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
  );
}

export default VideoList;
   
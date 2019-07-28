
import React from 'react';
// components
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const { videoList } = props
  const videoItems = props.videos.map((video) => {
    return (
       <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
    );
  });
console.log(`VIDEO LIST: `, videoList)
  return (
    <ul 
    style={{display: 'inline-block', width: '50%', background: '#efefef'}}>
      { videoItems }
    </ul>
  );
}

export default VideoList;
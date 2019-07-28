import React from 'react';
import Spinner from '../../layout/Spinner'

const VideoDetail = ({video}) => {
  if(!video) {
    return <div><Spinner/></div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}?autoplay=1?color=pink`;

  return (
    <div className="detail"
    style={{display: 'inline-block', width: '50%', background: '#efefef'}}>
        <div className={"embed-responsive embed-responsive-16by9"}>
        <iframe className="embed-responsive-item" src={url}
        style={{width: '100%', height: '500px'}}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
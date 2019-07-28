import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // const imageUrl = video.snippet.thumbnails.default.url;
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
        <div className="embed-responsive embed-responsive-16by9">
        <iframe title={video.snippet.title} className="embed-responsive-item" src={url}
        style={{width: '100%', height: '200px'}}></iframe>
      </div>        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
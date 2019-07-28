import React, { Component} from 'react'
import YTSearch from 'youtube-api-search'
import _ from 'lodash';
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import VideoList from './components/VideoList'
import dotenv from 'dotenv'
dotenv.config()

const API_KEY = process.env.REACT_APP_API_KEY

export default class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('Miranda Lambert');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
    this.setState({
      videoList : this.state.videos.slice(1,5)
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>

      <h2>My Music App</h2>
        <div>
        <div
        style={{display: 'flex', justifyContent: 'space-between',background: 'red'}}>
        <h1
        style={{color: '#efefef', alignSelf: 'center', flexBasis: '4', paddingTop:'20px', padingLeft: '30px' }}>
        YTSearch   <i class="fab fa-searchengin"></i></h1>


         <SearchBar onSearchTermChange={videoSearch} />
 
        </div>

        <div 
        style={{display: 'flex'}}>
        <VideoDetail video={this.state.selectedVideo} />
          <VideoList videoList={this.state.videoList}
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />

        </div>
        </div>

    </div>



        );
  }}

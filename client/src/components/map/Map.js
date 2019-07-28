import React, { Component } from 'react'
import './Map.css'
import { Media, Card} from 'react-bootstrap'
import moment from 'moment'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
const google = window.google = window.google ? window.google : {}

export class Runs extends Component {
  constructor(props){
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }
  }
  componentDidMount = () => {
    this.props.getRuns()
  }
  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onMapClicked = (props) => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
      }
    };
    onClose = props => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    };
    render() {
    //   console.log(`MAP PROP:`, this.props)
    
    // console.log(`API: `, process.env.REACT_APP_API_KEY)
    // console.log(this.props.runDATA)
    // console.log("location:" + this.props.location[1].position.lat)
    return (
      <div id="run-container" 
      className="container-fluid">
      <div id="header-container">
        <h1 style={{color: '#efefef'}}>5K Races in San Antonio</h1>
        <img src="https://avatars3.githubusercontent.com/u/369874?s=280&v=4" alt="e" className="e"/>
        <h3 style={{color: '#efefef'}}>Powered by EventBrite</h3>
      </div>
        <div id="top-container">
        <div id="run-canvas">
        <ul>
          {this.props.runDATA.map((item, i)=> {
            return  (
              <Card className="box">
              <Media>
                <img id="runImg"
                src={item.logo.original.url} alt="runIMG" thumbnail/>
              <Media.Body>
                <p>{i +1}</p>
                <p id="title">{item.name.text}</p>
                <p>
                {moment(item.start.local).format('dddd, MMMM DD YYYY')}
                </p>
              </Media.Body>
              </Media>
              </Card>
            )

        })}
    
    </ul>
    </div>

      <div id="map-canvas">
      <Map id="map" google={this.props.google} zoom={11}
        style={mapStyle}
        initialCenter = {{
          lat: 29.424122,
          lng: -98.493629
        }}
        onClick={this.onMapClicked}>
 
        <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

        {this.props.location.map((item, i)=> {
           return  <Marker
            title={item.title}
            name={item.name}
            position={item.position}
            icon={{
              url: "http://www.clker.com/cliparts/f/h/3/4/l/K/runner-md.png" ,
              scaledSize: new google.maps.Size(35,35),
              anchor: new google.maps.Point(32, 32),
            }}
            onClick={this.onMarkerClick}
            key={i}
            />

        })}
        <InfoWindow
          className="infoWindow"
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h2 style={{color: 'black'}}>{this.state.selectedPlace.name}</h2>
            </div>
        </InfoWindow>

      </Map>
      </div>
      </div>
      </div>
    )
  }
}
const mapStyle = {
  width: '50%',
  height: '600px',
  boxShadow:'0 0 10px #da363b'

}
const heatMapData = {
 
    positions: [{
      lat: 29.424122,
      lng: -98.493629
    }],
    options : {
      radius: 20,
      opactiy: .6
    }
  
}  

// export default Runs
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(Runs)
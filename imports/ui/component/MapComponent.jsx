import React, { Component } from 'react';

// https://github.com/tomchentw/react-google-maps
// https://tomchentw.github.io/react-google-maps/addons/marker-clusterer

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import MarkerClusterer from "react-google-maps/lib/addons/MarkerClusterer";

const AsyncGettingStartedExampleGoogleMap = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            //ref={props.onMapLoad}
            defaultZoom={12}
            defaultCenter={{ lat: 49.428692, lng: 32.059426 }}
        >
            <MarkerClusterer
                averageCenter
                enableRetinaIcons
                gridSize={60}
            >
                {props.markers.map(marker => (
                    <Marker
                        position={{ lat: marker.latitude, lng: marker.longitude }}
                        key={marker.photo_id}
                    />
                ))}
            </MarkerClusterer>
        </GoogleMap>
    )));

export default class MapComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            markers: props.markers
        };
    }

    render() {
        return (
            <AsyncGettingStartedExampleGoogleMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing&key=AIzaSyBY4SASKwL2v7ajM9gnwbhpgHtEcHwbfBY"
                loadingElement={
                    <div style={{ height: `100%` }} />
                }
                containerElement={
                    <div style={{ height: `100%` }} />
                }
                mapElement={
                    <div style={{ height: `100%` }} />
                }
                markers={this.state.markers}
            />
        );
    }
}
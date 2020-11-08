import GoogleMapReact from "google-map-react";
import {useState} from "react"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Zemljevid = (props) => {

    const layerData = {
        // "positions" : [
        //     {"lng" : 14.506123, "lat" : 46.04},
        //     {"lng" : 14.505123, "lat" : 46.03},
        //     {"lng" : 14.506123, "lat" : 46.02},
        //     {"lng" : 14.505123, "lat" : 46.01},
        //     {"lng" : 14.503123, "lat" : 46.04},
        //     {"lng" : 14.516123, "lat" : 46.03},
        //     {"lng" : 14.507123, "lat" : 46.02},
        //     {"lng" : 14.507123, "lat" : 46.01},
        //     {"lng" : 14.507123, "lat" : 46.05},
        //     {"lng" : 14.507123, "lat" : 46.05},
        //     {"lng" : 14.507123, "lat" : 46.05},
        //     {"lng" : 14.507123, "lat" : 46.05},
        //     {"lng" : 14.507123, "lat" : 46.05},
        // ]
        "positions" : props.heatMapPoints,
        "options" : {
            "opacity" : 0.5,
            "radius" : 15,
        }
    }

    const [zoom, setZoom] = useState(13);
    const [radius, setRadius] = useState(15);

    const zoomRadius = {
        10 : 5,
        11 : 5,
        12 : 8,
        13 : 15,
        14 : 20,
        15 : 30,
        16 : 50
    }

    function handleZoomChange(e){
        setZoom(e)
        let radiusValue;
        if (e>16){
            radiusValue=50
        } else if (e < 10) {
            radiusValue=5
        } else {
            radiusValue=zoomRadius[e]
        }
        setRadius(radiusValue)
        console.log(zoom, radius)
    }
      
    return (
        <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBnGvM0xkLCQV7z7okLx42ieOhM1vqVIok" }}
          defaultCenter={{
            lng: 14.505751,
            lat: 46.056946
          }}
          defaultZoom={zoom}
          heatmapLibrary={true}
          heatmap={{
              "positions" : props.heatMapPoints,
              "options" : {
                "opacity" : 0.6,
                "radius" : radius,
              }
          }}
          options={{
              "streetViewControl" : true
          }}
          onDragEnd={(e) => props.handleDragEnd(e)}
          yesIWantToUseGoogleMapApiInternals={true}
          onZoomAnimationEnd={e => handleZoomChange(e)}
          streetViewControl={true}
        >
        </GoogleMapReact>
      </div>
    )
}

export default Zemljevid;
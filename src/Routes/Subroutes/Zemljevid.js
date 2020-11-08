import GoogleMapReact from "google-map-react";

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
            "radius" : 15
        }
    }
      
    return (
        <div style={{ height: '80vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBnGvM0xkLCQV7z7okLx42ieOhM1vqVIok" }}
          defaultCenter={{
            lng: 14.505751,
            lat: 46.056946
          }}
          defaultZoom={13}
          heatmapLibrary={true}
          heatmap={layerData}
        >
          <AnyReactComponent
            lng={14.505751}
            lat={46.056946}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    )
}

export default Zemljevid;
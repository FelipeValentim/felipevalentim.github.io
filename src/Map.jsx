import GoogleMapReact from "google-map-react";
const defaultProps = {
  center: {
    lat: -22.9013775,
    lng: -43.5561587,
  },
  zoom: 11,
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
    </GoogleMapReact>
  );
};

export default Map;

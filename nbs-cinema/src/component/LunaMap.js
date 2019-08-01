import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
// import LunaMarker from "./LunaMarker";

const LunaMap = withScriptjs(withGoogleMap((props) => {
                  
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  51.5124799, lng: -1.772587 } }
        >
        {/* {markers} */}
      </GoogleMap>
    )
  }
));

export default LunaMap;
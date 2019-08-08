import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const LunaMap = withScriptjs(withGoogleMap((props) => {
  
                  
  return (
      <GoogleMap
        defaultZoom={15}
        center={ { lat:  51.5124799, lng: -1.772587 } }
        >
        {/* {markers} */}
      </GoogleMap>
    )
  }
));

export default LunaMap;
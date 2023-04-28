import './styles.css'
import GoogleMapReact from 'google-map-react';
import Marker from '../marker'
const Map = () => {
    return (
        <div className='container-map'>
            <GoogleMapReact
            bootstrapURLKeys={{key: ''}}
            center={{
                lat: -23.588068,
                lng: -46.656419,
            }}
            defaultZoom={15}
            >
                <Marker lat={-23.588068} lng={-46.656419} />

            </GoogleMapReact>
        
        </div>

    )
}
export default Map;
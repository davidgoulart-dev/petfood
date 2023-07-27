import './styles.css'
import MarkerIcon from '../../assets/marker.png'
import MarkerSelectedIcon from '../../assets/marker-selected.png'
import Logopetlove from '../../assets/petlove_logo.webp'

const Marker = () => {
    return (
        <div className='container-marker'>
            <img src={MarkerSelectedIcon} alt="Logo" className="img-fluid " />
            <img src={Logopetlove} alt="Logo" className="img-marker petshop-image" />
        </div>
    )
}


export default Marker;
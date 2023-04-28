import './styles.css'
import MarkerIcon from '../../assets/marker.png'
import MarkerSelectedIcon from '../../assets/marker-selected.png'
const Marker = () => {
    return (
        <div className='container-marker'>
            <img src={MarkerSelectedIcon} alt="Logo" className="img-fluid " />
            <img src="https://www.petlove.com.br/static/uploads/banner_image/image/44490/petlove_logo.png" alt="Logo" className="img-marker petshop-image" />
        </div>
    )
}


export default Marker;
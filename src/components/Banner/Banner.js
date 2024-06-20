
import './Banner.css'
import banner from '../../assets/imagens/banner.png'
function Banner(){
    return(
        <header className='banner'>
            <img src={banner} alt='Banner principal'/>
        </header>
        
    )
}

export default Banner;
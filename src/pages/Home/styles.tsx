import { styled } from "../../config/appStyle"
import imgBanner from './../../assets/images/banner-camara.png'

const Banner = styled('div', {
    borderRadius: '$4',
    padding: '$3',
    marginBottom: '55px',
    position: 'relative',
    backgroundImage: `url(${imgBanner})`,
    backgroundPosition: 'center bottom',
    height: '400px',
})

export {
    Banner
}
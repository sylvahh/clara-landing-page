import Flickity from 'react-flickity-component'
import supermarket from '../../assets/supermarket.png'

const flickityOptions = {
    initialIndex: 2
}

function Carousel() {
  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
          <img src={supermarket} alt="" />
    <img src={supermarket} alt="" />
    <img src={supermarket} alt="" />
          
    </Flickity>
  )
}
export default Carousel
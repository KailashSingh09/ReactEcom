import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"
import Flip from "./flip.json"
import Product from './Product';


const Slider = () => {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
      };
      const product=Flip.map((element)=>{return(
        <Product
        src={element.img}
        title={element.title}
        Class={element.price}
        />
    )})
      return (
        <div>
          <Carousel
          responsive={responsive}
  swipeable={false}
  draggable={false}
  showDots={true}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}

  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
          >
            {product}
          </Carousel>
        </div>
      );
    }


export default Slider;
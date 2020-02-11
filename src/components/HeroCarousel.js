import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const HeroCarousel = () => (
  <Carousel showThumbs={false} infiniteLoop autoPlay interval={4000}>
    <div>
      <img src="https://via.placeholder.com/400x100" alt="hero-placeholder" />
      <p className="legend">Get relocated anywhere in India. Book your shifting with us.</p>
    </div>
    <div>
      <img src="https://via.placeholder.com/400x100" alt="hero-placeholder" />
      <p className="legend">Our strength is to render quality and well timed services to the customers.</p>
    </div>
    <div>
      <img src="https://via.placeholder.com/400x100" alt="hero-placeholder" />
      <p className="legend">We have experienced and quick witted team to manage and deliver your products.</p>
    </div>
  </Carousel>
)

export default HeroCarousel;
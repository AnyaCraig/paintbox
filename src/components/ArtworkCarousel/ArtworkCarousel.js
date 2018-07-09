import React, { Component } from 'react';
import Slider from 'react-slick';
import './ArtworkCarousel.scss';


class ArtworkCarousel extends Component {

    render() {
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3
        };

        return (
            <Slider className="carousel-wrapper" { ...settings }>
            {this.props.artworks.map(artwork=>{
                const backgroundImage = artwork.image;
                return (
                    <div className="artwork-slide" style={`background-image: url(${backgroundImage})`}>
                        <img src={artwork.image}/>
                    </div>
                );
            })}
          </Slider>
        );
      }
  }
  
  export default ArtworkCarousel;
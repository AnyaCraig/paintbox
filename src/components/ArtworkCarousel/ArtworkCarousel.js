import React, { Component } from 'react';
import Slider from 'react-slick';
import './ArtworkCarousel.scss';
import { Link } from 'react-router-dom';


class ArtworkCarousel extends Component {

    render() {
        const settings = {
          dots: false,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
          ],
        };

        console.log("caoursel artworks", this.props.artworks);
        return (
            <Slider className="carousel-wrapper" { ...settings }>
            {this.props.artworks.map(artwork=>{
                return (
                    <div className="artwork-slide" key={artwork._id}>
                        <Link to={`/artworks/${artwork._id}`}>
                            <img src={artwork.image} alt={`${artwork.name} by ${this.props.artist.firstName} ${this.props.artist.lastName}`}/>
                        </Link>
                    </div>
                );
            })}
          </Slider>
        );
      }
  }
  
  export default ArtworkCarousel;
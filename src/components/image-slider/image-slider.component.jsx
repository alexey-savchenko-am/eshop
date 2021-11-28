import React, {useState, useEffect} from 'react';
import {SliderData} from './image-slider.data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import './image-slider.styles.scss';

const ImageSlider = ({slides}) => {
    let [current, setCurrent] = useState(0);
    const length =  SliderData.length;
    const groups = length / 3 - 1;

    const nextSlide = () => {
       setCurrent(prev => prev === groups ? 0 : prev + 1);

    };

    useEffect(() => {

        const interval = setInterval(() => nextSlide(), 5000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    const match = (n) => {
        return (n >= groups * current && n <=  groups * current + 2);
    };

    return (
      <section className="slider">
          {
              SliderData
                  .map((s, i) => {
                    return (
                          <div
                            className={match(i) ? 'slide active' : 'slide'}
                            key={i}
                          >
                              {
                                  match(i) && (<img src={s.image} alt="image" className="image"/>)
                              }
                          </div>
                        );
              })
          }
      </section>
    );
};

export default ImageSlider;
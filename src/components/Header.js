import React, { useState, useContext, useEffect } from 'react'
import Slider from "react-slick"
import { GlobalContext  } from '../context/GlobalState';

export const Header = () => {
    const { getMonthToFilter } = useContext(GlobalContext);
    const [currentSlide, setCurrentSlide] = useState(0);

    const months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
    ];

    useEffect(() => {
        getMonthToFilter(months[currentSlide])
    }, [currentSlide]);

    const settings = {
        arrows: false,
        focusOnSelect: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        afterChange: current => setCurrentSlide(current)
    };

    return (
        <Slider {...settings}>
            {
                months.map(month => 
                    <div key={month} className="slide-container">
                        <h3 className="slide-h3">{month}</h3>
                    </div>
                )
            }
        </Slider>
    )
}

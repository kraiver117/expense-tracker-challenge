import React, { useEffect, useRef } from 'react'
import Slider from "react-slick"

export const Header = () => {
    const selectedMonth = document.getElementsByClassName('slick-center');
    const carousel = useRef();
    console.log(carousel);

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

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500
    };

    return (
        <Slider ref={carousel} {...settings}>
            {
                months.map(month => 
                    <div>
                        <h3 className="slide-h3">{month}</h3>
                    </div>
                )
            }
        </Slider>
    )
}

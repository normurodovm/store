import React from 'react';
import Slider from "react-slick";
import { useGetPhones } from "../services/query/useGetPhones";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { KorzinkaIcon } from '../../icons/korzinka-icon';

export const Phones = () => {
    const { data, isLoading } = useGetPhones();
    const submit = (id) => {
        console.log(id);
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, 
        slidesToScroll: 1, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="container text-start">
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <Slider {...settings}>
                    {data.map((item) => (
                        <div key={item.id} className="p-2">
                            <img className="w-[150px]" src={item.img} alt={item.title} />
                            <h2 className="w-[157px] text-[16px] font-normal">
                                Смартфон {item.brand} {item.title} {item.color}
                            </h2>
                            <div className='flex items-center gap-3 mt-2'>
                            <h3 className='font-bold text-[20px] '>
                                {item.price}
                            </h3>
                            <button onClick={()=>submit(item.id)}><KorzinkaIcon/></button>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

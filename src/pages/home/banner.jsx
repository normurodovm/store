    import { useGetBanner } from "../services/query/useGetBanner";
    import React from "react";
    import Slider from "react-slick";
    import { SampleNextArrow } from "../../slider/SampleNextArrow";
    import { SamplePrevArrow } from "../../slider/SamplePrevArrow";

    export const Banner = () => {
        const { data, isLoading } = useGetBanner();
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        if (isLoading) {
            return <h1>Loading...</h1>;
        }

        return (
            <div className="">
                <Slider {...settings}>
                    {data?.map((item) => (
                        <div key={item.id} className="slider-item">
                            <img src={item.img} alt={`Slide ${item.id}`} className="w-full h-auto object-cover" />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    };

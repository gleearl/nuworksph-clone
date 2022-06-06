import { useState, useEffect } from "react";
import Slider from "react-slick";
import servicesData from "../data/servicesData";

function MultipleItems(props){

    const [service, setService] = useState([])

    useEffect(() => {
        const workData = servicesData.filter(data => data.id === props.id)
        setService(workData)
    },[props.id])

    const settings = {
        dots: true,
        slidesToShow: 3,
        infinite: false,
        slidesToScroll: 1,
        arrows: false
    }

    return (
        <div>
            {service.map((data) => (
                <Slider key={data.id} {...settings}>
                    
                        {data.list.map((data) => (
                        <div key={data.id}>
                            <div className="d-flex flex-column justify-content-center align-items-center service-item">
                                <img src={data.icon} alt="" width="100px" height="100px"/>
                                <div className="px-3 mt-3">
                                    <p>{data.title}</p>
                                    <p>{data.desc}</p>
                                </div>
                            </div>
                        </div>
                        ))}
                    
                </Slider>
            ))}
        </div>
      );
}

export default MultipleItems
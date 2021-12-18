import React from "react";
import 'aos/dist/aos.css';
import Aos from "aos";

const DataItem = ({id, name}) => {

    React.useEffect(() => {
        Aos.init({duration:1000});
    });

    return (
        <>
            <div data-aos={ id%2 === 0? 'zoom-in-left':'zoom-in-right' } className="items">
                <p>{id+'. '+name}</p>
            </div>
        </>
    );
};

export default DataItem;
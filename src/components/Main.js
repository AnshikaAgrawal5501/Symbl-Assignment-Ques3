import React from "react";
import Button from '@mui/material/Button';
import Data from "./Data";
import 'aos/dist/aos.css';
import Aos from "aos";

const Main = () => {

    const [isFetched, fetch]=React.useState(false);

    React.useEffect(() => {
        Aos.init({duration:750});
    });

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                <Button variant="contained" color="success" className="m-2 button" onClick={()=>{fetch(true)}}>Fetch Items</Button>
                <Button variant="contained" color="success" className="m-2 button" onClick={()=>{fetch(false)}}>Reset</Button>
            </div>

            <div className="main d-flex justify-content-center flex-column">
                {
                    isFetched? 
                    <Data /> :
                    <img data-aos="fade" src="./images/man.png" alt="" className="man d-block mx-auto px-3" /> 
                }
            </div>
        </>
    );
};

export default Main;
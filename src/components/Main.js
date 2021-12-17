import React from "react";
import Button from '@mui/material/Button';
import Data from "./Data";

const Main = () => {

    const [isFetched, fetch]=React.useState(false);

    return (
        <>
            <div className="d-flex flex-wrap justify-content-center">
                <Button variant="contained" className="m-2 button" onClick={()=>{fetch(true)}}>Fetch Items</Button>
                <Button variant="contained" className="m-2 button" onClick={()=>{fetch(false)}}>Reset</Button>
            </div>

            <div className="main d-flex justify-content-center flex-column">
                {
                    isFetched? 
                    <Data /> :
                    <img src="./images/man.png" alt="" className="img-fluid d-block mx-auto px-3" /> 
                }
            </div>
        </>
    );
};

export default Main;